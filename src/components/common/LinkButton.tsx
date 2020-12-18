import React from 'react'
import { Button } from '@material-ui/core'

// <Link component={Button} /> causes an undesired page refresh.
// Use <Link component={LinkButton} /> instead.
function LinkButton(props: any) {
  const { onClick, navigate, ...rest } = props
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
