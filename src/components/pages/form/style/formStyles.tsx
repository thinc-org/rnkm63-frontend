import { makeStyles, Theme } from '@material-ui/core'

const formStyle = makeStyles(
<<<<<<< refs/remotes/origin/dev
  (theme: Theme) => ({
=======
  (theme) => ({
>>>>>>> Fix css ordering issue when build project and remove horizontal scrollbar
    overrides: {
      MuiInput: {
        formControl: {
          'label + &': {
            marginTop: '0px',
          },
        },
      },
    },
    root: {
      padding: theme.spacing(1),
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      },
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    },
    inside: {
      marginBottom: theme.spacing(6),
    },
    particular: {
      margin: theme.spacing(0.5),
      borderRadius: '5px',
      background: theme.palette.primary.main,
      // border:"0.5px solid #C6C6C6"
    },
    particular_select: {
      margin: theme.spacing(0.5),
      background: theme.palette.primary.main,
      height: '2.58rem',
    },
    label: {
      margin: theme.spacing(0.5),
      color: theme.palette.text.primary,
<<<<<<< refs/remotes/origin/dev
<<<<<<< refs/remotes/origin/dev
      heigth: '100%',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.825rem',
      },
=======
>>>>>>> Fix css ordering issue when build project and remove horizontal scrollbar
=======
      heigth: '100%',
>>>>>>> Initial work on form page service
    },
    formControl: {
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
      width: '100%',
    },
    choice: {
      color: theme.palette.text.secondary,
    },
    error: {
      color: theme.palette.error.main,
      marginLeft: theme.spacing(0.5),
    },
<<<<<<< refs/remotes/origin/dev
    requireNote: {
      color: theme.palette.warning.main,
      margin: theme.spacing(0.5),
      fontSize: '1.25rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.825rem',
      },
    },
=======
>>>>>>> Fix css ordering issue when build project and remove horizontal scrollbar
  }),
  { index: 1 }
)

export default formStyle
