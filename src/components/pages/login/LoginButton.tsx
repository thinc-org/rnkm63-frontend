import { Button } from 'components/common'
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
      onClick={Connect}
    >
      {children}
    </Button>
  )
}

export default LoginButton
