import React from 'react'
import { Button } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { Connect } from '../controllers/LoginController'

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode
  agree?: boolean
  text?: string
}

const styles = {
  root: {
    background: '#44AD53',
    borderRadius: 20,
    border: 0,
    height: 45,
  },
  label: {
    color: 'white',
    fontSize: 18,
    fontWeight: 700,
    fontFamily: 'kanit',
  },
  disabled: {
    background: 'grey',
  },
}

function LoginButton(props: Props) {
  const { classes, agree } = props

  return (
    <Button
      fullWidth={true}
      onClick={Connect}
      disabled={!agree}
      classes={classes}
      style={{ textTransform: 'none' }}
    >
      {props.children}
    </Button>
  )
}

export default withStyles(styles)(LoginButton)
