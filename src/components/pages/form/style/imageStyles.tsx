import { Theme, makeStyles, createStyles } from '@material-ui/core'
import red from '@material-ui/core/colors/red'

interface propsStyle {
  editStatus: Boolean
}

const imageStyle = makeStyles(
  (theme: Theme) =>
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
        minHeight: '30px',
        backgroundColor: theme.palette.success.main,
        '&:hover': {
          background: theme.palette.success.main,
        },
        [theme.breakpoints.up('sm')]: {
          minHeight: '40px',
          width: '30%',
        },
      },
      image: {
        borderRadius: '30px',
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: (props: propsStyle) => {
          return !props.editStatus ? 0 : 5
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
        fontSize: '0.75rem',
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
        minHeight: '200px',
        background: '#333',
        [theme.breakpoints.up('sm')]: {
          height: '300px',
        },
      },
      dialogText: {
        width: '70%',
        alignSelf: 'center',
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(1),
      },
      dialog: {
        overflowY: 'scroll',
        background: '#383838',
        borderRadius: '0px',
      },
      dialogTitle: {
        display: 'flex',
        alignSelf: 'center',
      },
      zoomSlider: {
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: '70%',
        paddingTop: theme.spacing(2.5),
      },
      errorText: {
        paddingTop: theme.spacing(2),
        alignSelf: 'center',
        color: red[500],
      },
      cropDescription: {
        fontSize: '1.125rem',
        color: theme.palette.text.primary,
        paddingBottom: theme.spacing(0.5),
        [theme.breakpoints.down('xs')]: {
          fontSize: '0.875rem',
          lineHeight: '24px',
        },
      },
    }),
  { index: 1 }
)

export default imageStyle
