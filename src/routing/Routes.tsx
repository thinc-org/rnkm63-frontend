import { Container, makeStyles } from '@material-ui/core'
import { Loading } from 'components/common'
import { fail } from 'components/ErrorProvider'
import ErrorProvider from 'components/ErrorProvider'
import {
  Baan,
  Covid,
  Form,
  FormComplete,
  Login,
  Profile,
  Schedule,
} from 'components/pages'
import { Header } from 'components/shell'
import { UserContext } from 'contexts/UserContext'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

const useStyles = makeStyles({
  PageContainer: {
    flex: 1,
  },
})

function RedirectTo(to: string): React.FC {
  return () => <Redirect to={to} />
}

export default function Routes() {
  const classes = useStyles()

  const { user, isLoaded, error } = React.useContext(UserContext)
  const status = error?.status ?? 0
  const isLoggedOut = status >= 401 && status <= 404 && isLoaded

  // show failure if there is an error and that error isn't just that the user is not logged in.
  React.useEffect(() => {
    if (error && !isLoggedOut && isLoaded) fail(error)
  }, [error, isLoggedOut, isLoaded])

  const isConfirm = user?.isConfirm
  const currentBaan = user?.currentBaan

  // Each route in the table below will only be allowed if its condition is true.
  // If the URL matches no valid route, we redirect to the first route that is allowed. (see firstMatchPath below)
  // So put routes with higher priority first. E.g. Profile comes before Baan and Schedule,
  //    so if a user with isConfirm=true enters an invalid path, they gets redirected to Profile

  // prettier-ignore
  const routes = [
        {path: '/login',          component: Login,          condition: isLoggedOut                                         },
        {path: '/',               component: Profile,        condition: isConfirm || currentBaan === -1                     },
        {path: '/form',           component: Form,           condition: user && !isConfirm                                  },
        {path: '/covid',          component: Covid,          condition: user && !isConfirm && currentBaan !== -1            },
        {path: '/baan',           component: Baan,           condition: isConfirm                                           },
        {path: '/schedule',       component: Schedule,       condition: isConfirm                                           },
        {path: '/form/complete',  component: FormComplete,   condition: isConfirm                                           },
  ].filter(({condition}) => condition)

  const firstMatchPath = routes[0]?.path ?? '/'

  return (
    <>
      <Header
        allowedRoutes={routes.map(({ path }) => path)}
        isLoggedOut={isLoggedOut}
      />
      <Container className={classes.PageContainer}>
        <ErrorProvider>
          {!isLoaded ? (
            <Loading />
          ) : (
            routes.length > 0 && (
              <Switch>
                {routes.map(({ path, component }) => (
                  <Route path={path} exact component={component} key={path} />
                ))}
                <Route component={RedirectTo(firstMatchPath)} />
              </Switch>
            )
          )}
        </ErrorProvider>
      </Container>
    </>
  )
}
