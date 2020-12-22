import React from 'react'

import { IRequestError, RequestError } from '../components/common/Error'
import getUser from '../controllers/GetUserController'

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
  constructor(props: any) {
    super(props)
    this.state = {
      user: null,
      isLoaded: false,
      error: null,
    }
    this.loadRequested = 0
  }
  load: () => Promise<void> = () => {
    this.loadRequested++
    const loadNumber = this.loadRequested
    // copy the number of the current load into loadNumber
    return new Promise((resolve) => {
      this.setState({
        user: null,
        isLoaded: false,
        error: null,
      })
      getUser()
        .then((u) => {
          if (!(u && isIUser(u))) throw RequestError(500, null)

          // Only use the load result if it is the last load called.
          // i.e. no load was requested after this one.
          if (this.loadRequested === loadNumber) {
            this.setState(
              {
                user: u,
                isLoaded: true,
                error: null,
              },
              resolve
            )
          } else resolve()
        })
        .catch((e) => {
          // Only use the load result if it is the last load called.
          // i.e. no load was requested after this one.
          if (this.loadRequested === loadNumber) {
            this.setState(
              {
                user: null,
                isLoaded: true,
                error: e,
              },
              resolve
            )
          } else resolve()
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
