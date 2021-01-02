import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1.5),
    backgroundColor: '#383838',
    height: 'auto',
    width: '207px',
  },
  actionArea: {
    '&:hover $focusHighlight': {
      opacity: 0,
    },
  },
  focusHighlight: {},
  centerit: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button_select_card: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    fontSize: '1.125rem',
    marginBottom: '20px',
    width: '171px',
    borderRadius: '40px',
    height: '40px',
    backgroundColor: '#44AD53',
    '&:hover': {
      backgroundColor: theme.palette.success.main,
    },
  },
  dialog_title: {
    textAlign: 'center',
    color: 'white',
    fontSize: '1.75rem',
    padding: '10px 5px 5px',
  },
  card_title: {
    textAlign: 'center',
    color: 'white',
    fontSize: '1.25rem',
    padding: theme.spacing(0.6),
    wordBreak: 'break-word',
  },
  card_text: {
    color: 'white',
    margin: theme.spacing(1.25),
    marginBottom: theme.spacing(0),
    fontSize: '1.25rem',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },
  fbandigicon_item: {
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    display: 'flex',
  },
  fbandigicon_text: {
    padding: theme.spacing(0.75),
    color: 'white',
    fontSize: '1.25rem',
  },
  avatar_picture: {
    height: '100px',
    width: '100px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(3),
  },
  avatar_picture_card: {
    height: '100px',
    width: '100px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('xs')]: {
      height: '75px',
      width: '75px',
    },
  },
}))

export default useStyles
