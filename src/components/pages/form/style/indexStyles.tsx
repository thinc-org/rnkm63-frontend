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
      height: '43px',
      display: 'block',
      fontSize: '1rem',
      fontWeight: 700,
      margin: 'auto',
      textTransform: 'none',
      '&:hover': {
        background: theme.palette.success.main,
      },
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        fontSize: '1.125rem',
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
      background: '#383838',
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
      color: theme.palette.text.primary,
      fontSize: '1.25rem',
      margin: 0,
    },
    dialogContent: {
      textAlign: 'center',
      fontWeight: 300,
      color: theme.palette.text.primary,
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
    leaveContainer: {
      width: '280px',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    leaveEvent: {
      background: theme.palette.error.main,
      borderRadius: '40px',
      width: '280px',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '18px',
      '&:hover': {
        backgroundColor: theme.palette.error.main,
      },
    },
    leaveEventDescription: {
      paddingTop: theme.spacing(1),
      textAlign: 'center',
      color: '#F2C94C',
      fontSize: '12px',
    },
    confirmContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
      },
    },
    submitContainer: {
      display: 'block',
      width: '50%',
      margin: 'auto',
    },
    leaveMobile: {
      width: '50%',
      height: '43px',
      textTransform: 'none',
      fontWeight: 700,
      background: theme.palette.error.main,
      borderRadius: '40px',
      fontSize: '1rem',
      marginRight: theme.spacing(1.5),
      '&:hover': {
        backgroundColor: theme.palette.error.main,
      },
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down(320)]: {
        fontSize: '0.8rem',
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
  { index: 1 }
)

export default indexStyle
