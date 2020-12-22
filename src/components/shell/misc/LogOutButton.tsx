import Button from '@material-ui/core/Button'
import { ButtonProps } from '@material-ui/core/Button'
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
      .catch((e: number) => {
        console.warn(`Log out failed: ${e}`)
      })
  }, [load])

  return <Button onClick={ToLogOut} {...props} />
}
export default LogOutButton
