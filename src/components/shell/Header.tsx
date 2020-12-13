import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import { Loading } from '../common'
import LanguageSwitcher from './misc/LanguageSwitcher'
import LogOutButton from './misc/LogOutButton'
import { withSuspense } from '../hoc'

const THINCLogo = '/images/thinc_logo.png'

const useStyles = makeStyles({
  header: {
    marginTop: '20px',
  },
  thincLogo: {},
})
function Header() {
  const classes = useStyles()
  return (
    <Box className={classes.header}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <img src={THINCLogo} alt="" className={classes.thincLogo} />
        <Box flexDirection="row" justifyContent="flex-start">
          <LanguageSwitcher />
          <LogOutButton />
        </Box>
      </Box>
    </Box>
  )
}

export default withSuspense(Header)
