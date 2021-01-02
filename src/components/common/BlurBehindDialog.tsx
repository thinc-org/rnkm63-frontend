import { Dialog, DialogProps, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  backdrop: {
    backdropFilter: 'blur(8px)',
  },
})

export function BlurBehindDialog(props: DialogProps) {
  const classes = useStyles()
  return (
    <Dialog
      {...props}
      BackdropProps={{
        ...props.BackdropProps,
        className: `${classes.backdrop} ${props.BackdropProps?.className}`,
      }}
    />
  )
}
