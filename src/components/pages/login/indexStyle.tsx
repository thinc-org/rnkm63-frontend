import { makeStyles, Theme } from '@material-ui/core'

const indexStyle = makeStyles((theme: Theme) => ({
  login: {
    maxWidth: '25rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '2rem',
  },
  container: {
    padding: '2rem 1rem',
    borderRadius: 5,
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '1rem',
    fontWeight: 400,
    marginBottom: '1rem',
  },
  checkboxForm: {
    marginBottom: '2rem',
  },
  agreement: {
    fontSize: '0.8rem',
    fontWeight: 400,
  },
  checkbox: {},
  button: {
    border: 0,
    margin: 0,
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 700,
  },
}))

export default indexStyle
