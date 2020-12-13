import React from 'react'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'

import { useTranslation } from 'react-i18next'
import sadthincIcon from '../../../local/sadthinc.png'
function NotFound() {
  const { t } = useTranslation('notfound')
  const useStyles = makeStyles({
    text: {
      color: 'white',
      fontFamily: 'Rubik',
      fontSize: '60px',
    },
    button: {
      marginTop: '20px',
      width: '210px',
      height: '40px',
      backgroundColor: '#44AD53',
      borderRadius: '40px',
    },
    buttonText: { color: 'white', fontFamily: 'Rubik', fontSize: '18px' },
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
      <img src={sadthincIcon} width="206px" height="266px"></img>
      <Typography className={classes.text}>Error 404</Typography>
      <Typography className={classes.text}>{t('title')}</Typography>
      <Button variant="contained" className={classes.button}>
        <Typography className={classes.buttonText}>Back to Home</Typography>
      </Button>
    </Box>
  )
}

export default NotFound
