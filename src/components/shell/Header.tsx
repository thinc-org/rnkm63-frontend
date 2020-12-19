import { Box, Hidden, makeStyles } from '@material-ui/core'
import React from 'react'
import DrawerInside from './misc/DrawerInside'
import LanguageSwitcher from './misc/LanguageSwitcher'
import LogOutButton from './misc/LogOutButton'
import ReportIssue from './misc/ReportIssue'

import THINCLogo from '../../local/white_logo.png'
import { withSuspense } from '../hoc'
import theme from '../../config/theme'
const useStyles = makeStyles({
  header: {
    marginTop: theme.spacing(3.75),
  },
  thincLogo: {
    height: '7.2rem',
    margin: '-0.9rem 0 -3rem -1rem',
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
  [theme.breakpoints.up('md')]: {
    thincLogo: {
      position: 'relative',
      top: '-1.4rem',
    },
  },
})
function Header() {
  const classes = useStyles()
  return (
    <Box className={classes.header}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <img src={THINCLogo} alt="" className={classes.thincLogo} />
        <Box flexDirection="row" justifyContent="flex-start">
          <Hidden smDown>
            <ReportIssue />
          </Hidden>
          <LanguageSwitcher />
          <Hidden smDown>
            <LogOutButton />
          </Hidden>
          <Hidden mdUp>
            <DrawerInside />
          </Hidden>
        </Box>
      </Box>
    </Box>
  )
}

export default withSuspense(Header)
