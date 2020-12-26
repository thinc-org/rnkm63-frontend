import { CardActionArea, createStyles, Theme } from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/styles'
import React from 'react'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      '&:hover $focusHighlight': {
        opacity: 0,
      },
    },
    focusHighlight: {},
  })

interface CardActionAreaProps extends WithStyles<typeof styles> {
  children: React.ReactNode
  onClick: () => void
}

export const StyledCardAction = withStyles(styles)(
  (props: CardActionAreaProps) => {
    const { children, classes, onClick, ...other } = props
    return (
      <CardActionArea onClick={onClick} {...other}>
        {children}
      </CardActionArea>
    )
  }
)
