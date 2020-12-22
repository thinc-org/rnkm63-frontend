import { Button } from '@material-ui/core'
import { Connect } from 'controllers/LoginController'
import React from 'react'

import indexStyle from './indexStyle'

type Props = {
  children?: React.ReactNode
  agree?: boolean
}

function LoginButton({ agree, children }: Props) {
  const style = indexStyle()

  return (
    <Button
      fullWidth={true}
      disabled={!agree}
      className={style.button}
      color="primary"
      variant="contained"
      onClick={Connect}
    >
      {children}
    </Button>
  )
}

export default LoginButton
