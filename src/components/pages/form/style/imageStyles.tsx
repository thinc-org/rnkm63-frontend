import { Theme, makeStyles, createStyles } from '@material-ui/core'
import red from '@material-ui/core/colors/red'

interface propsStyle {
  editStatus: Boolean
}

const imageStyle = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      display: 'none',
    },
    button: {
      backgroundColor: '#1D324D',
      border: '1px solid white',
      textTransform: 'none',
      width: '150px',
      height: '42px',
      fontWeight: 400,
      fontSize: '1.125rem',
      borderRadius: '40px',

      [theme.breakpoints.up('sm')]: {
        width: '207px',
        height: '45px',
        fontWeight: 700,
        fontSize: '0.875rem',
        borderRadius: '20px',
      },
      '&:hover': {
        backgroundColor: '#1D324D',
      },
    },
    submitButton: {
      margin: theme.spacing(2),
      borderRadius: '40px',
      alignSelf: 'center',
      width: '50%',
      backgroundColor: theme.palette.success.main,
      '&:hover': {
        background: theme.palette.success.main,
      },
      [theme.breakpoints.up('sm')]: {
        width: '30%',
      },
    },
    image: {
      borderRadius: '30px',
      borderStyle: 'solid',
      borderColor: 'red',
      borderWidth: (props: propsStyle) => {
        if (!props.editStatus) {
          return '0px'
        }
        return '2px'
      },
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
    imageUploadButton: {
      fontSize: '1rem',
      width: '100%',
      height: '100%',
      color: 'white',
      verticalAlign: 'center',
      paddingTop: theme.spacing(0),
      [theme.breakpoints.up('sm')]: {
        fontSize: '2rem',
      },
    },
    reasonText: {
      fontWeight: 400,
      fontSize: '0.875rem',
      color: theme.palette.error.main,
      marginTop: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        fontSize: '0.75rem',
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
      height: '200px',
      background: '#333',
      [theme.breakpoints.up('sm')]: {
        height: '300px',
      },
    },
    dialogText: {
      color: 'black',
      width: '70%',
      alignSelf: 'center',
      fontWeight: 500,
      fontSize: '1.125rem',
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      lineHeight: '32px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.875rem',
        lineHeight: '24px',
      },
    },
    dialog: {
      background: 'white',
      borderRadius: '0px',
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
      paddingTop: theme.spacing(2.5),
    },
    errorText: {
      paddingTop: theme.spacing(2),
      alignSelf: 'center',
      color: red[500],
    },
  })
)

export default imageStyle
