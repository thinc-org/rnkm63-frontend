import { makeStyles } from '@material-ui/core'

const font = (props: { lang: String }) =>
  props.lang.startsWith('th') ? 'Kanit' : 'Rubik'

const indexStyle = makeStyles((theme: any) => ({
  container: {
    fontFamily: font,
    padding: theme.spacing(1),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  title: {
    fontSize: '60px',
    fontWeight: 500,
    color: 'white',
    margin: 0,
    marginBottom: theme.spacing(4),
    height: '100px',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  image: {
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      width: '207px',
    },
  },
  formInput: {
    background: '#5c5c5c',
    [theme.breakpoints.up('sm')]: {
      display: 'inline',
      marginLeft: theme.spacing(2.5),
      flexGrow: 1,
    },
  },
  submitButton: {
    background: '#44AD53',
    borderRadius: '40px',
    width: '100%',
    display: 'block',
    margin: 'auto',
    marginTop: theme.spacing(6),
    fontFamily: font,
    color: 'white',
    fontSize: '18px',
    fontWeight: 700,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#44AD53',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
      width: '434px',
    },
  },
  submitNote: {
    display: 'block',
    textAlign: 'center',
    color: '#F2C94C',
    fontWeight: 400,
    fontSize: '10px',
    margin: '0px',
    marginTop: theme.spacing(1.5),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(2),
      fontSize: '12px',
    },
  },
  dialog: {
    background: 'white',
    color: 'black',
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
    fontSize: '20px',
    margin: 0,
  },
  dialogContent: {
    textAlign: 'center',
    fontWeight: 300,
    fontFamily: font,
    fontSize: '16px',
    margin: 0,
    marginBottom: theme.spacing(2),
  },
  cancelButton: {
    width: '129px',
    heigth: '27px',
    color: 'white',
    background: '#D34949',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: '#D34949',
    },
    [theme.breakpoints.up('sm')]: {
      width: '207px',
    },
  },
  confirmButton: {
    width: '129px',
    heigth: '27px',
    color: 'white',
    background: '#44AD53',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: '#44AD53',
    },
    [theme.breakpoints.up('sm')]: {
      width: '207px',
    },
  },
  dialogAction: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}))

export { indexStyle }
