import React from 'react'

interface IUser {
  name: string
  id: string
  age?: number
}

export type User = IUser | null

export type SetUser = (user: User) => void

interface UserConstruct {
  user: User
  setUser: SetUser
}

export const UserContext = React.createContext({} as UserConstruct)

export function UserProvider(props: any) {
  const [user, setUser] = React.useState<User>(null)
  const value = { user, setUser }
  return <UserContext.Provider value={value} {...props} />
}
