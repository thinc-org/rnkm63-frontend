import { makeStyles, Theme } from '@material-ui/core/styles'
interface Props {
  baanNameColor: string
  requestColor: string
}
export const pendingStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    maxWidth: '887px',
    margin: 'auto',
  },
  title: {
    textAlign: 'left',
    fontWeight: 700,
    fontSize: '34px',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },
  container: {
    margin: 'auto',
    background: theme.palette.primary.main,
    borderRadius: '4px',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      borderRadius: '15px',
    },
  },
  content: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
  logo: {
    marginRight: theme.spacing(3),
    height: '85px',
    width: '85px',
    borderRadius: '50px',
    display: 'inline',
    [theme.breakpoints.down('xs')]: {
      height: '50px',
      width: '50px',
    },
  },
  baanName: {
    color: (props: Props) =>
      props.baanNameColor === 'Red'
        ? theme.palette.error.main
        : theme.palette.warning.main,
    fontSize: '34px',
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },
  request: {
    fontSize: '20px',
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
    '& span': {
      color: (props: Props) =>
        props.requestColor === 'Green'
          ? theme.palette.success.main
          : props.requestColor === 'Yellow'
          ? theme.palette.warning.main
          : theme.palette.error.main,
    },
  },
  buttonContainer: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      maxWidth: '300px',
    },
  },
  button: {
    fontSize: '18px',
    fontWeight: 700,
    borderRadius: '20px',
    height: '40px',
    width: '94px',
    textTransform: 'none',
    [theme.breakpoints.down('xs')]: {
      height: '26px',
      maxWidth: '115px',
      width: '47%',
      fontSize: '14px',
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(0),
    },
  },
  change: {
    marginLeft: theme.spacing(3),
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
}))
