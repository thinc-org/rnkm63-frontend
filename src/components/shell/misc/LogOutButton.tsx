import React from 'react'
import Button from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'
import { LogOut } from '../../../controllers/LoginController'
import { Link } from 'react-router-dom'
import { ButtonProps } from '@material-ui/core/Button'
import { UserContext } from '../../../contexts/UserContext'

function LogOutButton(props: ButtonProps) {
  const { load, user } = React.useContext(UserContext)

  const ToLogOut = React.useCallback(() => {
    LogOut()
      .then(() => {
        console.log('Logged out')
        load()
      })
      .catch((e: number) => {
        console.warn(`Log out failed: ${e}`)
      })
  }, [])

  return <Button onClick={ToLogOut} {...props} />
}
export default LogOutButton
