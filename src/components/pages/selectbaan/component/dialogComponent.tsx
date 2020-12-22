import React from 'react'
import { createStyles, WithStyles, Theme } from '@material-ui/core/styles'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: '0',
      padding: '0',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    title: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: '28px',
    },
  })

interface DialogTitleProps extends WithStyles<typeof styles> {
  id?: string
  children: React.ReactNode
  onClose: () => void
}

export const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.title}>
      <Typography className={classes.title}>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})
