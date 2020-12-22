import { Box, makeStyles, Typography } from '@material-ui/core'
import EISA from 'local/EISA.svg'
import kohkae from 'local/kohkae.svg' //Left
import Major from 'local/Major.svg' //Right
import SGCUIcon from 'local/SGCU.svg'
import SPT from 'local/SPT.svg'
import THINCIcon from 'local/thinc_logo.svg'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { withSuspense } from '../hoc'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  footer: {
    backgroundColor: 'black',
  },
  sponsorIcon: {
    marginRight: '15px',
    marginBottom: '7px',
    height: '30px',
  },
  sgcuIcon: {
    height: '30px',
    marginBottom: '7px',
    marginRight: '15px',
  },
  thincIcon: {
    height: '30px',
    marginBottom: '7px',
    marginRight: '15px',
  },
  footerFont: {
    color: '#8D8D8D',
    textAlign: 'center',
    fontSize: '0.625em',
  },
  footerFont2: {
    color: '#8D8D8D',
    textAlign: 'center',
    fontSize: '0.625em',
    marginBottom: '12px',
  },
})
function Footer() {
  const classes = useStyles()
  const { t } = useTranslation('footer')
  return (
    <Box className={classes.footer}>
      <Box
        display="flex"
        flexDirection="column"
        marginTop="15px"
        paddingX="20px"
      >
        <Box
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="center"
          marginBottom="3px"
        >
          <img src={SGCUIcon} alt="" className={classes.sgcuIcon} />
          <img src={THINCIcon} alt="" className={classes.thincIcon} />
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="center"
          marginBottom="3px"
        >
          <img src={EISA} alt="" className={classes.sponsorIcon} />
          <img src={kohkae} alt="" className={classes.sponsorIcon} />
          <img src={Major} alt="" className={classes.sponsorIcon} />
          <img src={SPT} alt="" className={classes.sponsorIcon} />
        </Box>
        <Typography variant="body1" className={classes.footerFont}>
          {t('firstline')}
        </Typography>
        <Typography variant="body1" className={classes.footerFont2}>
          {t('secondline')}
        </Typography>
      </Box>
    </Box>
  )
}

export default withSuspense(Footer)
