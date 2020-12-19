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

const IUSER_FIELDS = [
  'data',
  'isNameWrong',
  'isImgWrong',
  'reason',
  'isQualified',
  'isConfirm',
  'isTransfer',
  'currentBaan',
  'preferBaan',
]

function isIUser(u: any): u is IUser {
  for (const field of IUSER_FIELDS) {
    if (!(field in u)) return false
  }
  return true
}

interface IUserState {
  user: IUser | null
  isLoaded: boolean
  error: IRequestError | null
}

interface IUserContext extends IUserState {
  load: () => Promise<void>
}

export const UserContext = React.createContext({} as IUserContext)

export class UserProvider extends React.Component<any, IUserState> {
  loadRequested: number
  loadCompleted: number
  constructor(props: any) {
    super(props)
    this.state = {
      user: null,
      isLoaded: false,
      error: null,
    }
    this.loadRequested = 0
    this.loadCompleted = 0
  }
  load: () => Promise<void> = () => {
    this.loadRequested++
    const loadNumber = this.loadRequested
    return new Promise((resolve) => {
      this.setState(
        {
          user: null,
          isLoaded: false,
          error: null,
        },
        resolve
      )
      getUser()
        .then((u) => {
          this.loadCompleted++
          if (!(u && isIUser(u))) throw RequestError(500, null)
          if (this.loadCompleted <= loadNumber)
            this.setState({
              user: u,
              isLoaded: true,
              error: null,
            })
        })
        .catch((e) => {
          this.loadCompleted++
          if (this.loadCompleted <= loadNumber)
            this.setState({
              user: null,
              isLoaded: true,
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
