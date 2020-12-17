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
      fontSize: '1.375em',
    },
  },
})
function NotFreshy() {
  const { t } = useTranslation(['not104'])
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
      <ToHomeButton />
    </Box>
  )
}

export default NotFreshy
