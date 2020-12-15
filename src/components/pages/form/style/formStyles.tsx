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
    margin: theme.spacing(1),
    // marginRight:"20px"
  },
  particular: {
    margin: theme.spacing(0.5),
    background: theme.palette.primary.main,
    //borderColor:"#D3D3D3"
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
    margin: theme.spacing(0.5),
    minWidth: 120,
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
