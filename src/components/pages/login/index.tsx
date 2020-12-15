import React from 'react'
import './Login.css'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LoginButton from '../../LoginButton'
import LoginCheckbox from '../../LoginCheckbox'
import { SendTicketToBack } from '../../../controllers/LoginController'
import { useTranslation } from 'react-i18next'
import { Link, useHistory } from 'react-router-dom'

import { Loading, Error } from '../../common'

import { UserContext, UserType } from '../../../contexts/UserContext'

const LoginTitle = withStyles({
  root: {
    color: 'white',
    fontFamily: 'rubik',
    fontSize: 60,
    fontWeight: 500,
  },
})(Typography)

function LoginSuspenseHOC() {
  return (
    <React.Suspense fallback={Loading}>
      <Login />
    </React.Suspense>
  )
}

function Login() {
  const { t } = useTranslation('login')

  const [user, setUser] = React.useContext(UserContext)
  const [agree, setAgree] = React.useState(false)

  const history = useHistory()
  /*
    Here, you have a user object in the user variable.
    And a setUser function that can set the user object
    as demonstrated by the mock set user button.

    You can edit the types as appropriate in src/contexts/UserContext
  */

  // Once you got the user object from the server, just pass it to onSigninComplete
  const onSigninComplete = (user: UserType) => {
    setUser(user) //set the user into the context
    history.push('/') //redirect to home
  }

  //this is a mock function to 'login'.
  const mockSetUser = () => {
    onSigninComplete({
      name: 'hello',
      id: '123',
      age: 10,
    })
  }

  function toggleAgree() {
    setAgree(!agree)
  }

  React.useEffect(() => {
    let query = new URLSearchParams(window.location.search)
    let ticket = query.get('ticket')
    console.log(ticket)
    if (ticket != null) {
      /*
      SendTicketToBack(ticket, (session) => {
        console.log(session)
      })
      */
      mockSetUser()
    }
  })

  return (
    <>
      {
        //a demo of how you might show an error if the user is already logged in
        user && (
          <div>
            <Error
              title={`You're already logged in as ${user.name}`}
              detail="bruh"
            />
            <Link to="/">Go Back</Link>
          </div>
        )
      }
      <Box mx="auto" maxWidth="500px" px="10px">
        <Box mb={3}>
          <LoginTitle variant="h1">{t('title')}</LoginTitle>
        </Box>
        <Card>
          <Box p={3}>
            <Box fontSize={16} mb={5}>
              {t('description')}
            </Box>
            <LoginCheckbox update={toggleAgree} text={t('agreement')} />
            <Box mt={5}>
              <LoginButton agree={agree} text={t('login')} />
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  )
}

export default LoginSuspenseHOC
