import React from 'react'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import theme from '../../../config/theme'
import SadThincIcon from '../../shell/misc/SadThincIcon'
const useStyles = makeStyles({
  [theme.breakpoints.down('sm')]: {
    textHeader: {
      color: 'white',
      fontSize: '22px',
    },
    image: {
      width: '171px',
      height: '220px',
    },
    button: {
      marginTop: '20px',
      width: '283px',
      height: '45px',
      backgroundColor: '#44AD53',
      borderRadius: '40px',
      color: 'white',
      fontSize: '18px',
    },
  },
  [theme.breakpoints.up('sm')]: {
    textHeader: {
      color: 'white',
      fontSize: '60px',
      fontWeight: '700',
      fontFamily: 'Rubik',
    },
    image: {
      width: '206px',
      height: '266px',
    },
    button: {
      marginTop: '20px',
      width: '210px',
      height: '40px',
      backgroundColor: '#44AD53',
      borderRadius: '40px',
      color: 'white',
      fontSize: '18px',
    },
  },
})
function NotFreshy() {
  const { t } = useTranslation(['not104', 'tohomebutton'])
  const classes = useStyles()
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginTop="70px"
      alignItems="center"
    >
      <SadThincIcon />
      <Typography className={classes.textHeader}>{t('title')}</Typography>
      <Button variant="contained" className={classes.button} color="primary">
        {t('tohomebutton:title')}
      </Button>
    </Box>
  )
}

export default NotFreshy
