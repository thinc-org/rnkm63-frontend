import { Theme } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/styles'

export const indexStyle = makeStyles((theme: Theme) => ({
  title: {
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  paperSearch: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
    padding: theme.spacing(0.75),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  searchContainer: {
    paddingBottom: theme.spacing(3.5),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(5),
    },
  },
  searchIcon: {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1),
    color: 'white',
  },
  searchButton: {
    padding: theme.spacing(1),
    backgroundColor: '#999999',
    marginLeft: theme.spacing(2),
    width: '20%',
    borderRadius: '50px',
    '&:hover': {
      backgroundColor: '#999999',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
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
  },
  formHelperText: {
    color: '#F2C94C',
    fontSize: '0.9rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
    },
  },
  formControl: {
    fontSize: '1.125rem',
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
    fontSize: '1.125rem',
    color: '#44AD53',
  },
  maxValue: {
    fontSize: '1.125rem',
  },
  valueContainer: {
    paddingTop: theme.spacing(0.75),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}))
