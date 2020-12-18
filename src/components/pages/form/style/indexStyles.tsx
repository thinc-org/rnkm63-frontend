import { makeStyles, Theme } from '@material-ui/core'

const indexStyle = makeStyles(
  (theme: Theme) => ({
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
    },
    title: {
      fontSize: '3.75rem',
      fontWeight: 500,
      marginBottom: theme.spacing(4),
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    content: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    image: {
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        width: '207px',
      },
    },
    formInput: {
      [theme.breakpoints.up('md')]: {
        display: 'inline',
        marginLeft: theme.spacing(2.5),
        flexGrow: 1,
      },
    },
    submitButton: {
      background: theme.palette.success.main,
      borderRadius: '40px',
      width: '100%',
      display: 'block',
      margin: 'auto',
      fontSize: '1.125rem',
      fontWeight: 700,
      textTransform: 'none',
      '&:hover': {
        background: theme.palette.success.main,
      },
      [theme.breakpoints.up('sm')]: {
        width: '434px',
      },
    },
    submitNote: {
      textAlign: 'center',
      color: theme.palette.warning.main,
      fontWeight: 400,
      fontSize: '	0.75rem',
      marginTop: theme.spacing(1.5),
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(2),
      },
    },
    dialog: {
      background: 'white',
      color: theme.palette.text.secondary,
      width: '327px',
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(4),
        width: '474px',
      },
    },
    dialogTitle: {
      textAlign: 'center',
      fontWeight: 700,
      fontSize: '1.25rem',
      margin: 0,
    },
    dialogContent: {
      textAlign: 'center',
      fontWeight: 300,
      fontSize: '1rem',
      margin: 0,
      marginBottom: theme.spacing(2),
    },
    button: {
      width: '129px',
      color: 'white',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: 700,
      textTransform: 'none',
      [theme.breakpoints.up('sm')]: {
        width: '207px',
      },
    },
    confirm: {
      background: theme.palette.success.main,
      '&:hover': {
        backgroundColor: theme.palette.success.main,
      },
    },
    cancel: {
      background: theme.palette.error.main,
      '&:hover': {
        backgroundColor: theme.palette.error.main,
      },
    },
    dialogAction: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
  }),
  { index: 1 }
)

export default indexStyle
