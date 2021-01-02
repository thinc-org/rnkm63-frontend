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
    confirmButton: {
      width: '40%',
      maxWidth: '30rem',
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
    dialogButton: {
      width: '129px',
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
      textAlign: 'center',
    },
  }),
  { index: 1 }
)

export default indexStyle
