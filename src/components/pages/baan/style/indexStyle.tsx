import { Theme } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/styles'

export const indexStyle = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  title: {
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  titleDescription: {
    color: '#F2C94C',
    paddingTop: theme.spacing(1),
  },
  paperSearch: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minWidth: '238px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
    padding: theme.spacing(0.75),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '30px',
    },
  },
  searchContainer: {
    paddingBottom: theme.spacing(3.5),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(1),
    },
  },
  searchIcon: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    color: 'white',
  },
  inputBase: {
    paddingRight: theme.spacing(1),
    color: 'white',
    fontSize: '1.25rem',
  },
  checkBox: {
    color: green[400],
    fontSize: '1.25rem',
    '&$checked': {
      color: green[600],
    },
  },
  filterContainer: {
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(1),
    },
  },
  formHelperText: {
    color: '#F2C94C',
    fontSize: '1rem',
    paddingLeft: theme.spacing(3.5),
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
      paddingRight: theme.spacing(1),
      display: 'none',
    },
  },
  formControl: {
    fontSize: '1.25rem',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  formControlMobile: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      display: 'inline',
    },
  },
  filterValue: {
    fontSize: '1.25rem',
    color: '#44AD53',
  },
  maxValue: {
    fontSize: '1.25rem',
  },
  valueContainer: {
    paddingTop: theme.spacing(0.75),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}))
