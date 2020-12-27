import { Box, makeStyles, Typography } from '@material-ui/core'
import { withSuspense } from 'components/hoc'
import EISA from 'local/EISA.svg'
import kohkae from 'local/kohkae.svg' //Left
import Major from 'local/Major.svg' //Right
import SGCUIcon from 'local/SGCU.svg'
import SPT from 'local/SPT.svg'
import THINCIcon from 'local/thinc_logo.svg'
import React from 'react'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
  icon: {
    margin: '0 8px 12px 8px',
    height: '32px',
  },
  footerFont: {
    color: '#8D8D8D',
    textAlign: 'center',
    fontSize: '0.625em',
  },
})
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
          <img src={SGCUIcon} alt="" className={classes.icon} />
          <img src={THINCIcon} alt="" className={classes.icon} />
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="center"
        >
          <img src={EISA} alt="" className={classes.icon} />
          <img src={kohkae} alt="" className={classes.icon} />
          <img src={Major} alt="" className={classes.icon} />
          <img src={SPT} alt="" className={classes.icon} />
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
