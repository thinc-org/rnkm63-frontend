import { fail, IFailure } from 'components/ErrorProvider'
import getUser from 'controllers/GetUserController'
import React from 'react'

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
// This is just a preliminary type guard. Mostly to convince typescript.
// We still need the backend to return the correct data.
function isIUser(u: any): u is IUser {
  for (const field of IUSER_FIELDS) {
    if (!(field in u)) return false
  }
  return true
}

interface IUserState {
  user: IUser | null
  isLoaded: boolean
  error: IFailure | null
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

  /*
  load().
  Load a User object from the server,
    and put it into the Context.

  If there is an error, put that error into the Context.

  Resolves once the context finishes updating.

  Steps:
    * Return a Promise.
    * Get the user object from the server.
    * Put it in the Context.
        Or if there is an error, put the error in the context.
    * Resolve the Promise.


  If this function was called while a load was already in progress,
    only the latest load request will be put in the Context.

    For example:
    * this.load() called.
        Return Promise I.
        Start load request A.
    * this.load() called again while A haven't finished yet.
        Return Promise II.
        Start load request B.
    * A finishes, but we consider the result 'stale'
        (because a newer request, B, is in progress)
        So we don't put A's result into the context.
        Resolve Promise I.
    * B finishes.
        Since no other load request was started,
        we consider the result fresh.
        Put result of B into the Context.
        Resolve Promise II.

    Alternatively, if B finishes first despite starting later,
        *we will still put the result of B in the Context*,
        and ignore the result of A.


  */

  load: () => Promise<void> = () => {
    this.loadRequested++
    // This is used to track whether a load is the 'latest' one.

    const loadNumber = this.loadRequested
    // Copy the 'number' of the current load into loadNumber.
    // Because we want the value when the request started.

    return new Promise((resolve) => {
      // Set values to null and isLoaded to false.
      this.setState({
        user: null,
        isLoaded: false,
        error: null,
      })

      // Launch the request
      getUser()
        .then((u) => {
          // If the result doesn't pass the type check above,
          //   than backend is wrong.
          if (!(u && isIUser(u))) {
            fail(null)
          }

          // Only use the load result if it is the last load called.
          // i.e. no load was requested after this one.
          if (this.loadRequested === loadNumber) {
            // The load request is the latest one. All is good
            // Put the result into the context.
            this.setState(
              {
                user: u,
                isLoaded: true,
                error: null,
              },
              resolve // Once the context finishes updating, resolve the promise
            )
          } else {
            // The load request is not the latest one.
            // Don't put the result into the Context.
            // Just resolve the promise.
            resolve()
          }
        })
        .catch((e) => {
          // Catch errors
          // Error may be from GetUserController (see that file),
          // or from the possible 500 above.

          // In most cases,
          //   the error would be a 401 because user isn't logged in.

          // Only use the load result if it is the last load called.
          // i.e. no load was requested after this one.
          if (this.loadRequested === loadNumber) {
            // Put the error into the Context.
            this.setState(
              {
                user: null,
                isLoaded: true,
                error: e,
              },
              resolve // Once the context finishes updating, resolve the promise
            )
          } else {
            // The load request is not the latest one.
            // Don't put the result into the Context.
            // Just resolve the promise.
            resolve()
          }
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
