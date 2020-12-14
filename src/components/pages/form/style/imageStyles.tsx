import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { createStyles } from '@material-ui/core'

const font = (props: { lang: String }) =>
  props.lang.startsWith('th') ? 'Kanit' : 'Rubik'

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
      color: 'white',
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
    dialog: {
      background: 'white',
    },
    dialogTitle: {
      display: 'flex',
      alignSelf: 'center',
      color: 'black',
    },
    zoomSlider: {
      display: 'flex',
      alignSelf: 'center',
      alignItems: 'center',
      width: '70%',
      paddingTop: '18px',
    },
  })
)

export { imageStyle }
