import { Box, Button, InputBase, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import { Loading } from '../../common'
import SearchIcon from '@material-ui/icons/Search'
import { HandleRequestError, RequestError } from '../../common/Error'
import StatusColor from './StatusColor'
import { indexStyle } from './style/indexStyle'

function SelectBaan() {
  const {
    user: userInfo,
    isLoaded: isUserLoaded,
    error: userLoadError,
  } = React.useContext(UserContext)

  const { t } = useTranslation('selectbaan')
  const style = indexStyle()

  if (!isUserLoaded) return <Loading />
  else if (userLoadError) return <HandleRequestError {...userLoadError} />
  else if (!userInfo) return <HandleRequestError {...RequestError(500, null)} />
  else if (!userInfo.data || !userInfo.isConfirm) return <Redirect to="/form" />
  else {
    return (
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box className={style.title}>
          <Typography variant="h2">{t('title')}</Typography>
        </Box>
        <Box display="flex" width="100%" className={style.searchContainer}>
          <Paper className={style.paperSearch}>
            <SearchIcon className={style.searchIcon} />
            <InputBase
              placeholder={t('searchPlaceholder')}
              fullWidth
              className={style.inputBase}
            />
          </Paper>
          <Button className={style.searchButton}>
            <Typography>{t('searchButton')}</Typography>
          </Button>
        </Box>
        <Box></Box>
        <StatusColor />
        {/* Card */}
        <Box></Box>
      </Box>
    )
  }
}

export default SelectBaan
