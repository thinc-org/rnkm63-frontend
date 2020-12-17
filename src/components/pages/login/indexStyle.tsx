import { makeStyles, Theme } from '@material-ui/core'

const indexStyle = makeStyles((theme: Theme) => ({
  login: {
    maxWidth: 375,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
  },
  container: {
    padding: '30px 20px',
    borderRadius: 5,
  },
  title: {
    fontSize: 38,
    color: theme.palette.text.primary,
    fontWeight: 700,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 11,
    color: theme.palette.text.secondary,
  },
  checkboxForm: {
    marginBottom: 30,
  },
  agreement: {
    fontSize: 12,
    fontWeight: 400,
    color: theme.palette.text.secondary,
  },
  checkbox: {
    color: theme.palette.success.main,
  },
  button: {
    background: theme.palette.success.main,
    borderRadius: 20,
    border: 0,
    height: 45,
    textTransform: 'none',
    color: theme.palette.text.primary,
    fontSize: 16,
    fontWeight: 700,
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
}))

export default indexStyle
