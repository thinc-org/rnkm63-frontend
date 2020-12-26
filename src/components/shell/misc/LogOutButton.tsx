import Button from '@material-ui/core/Button'
import { ButtonProps } from '@material-ui/core/Button'
import { fail, IFailure } from 'components/ErrorProvider'
import { UserContext } from 'contexts/UserContext'
import { LogOut } from 'controllers/LoginController'
import React from 'react'

function LogOutButton(props: ButtonProps) {
  const { load } = React.useContext(UserContext)

  const ToLogOut = React.useCallback(() => {
    LogOut()
      .then(() => {
        load()
      })
      .catch((e: IFailure) => {
        fail(e)
        console.warn(`Log out failed: ${e}`)
      })
  }, [load])

  return <Button onClick={ToLogOut} {...props} />
}
export default LogOutButton
