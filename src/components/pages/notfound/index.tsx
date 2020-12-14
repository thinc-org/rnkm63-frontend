import React from 'react'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import sadthincIcon from '../../../local/sadthinc.png'
import theme from '../../../config/theme'
function NotFound() {
  const { t } = useTranslation(['notfound', 'tohomebutton'])
  const useStyles = makeStyles({
    [theme.breakpoints.down('sm')]: {
      textHeader: {
        color: 'white',
        fontSize: '28px',
      },
      text: {
        color: 'white',
        fontSize: '16px',
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
      buttonText: { color: 'white', fontSize: '18px' },
    },
    [theme.breakpoints.up('sm')]: {
      textHeader: {
        color: 'white',
        fontFamily: 'Rubik',
        fontSize: '60px',
        fontWeight: 700,
      },
      text: {
        color: 'white',
        fontFamily: 'Rubik',
        fontSize: '34px',
        fontWeight: 500,
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
      buttonText: {
        color: 'white',
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontWeight: 700,
      },
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
      <Typography className={classes.textHeader}>Error 404</Typography>
      <Typography className={classes.text}>{t('title')}</Typography>
      <Button variant="contained" className={classes.button} color="primary">
        <Typography className={classes.buttonText}>
          {t('tohomebutton:title')}
        </Typography>
      </Button>
    </Box>
  )
}

export default NotFound
