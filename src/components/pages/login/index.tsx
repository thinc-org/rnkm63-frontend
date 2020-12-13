import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'

import { UserContext, UserType } from '../../../contexts/UserContext'

function Login() {
  const { t } = useTranslation('login')

  const [user, setUser] = React.useContext(UserContext)
  /*
    Here, you have a user object in the user variable.
    And a setUser function that can set the user object
    as demonstrated by the mock set user button.

    You can edit the types as appropriate in src/contexts/UserContext
  */

  // Once you got the user object from the server, just pass it to onSigninComplete
  const onSigninComplete = (user: UserType) => {
    setUser(user) //set the user into the context
  }

  //this is a mock function to 'login'.
  const mockSetUser = () => {
    onSigninComplete({
      name: 'hello',
      id: '123',
      age: 10,
    })
  }

  return (
    <>
      {
        //a demo of how you might redirect if the user is already logged in
        user && <Redirect to="/" />
      }
      <div className="Login">
        <h1>{t('title')}</h1>
        <Button onClick={mockSetUser} variant="contained" color="primary">
          Mock set user
        </Button>
      </div>
    </>
  )
}

export default Login
