import { Button } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'
import React from 'react'

export interface LinkButtonProps extends ButtonProps {
  target: string
  href: string
  navigate: Function
}
// <Link component={Button} /> causes an undesired page refresh.
// Use <Link component={LinkButton} /> instead.
function LinkButton(props: LinkButtonProps) {
  const { navigate, ...rest } = props
  const go = React.useCallback(
    (e) => {
      e.preventDefault()
      navigate()
    },
    [navigate]
  )
  return <Button {...rest} onClick={go} />
}
export default LinkButton
