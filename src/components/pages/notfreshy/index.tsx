import React from 'react'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'

import { useTranslation } from 'react-i18next'
import sadthincIcon from '../../../local/sadthinc.png'
import theme from '../../../config/theme'
function NotFreshy() {
  const { t } = useTranslation('not104')
  const useStyles = makeStyles({
    [theme.breakpoints.down('sm')]: {
      textHeader: {
        color: 'white',
        fontFamily: 'Rubik',
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
      },
      buttonText: { color: 'white', fontFamily: 'Rubik', fontSize: '18px' },
    },
    [theme.breakpoints.up('sm')]: {
      textHeader: {
        color: 'white',
        fontFamily: 'Rubik',
        fontSize: '60px',
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
      },
      buttonText: { color: 'white', fontFamily: 'Rubik', fontSize: '18px' },
    },
  })
  const classes = useStyles()
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginTop="70px"
      alignItems="center"
    >
      <img src={sadthincIcon} className={classes.image}></img>
      <Typography className={classes.textHeader}>{t('title')}</Typography>
      <Button variant="contained" className={classes.button}>
        <Typography className={classes.buttonText}>Back to Home</Typography>
      </Button>
    </Box>
  )
}

export default NotFreshy
