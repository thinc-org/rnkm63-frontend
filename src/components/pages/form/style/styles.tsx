import { createStyles, makeStyles, Theme } from '@material-ui/core'

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

const imageStyle = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      display: 'none',
    },
    button: {
      backgroundColor: '#1D324D',
      border: '1px solid white',
      color: 'white',
      margin: 'auto',
      fontFamily: font,
      textTransform: 'none',
      width: '150px',
      height: '42px',
      fontWeight: 400,
      fontSize: '18px',
      borderRadius: '40px',

      [theme.breakpoints.up('sm')]: {
        width: '207px',
        height: '45px',
        fontWeight: 700,
        fontSize: '14px',
        borderRadius: '20px',
      },
      '&:hover': {
        backgroundColor: '#1D324D',
      },
    },
    submitButton: {
      margin: theme.spacing(2),
      alignSelf: 'center',
      width: '70%',
      backgroundColor: '#44AD53',
      '&:hover': {
        background: '#44AD53',
      },
    },
    image: {
      borderRadius: '30px',
      borderColor: 'red',
      borderWidth: '5px',
      background: '#C4C4C4',
      marginBottom: theme.spacing(1),
      width: '150px',
      height: '200px',
      [theme.breakpoints.up('sm')]: {
        width: '207px',
        height: '276px',
        marginBottom: theme.spacing(2.5),
      },
    },
    reasonText: {
      color: '#EB5757',
      fontWeight: 400,
      fontSize: '14px',
      marginTop: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        fontSize: '12px',
        marginTop: theme.spacing(2),
      },
    },
    closeButton: {
      margin: 0,
      padding: theme.spacing(2),
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    cropContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
      width: '70%',
      height: '300px',
      background: '#333',
      [theme.breakpoints.down('xs')]: {
        height: '200px',
      },
    },
    dialogText: {
      color: 'black',
      width: '75%',
      alignSelf: 'center',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '32px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '13px',
        lineHeight: '24px',
      },
    },
    dialog: {},
    dialogTitle: {
      display: 'flex',
      alignSelf: 'center',
    },
    zoomSlider: {
      display: 'flex',
      alignSelf: 'center',
      alignItems: 'center',
      width: '75%',
      paddingTop: '18px',
    },
  })
)

export { imageStyle, indexStyle }
