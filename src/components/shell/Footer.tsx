import { Box, makeStyles, Theme, Typography } from '@material-ui/core'
import SkeletonImage from 'components/common/SkeletonImage'
import { withSuspense } from 'components/hoc'
import EISA from 'local/EISA.svg'
import kohkae from 'local/kohkae.svg'
import Major from 'local/Major.svg'
import SGCUIcon from 'local/SGCU.svg'
import SPT from 'local/SPT.svg'
import ThaiBev from 'local/ThaiBev_BW.svg'
import THINCIcon from 'local/thinc_logo.svg'
import React from 'react'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    margin: '0 8px 12px 8px',
    height: '32px',
    [theme.breakpoints.up('sm')]: {
      height: '36px',
    },
  },
  footerFont: {
    color: '#8D8D8D',
    textAlign: 'center',
    fontSize: '0.625em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.875em',
    },
  },
}))
function Footer() {
  const classes = useStyles()
  const { t } = useTranslation('footer')
  return (
    <Box bgcolor="black" color="white" padding="8px">
      <Box display="flex" flexDirection="column" paddingX="20px">
        <Box
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="center"
        >
          <SkeletonImage src={SGCUIcon} alt="" className={classes.icon} />
          <SkeletonImage src={THINCIcon} alt="" className={classes.icon} />
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <SkeletonImage
            src={ThaiBev}
            alt=""
            className={classes.icon}
            style={{ height: '27px', marginTop: '3px' }}
          />
          <SkeletonImage src={EISA} alt="" className={classes.icon} />
          <SkeletonImage src={kohkae} alt="" className={classes.icon} />
          <SkeletonImage src={Major} alt="" className={classes.icon} />
          <SkeletonImage src={SPT} alt="" className={classes.icon} />
        </Box>
        <Typography variant="body1" className={classes.footerFont}>
          {t('firstline')}
        </Typography>
        <Typography variant="body1" className={classes.footerFont}>
          {t('secondline')}
        </Typography>
      </Box>
    </Box>
  )
}

export default withSuspense(Footer)
