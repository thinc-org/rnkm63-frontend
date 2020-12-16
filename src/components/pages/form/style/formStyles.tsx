import { makeStyles } from '@material-ui/core'

const formStyle = makeStyles((theme) => ({
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
}))

export default formStyle
