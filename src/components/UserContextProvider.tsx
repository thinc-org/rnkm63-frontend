import React, { useContext, useState } from 'react';

// types
export type User = {uid: string, username: string, gecos: string, email: string, roles: string[], ouid: string, password: string, loggedIn: boolean, ticket: string}
export type Dispatch = (state: User) => void
type ProviderProps = {children: React.ReactNode}

const UserContext = React.createContext<User | undefined>(undefined);
const UserUpdateContext = React.createContext<Dispatch | undefined>(undefined);

// use this hook
function GetUser() {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('GetUser must be used within a UserContextProvider')
    }
    return context
}

// use this hook
function GetUserSetter() {
    const context = useContext(UserUpdateContext)
    if (context === undefined) {
        throw new Error('GetUserSetter must be used within a UserContextProvider')
    }
    return context
}

function UserContextProvider ({ children } : ProviderProps) {
    const [user, setUser] = useState({uid: "", username: "", gecos: "", email: "", roles: [""], ouid: "", password: "", loggedIn: false, ticket: ""});

    function updateUser(state: User) {
        setUser(state);
    }

    return (
        <UserContext.Provider value={user}>
            <UserUpdateContext.Provider value={updateUser}>
                { children }
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    );
}

export { GetUser, GetUserSetter, UserContextProvider }