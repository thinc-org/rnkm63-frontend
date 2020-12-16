import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import theme from '../../../config/theme'
import SadThincIcon from '../../shell/misc/SadThincIcon'
import ToHomeButton from '../../shell/misc/ToHomeButton'
const useStyles = makeStyles({
  textHeader: {
    color: 'white',
    fontSize: '3.75em',
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75em',
    },
  },
  text: {
    color: 'white',
    fontSize: '2.125em',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      color: 'white',
      fontSize: '1em',
    },
  },
})
function NotFound() {
  const { t } = useTranslation(['notfound'])
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
      <Typography className={classes.textHeader}>Error 404</Typography>
      <Typography className={classes.text}>{t('title')}</Typography>
      <ToHomeButton />
    </Box>
  )
}

export default NotFound
