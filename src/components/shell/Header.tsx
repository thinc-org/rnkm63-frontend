import { Box, Hidden, makeStyles } from '@material-ui/core'
import React from 'react'
import Drawer from './misc/Drawer'
import LanguageSwitcher from './misc/LanguageSwitcher'
import LogOutButton from './misc/LogOutButton'
import ReportIssue from './misc/ReportIssue'
import { useTranslation } from 'react-i18next'
import RnkmLogo from '../../local/rnkm_logo.png'
import { withSuspense } from '../hoc'
import { Link } from 'react-router-dom'
import theme from '../../config/theme'
import { UserContext } from '../../contexts/UserContext'
const useStyles = makeStyles({
  header: {
    height: '6rem',
  },
  headerPart: {
    padding: '0 1rem',
  },
  rnkmLogo: {
    width: '10rem',
    height: '5rem',
  },
  rnkmLogoLink: {
    margin: '0.25rem',
  },
  logOutButton: {
    border: 0,
    borderRadius: '1.25rem',
    width: '8rem',
    height: '2.5rem',
    margin: '0 1rem',
    fontSize: '0.85rem',
    textAlign: 'center',
    fontWeight: 500,
  },
  [theme.breakpoints.down('xs')]: {
    header: {
      height: '5rem',
    },
    headerPart: {
      padding: '0 0.25rem',
    },
    rnkmLogo: {
      width: '10rem',
      maxWidth: '100%',
      objectFit: 'contain',
    },
  },
})

function Header() {
  const classes = useStyles()
  const { t } = useTranslation('shell')
  const { error: userError } = React.useContext(UserContext)
  return (
    <Box
      className={classes.header}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box flex="1" className={classes.headerPart}>
        <Link to="/" className={classes.rnkmLogoLink}>
          <img src={RnkmLogo} alt="" className={classes.rnkmLogo} />
        </Link>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.headerPart}
      >
        <Hidden xsDown>
          <ReportIssue />
        </Hidden>
        <LanguageSwitcher />
        {(!userError || userError.status >= 500) && (
          <Hidden xsDown>
            <LogOutButton
              className={classes.logOutButton}
              variant="contained"
              color="secondary"
            >
              {t('logout')}
            </LogOutButton>
          </Hidden>
        )}
        <Hidden smUp>
          <Drawer />
        </Hidden>
      </Box>
    </Box>
  )
}

export default withSuspense(Header)
