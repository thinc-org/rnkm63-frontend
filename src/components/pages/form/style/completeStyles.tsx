import { makeStyles, Theme } from '@material-ui/core'

const completeStyle = makeStyles(
  (theme: Theme) => ({
    container: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      transform: 'translate(-50%, -50%)',
    },
    title: {
      fontWeight: 700,
      fontSize: '1.375rem',
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
        fontWeight: 500,
        fontSize: '3.75rem',
      },
    },
    description: {
      marginTop: theme.spacing(2),
      fontWeight: 500,
      width: 220,
      margin: 'auto',
      fontSize: '0.875rem',
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(3),
        width: '100%',
        fontSize: '1.25rem',
      },
    },
    button: {
      margin: 'auto',
      display: 'block',
      textAlign: 'center',
      width: '206px',
      borderRadius: '40px',
      fontWeight: 700,
      fontSize: '1.375rem',
      textTransform: 'none',
      marginTop: theme.spacing(3),
      backgroundColor: theme.palette.success.main,
      '&:hover': {
        backgroundColor: theme.palette.success.main,
      },
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(5),
        fontSize: '1.125rem',
      },
    },
  }),
  { index: 1 }
)

export default completeStyle
