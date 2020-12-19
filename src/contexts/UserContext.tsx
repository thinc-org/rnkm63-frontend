import React from 'react'
import getUser from '../controllers/GetUserController'
import { RequestError, IRequestError } from '../components/common/Error'

export interface IUserData {
  prefixname: string
  realname: string
  surname: string
  nickname: string
  religion: string
  disease: string
  allergy: string
  allergyMedicine: string
  usedMedicine: string
  foodRestriction: string
  disability: string
  tel: string
  emergencyTel: string
  emergencyTelRelationship: string
  facebook: string
  lineID: string
  imgURL: string
  facultyEn?: string
  facultyTh?: string
}

export interface IUser {
  data: IUserData | null
  isNameWrong: boolean
  isImgWrong: boolean
  reason: string | null
  isQualified: boolean
  isConfirm: boolean
  isTransfer: boolean
  currentBaan: number
  preferBaan: number | null
}

/*TYPE GUARDS*/
// We trust the backend to return the correct data
/*function isIUserData(d: any): d is IUserData {

  return d != null
}*/
// In backend we trust
function isIUser(u: any): u is IUser {
  return true
}

interface IUserState {
  user: IUser | null
  isLoaded: boolean
  isError: boolean
  error: IRequestError | null
}

interface IUserContext extends IUserState {
  load: () => Promise<null>
}

export const UserContext = React.createContext({} as IUserContext)

/*export function UserProvider(props: any) {
  const [user, setUser] = React.useState<IUserState>({
    user: null,
    isLoaded: false,
    isError: false,
    error: null,
  })
  const load = React.useCallback(async () => {
      console.log("getting user");
    try {
      const u = await getUser()
      if (!(u && isIUser(u))) throw RequestError(500, null)
      console.log("got user")
      console.log(u);
      setUser({
        user: u,
        isLoaded: true,
        isError: false,
        error: null,
      })
    } catch (e) {
        console.warn("failed to get user")
        console.log(e)
      setUser({
        user: null,
        isLoaded: true,
        isError: true,
        error: e,
      })
    }
}, [setUser])

const load = React.useCallback(() => {
    return new Promise(async (resolve, reject) => {
        try {
          const u = await getUser()
          if (!(u && isIUser(u))) throw RequestError(500, null)
          console.log("got user")
          console.log(u);
          setUser({
            user: u,
            isLoaded: true,
            isError: false,
            error: null,
        }, resolve)
        } catch (e) {
            console.warn("failed to get user")
            console.log(e)
          setUser({
            user: null,
            isLoaded: true,
            isError: true,
            error: e,
        }, reject)
        }
    })
}, [setUser])

  React.useEffect(() => {
    load()
  }, [load])
  const value = { ...user, load }
  return <UserContext.Provider value={value} {...props} />
}
*/
export class UserProvider extends React.Component<any, IUserState> {
  loadRequested: number
  loadCompleted: number
  constructor(props: any) {
    super(props)
    this.state = {
      user: null,
      isLoaded: false,
      isError: false,
      error: null,
    }
    this.loadRequested = 0
    this.loadCompleted = 0
  }
  load: () => Promise<null> = () => {
    this.loadRequested++
    return new Promise((resolve) => {
      this.setState(
        {
          user: null,
          isLoaded: false,
          isError: false,
          error: null,
        },
        resolve
      )
      getUser()
        .then((u) => {
          this.loadCompleted++
          if (!(u && isIUser(u))) throw RequestError(500, null)
          if (this.loadCompleted === this.loadRequested)
            this.setState({
              user: u,
              isLoaded: true,
              isError: false,
              error: null,
            })
        })
        .catch((e) => {
          this.loadCompleted++
          if (this.loadCompleted === this.loadRequested)
            this.setState({
              user: null,
              isLoaded: true,
              isError: true,
              error: e,
            })
        })
    })
  }
  componentDidMount() {
    this.load()
  }
  render() {
    const value = { ...this.state, load: this.load }
    return <UserContext.Provider value={value} {...this.props} />
  }
}
