import {
  Button as MUIButton,
  createMuiTheme,
  makeStyles,
  Theme,
  ThemeProvider,
} from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'
import rootTheme from 'config/theme'
import React from 'react'

const buttonTheme = createMuiTheme({
  typography: {
    fontFamily: ['Rubik', 'Kanit', 'sans-serif'].join(','),
  },
  palette: {
    primary: rootTheme.palette.success,
    secondary: rootTheme.palette.error,
  },
})

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    height: '3rem',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    borderRadius: '1.5rem',
    fontSize: '1.125rem',
    fontWeight: 700,
  },
}))

interface IStylableButton extends ButtonProps {
  className?: string | undefined
}

const Button = React.memo(function Button(props: IStylableButton) {
  const { className, ...rest } = props
  const classes = useStyles()
  return (
    <ThemeProvider theme={buttonTheme}>
      <MUIButton
        className={`${classes.button} ${className}`}
        color="primary"
        variant="contained"
        {...rest}
      />
    </ThemeProvider>
  )
})

export interface LinkButtonProps extends IStylableButton {
  target: string
  href: string
  navigate?: Function
}

function LinkButton(props: LinkButtonProps) {
  const { navigate, ...rest } = props
  const go = React.useCallback(
    (e) => {
      if (navigate) {
        e.preventDefault()
        navigate()
      }
    },
    [navigate]
  )
  return <Button {...rest} onClick={go} />
}

export { Button, LinkButton }
