import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export const indexStyle = makeStyles((theme: Theme) => ({
  title: {
    paddingBottom: theme.spacing(3),
  },
  paperSearch: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0.75),
    },
  },
  searchContainer: {
    paddingBottom: theme.spacing(3.5),
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
  },
  inputBase: {
    paddingRight: theme.spacing(1),
    color: 'white',
    fontSize: '1.25rem',
  },
}))
