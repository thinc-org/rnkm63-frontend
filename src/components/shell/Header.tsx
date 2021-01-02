import { Box, Hidden, makeStyles } from '@material-ui/core'
import { withSuspense } from 'components/hoc'
import theme from 'config/theme'
import { UserContext } from 'contexts/UserContext'
import RnkmLogo from 'local/rnkm_logo.png'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Drawer from './misc/Drawer'
import LanguageSwitcher from './misc/LanguageSwitcher'
import LinkPage from './misc/LinkPage'
import LogOutButton from './misc/LogOutButton'
import ReportIssue from './misc/ReportIssue'
const useStyles = makeStyles({
  header: {
    height: '6rem',
  },
  headerPart: {
    padding: '0 1rem',
  },
  rnkmLogo: {
    width: '6rem',
    height: '3rem',
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
  },
})

interface IHeader {
  allowedRoutes: string[]
  isLoggedOut: boolean
}

function Header(props: IHeader) {
  const classes = useStyles()
  const { t } = useTranslation('shell')
  const { error: userError, user: userInfo } = React.useContext(UserContext)

  //logic for style for navbar in desktop size.
  let menuStyle: string
  if (userInfo?.isConfirm) {
    if (userInfo?.phaseCount === 2) {
      menuStyle = 'center'
    } else {
      menuStyle = 'space-between'
    }
  } else {
    menuStyle = 'flex-end'
  }
  const { allowedRoutes, isLoggedOut } = props

  console.log('allow', allowedRoutes)
  console.log('logout!', isLoggedOut)

  return (
    <Box
      className={classes.header}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box flex="1" className={classes.headerPart}>
        <Link to={allowedRoutes[0]} className={classes.rnkmLogoLink}>
          <img src={RnkmLogo} alt="" className={classes.rnkmLogo} />
        </Link>
      </Box>

      <Box
        display="flex"
        flex="6"
        justifyContent={menuStyle}
        className={classes.headerPart}
      >
        <Hidden xsDown>
          {!userError && userInfo?.isConfirm && (
            <>
              <LinkPage name={t('home')} link={allowedRoutes[0]} />
              {userInfo.phaseCount === 2 && (
                <>
                  <LinkPage
                    name={
                      userInfo?.currentBaan !== 0
                        ? t('changeBaan')
                        : t('joinBaan')
                    }
                    link={allowedRoutes[1]}
                  />
                  <LinkPage name={t('schedule')} link={allowedRoutes[2]} />
                </>
              )}
            </>
          )}
          <ReportIssue />
        </Hidden>
      </Box>

      <Box>
        <LanguageSwitcher />
        {!isLoggedOut && (
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
          <Drawer allowedRoutes={allowedRoutes} isLoggedOut={isLoggedOut} />
        </Hidden>
      </Box>
    </Box>
  )
}

export default withSuspense(Header)
