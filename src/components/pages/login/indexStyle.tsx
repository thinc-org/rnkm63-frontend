import { makeStyles } from '@material-ui/core'

const indexStyle = makeStyles((theme: any) => ({
  login: {
    maxWidth: 375,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    padding: '40px 20px',
    borderRadius: 5,
  },
  title: {
    fontSize: 38,
    color: 'white',
    fontWeight: 700,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 11,
  },
  checkboxForm: {
    marginBottom: 36,
  },
  agreement: {
    fontSize: 12,
    fontWeight: 400,
  },
  checkbox: {
    color: '#27AE60',
  },
  button: {
    background: '#44AD53',
    borderRadius: 20,
    border: 0,
    height: 45,
    textTransform: 'none',
    color: 'white',
    fontSize: 20,
    fontWeight: 700,
  },
}))

export default indexStyle
