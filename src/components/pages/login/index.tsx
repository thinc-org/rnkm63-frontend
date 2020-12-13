import React from 'react'
import { Button, Box } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'

import { UserContext, User } from '../../../contexts/UserContext'

function Login() {
  const { t } = useTranslation('login')

  const { user, setUser } = React.useContext(UserContext)
  /*
    Here, you have a user object in the user variable.
    And a setUser function that can set the user object
    as demonstrated by the mock set user button.

    You can edit the types as appropriate in src/contexts/UserContext
  */

  // Once you got the user object from the server, just pass it to onSigninComplete
  const onSigninComplete = React.useCallback(
    (u: User) => {
      setUser(u) //set the user into the context
    },
    [setUser]
  )

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
        !!user && <Redirect to="/" />
      }
      <Box>
        <h1>{t('title')}</h1>
        <Button onClick={mockSetUser} variant="contained" color="primary">
          Mock set user
        </Button>
      </Box>
    </>
  )
}

export default Login
