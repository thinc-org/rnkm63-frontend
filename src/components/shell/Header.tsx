import {
  Box,
  ListItem,
  ListItemProps,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core'
import React from 'react'
import LanguageSwitcher from './misc/LanguageSwitcher'
import LogOutButton from './misc/LogOutButton'
import THINCLogo from '../../local/thincLogo.png'
import { withSuspense } from '../hoc'
import theme from '../../config/theme'
const useStyles = makeStyles({
  header: {
    marginTop: theme.spacing(3.75),
  },
  [theme.breakpoints.down('sm')]: {
    header: {
      marginTop: theme.spacing(1.875),
    },
    thincLogo: {
      maxWidth: '50%',
      maxHeight: '50%',
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  },
})
function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />
}
function Header() {
  const classes = useStyles()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <Box className={classes.header}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <img src={THINCLogo} alt="" className={classes.thincLogo} />
        <Box flexDirection="row" justifyContent="flex-start">
          <LanguageSwitcher />
          {matches && <LogOutButton />}
        </Box>
      </Box>
    </Box>
  )
}

export default withSuspense(Header)
