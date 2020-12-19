import React from 'react'
import getUser from '../controllers/GetUserController'
import { RequestError, IRequestError } from '../components/common/Error'

interface IUserData {
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
function isIUserData(d: any): d is IUserData {
  // We trust the backend to return the correct data
  return d != null
}

function isIUser(u: any): u is IUser {
  // In backend we trust
  return true
}

interface IUserState {
  user: IUser | null
  isLoaded: boolean
  isError: boolean
  error: IRequestError | null
}

interface IUserContext extends IUserState {
  load: () => void
}

export const UserContext = React.createContext({} as IUserContext)

export function UserProvider(props: any) {
  const [user, setUser] = React.useState<IUserState>({
    user: null,
    isLoaded: false,
    isError: false,
    error: null,
  })

  const [error, setError] = React.useState()
  const load = React.useCallback(async () => {
    try {
      const u = await getUser()
      if (!(u && isIUser(u))) throw RequestError(500, null)
      setUser({
        user: u,
        isLoaded: true,
        isError: false,
        error: null,
      })
    } catch (e) {
      setUser({
        user: null,
        isLoaded: true,
        isError: true,
        error: e,
      })
    }
  }, [setUser])

  React.useEffect(() => {
    load()
  }, [load])
  const value = { ...user, load }
  return <UserContext.Provider value={value} {...props} />
}
