import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import SGCUIcon from '../../local/sgcuIcon.png'
import THINCIcon from '../../local/thincIcon.png'
import { Loading } from '../common'
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
  sgcuIcon: {
    width: '25.63px',
    height: '45px',
  },
  thincIcon: {
    marginLeft: '12.37px',
    width: '99.09px',
    height: '40px',
  },
  footerFont: {
    color: '#8D8D8D',
    textAlign: 'center',
    fontSize: '10px',
  },
  footerFont2: {
    color: '#8D8D8D',
    textAlign: 'center',
    fontSize: '10px',
    marginBottom: '12px',
  },
})
function Footer() {
  const classes = useStyles()
  const { t } = useTranslation('footer')
  return (
    <Box className={classes.footer}>
      <Box display="flex" flexDirection="column" marginTop="15px">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          marginBottom="6px"
        >
          <img src={SGCUIcon} alt="" className={classes.sgcuIcon} />
          <img src={THINCIcon} alt="" className={classes.thincIcon} />
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
