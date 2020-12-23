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
import LinkPage from './misc/LinkPage'
const useStyles = makeStyles({
  header: {
    height: '6rem',
  },
  headerPart: {
    padding: '0 1rem',
  },
  rnkmLogo: {
    width: '7.4rem',
    height: '3.7rem',
  },
  rnkmLogoLink: {
    margin: '0.25rem',
  },
  logOutButton: {
    border: 0,
    borderRadius: '1.25rem',
    width: '7rem',
    height: '2.5rem',
    marginRight: '0.8rem',
    textAlign: 'center',
    fontWeight: 500,
  },
  [theme.breakpoints.down('sm')]: {
    header: {
      height: '5rem',
    },
    headerPart: {
      padding: '0 0.25rem',
    },
    rnkmLogo: {
      width: '80px',
      objectFit: 'contain',
    },
  },
})

function Header() {
  const classes = useStyles()
  const { t } = useTranslation('shell')
  const { error: userError, user: userInfo } = React.useContext(UserContext)
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
        flex="6"
        justifyContent="center"
        className={classes.headerPart}
      >
        <Hidden xsDown>
          <LinkPage name={t('home')} link={'/'} />
          {userInfo?.currentBaan !== 0 ? (
            <LinkPage name={t('changeBaan')} link={'/baan'} /> //I don't know this path.
          ) : (
            <LinkPage name={t('่joinBaan')} link={'/select'} />
          )}
          <LinkPage name={t('schedule')} link={'/schedule'} />
          <ReportIssue />
        </Hidden>
      </Box>

      <Box>
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
