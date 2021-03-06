import { Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, Theme, WithStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(0),
      padding: theme.spacing(0),
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
      paddingTop: theme.spacing(0.5),
      fontSize: '1.75rem',
    },
    centerit: {},
    button_select: {},
    button_select_card: {},
    dialog_title: {},
    card_title: {},
    card_text: {},
    fbandigicon_item: {},
    fbandigicon_text: {},
    avatar_picture: {},
    avatar_picture_card: {},
    focusHighlight: {},
    actionArea: {},
  })

interface DialogTitleProps extends WithStyles<typeof styles> {
  id?: string
  children: React.ReactNode
  onClose: () => void
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props
  return (
    <div className={classes.title} {...other}>
      <Typography className={classes.title}>{children}</Typography>
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    </div>
  )
})

export default React.memo(DialogTitle)
