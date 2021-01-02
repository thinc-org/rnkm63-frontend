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
    fontSize: '2.125rem',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.125rem',
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
    [theme.breakpoints.down(600)]: {
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
    fontSize: '2.125rem',
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.125rem',
    },
  },
  request: {
    fontSize: '1.25rem',
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.75rem',
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
      maxWidth: '200px',
    },
    [theme.breakpoints.down(600)]: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      maxWidth: '300px',
    },
  },
  button: {
    fontSize: '1.125rem',
    fontWeight: 700,
    width: '94px',
    textTransform: 'none',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      height: '26px',
      maxWidth: '115px',
      width: '47%',
      fontSize: '0.875rem',
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
    [theme.breakpoints.down(600)]: {
      marginTop: theme.spacing(2),
    },
  },
}))
