import { Loading } from 'components/common'
import { fail } from 'components/ErrorProvider'
import {
  Baan,
  Covid,
  Form,
  FormComplete,
  Login,
  Profile,
  Schedule,
} from 'components/pages'
import { UserContext } from 'contexts/UserContext'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

function RedirectTo(to: string): React.FC {
  return () => <Redirect to={to} />
}

export default function Routes() {
  const { user, isLoaded, error } = React.useContext(UserContext)
  if (!isLoaded) return <Loading />

  const status = error?.status ?? 0
  const isLoggedOut = status >= 401 && status <= 404
  if (error && !isLoggedOut) return fail(error) // If there is an error that isn't 401-404, fail.

  const isConfirm = user?.isConfirm
  const currentBaan = user?.currentBaan

  // Each route in the table below will only be allowed if its condition is true.
  // If the URL matches no valid route, we redirect to the first route that is allowed. (see firstMatchPath below)
  // So put routes with higher priority first. E.g. Profile comes before Baan and Schedule,
  //    so if a user with isConfirm=true enters an invalid path, they gets redirected to Profile

  // prettier-ignore
  const routes = [
        {path: '/login',          component: Login,          condition: isLoggedOut                         },
        {path: '/form',           component: Form,           condition: !isConfirm                          },
        {path: '/covid',          component: Covid,          condition: !isConfirm && currentBaan !== -1    },
        {path: '/',               component: Profile,        condition: isConfirm || currentBaan === -1     },
        {path: '/baan',           component: Baan,           condition: isConfirm                           },
        {path: '/schedule',       component: Schedule,       condition: isConfirm                           },
        {path: '/form/complete',  component: FormComplete,   condition: isConfirm                           },
  ]

  const firstMatchPath = routes.find((r) => r.condition)?.path ?? '/' // There would always be a match for the find(). The ?? "/" is just to placate typescript.

  return (
    <Switch>
      {routes
        .filter((r) => r.condition)
        .map(({ path, component }) => (
          <Route path={path} exact component={component} key={path} />
        ))}
      <Route component={RedirectTo(firstMatchPath)} />
    </Switch>
  )
}
