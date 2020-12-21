import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputBase,
  Paper,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import { Loading } from '../../common'
import SearchIcon from '@material-ui/icons/Search'
import { HandleRequestError, RequestError } from '../../common/Error'
import StatusColor from './StatusColor'
import { indexStyle } from './style/indexStyle'

type IFilterSize = {
  [key: string]: boolean
}

function SelectBaan() {
  const {
    user: userInfo,
    isLoaded: isUserLoaded,
    error: userLoadError,
  } = React.useContext(UserContext)

  const [searchValue, setSearchValue] = useState('')
  const [filterSize, setFilterSize] = useState<IFilterSize>({
    S: true,
    M: true,
    L: true,
    XL: true,
  })

  const { t } = useTranslation('selectbaan')
  const style = indexStyle()

  if (!isUserLoaded) return <Loading />
  else if (userLoadError) return <HandleRequestError {...userLoadError} />
  else if (!userInfo) return <HandleRequestError {...RequestError(500, null)} />
  else if (!userInfo.data || !userInfo.isConfirm) return <Redirect to="/form" />
  else {
    return (
      <Box>
        <Box className={style.title} textAlign="center">
          <Typography variant="h2">{t('title')}</Typography>
        </Box>
        <Box display="flex" width="100%" className={style.searchContainer}>
          <Paper className={style.paperSearch}>
            <SearchIcon className={style.searchIcon} />
            <InputBase
              placeholder={t('searchPlaceholder')}
              fullWidth
              className={style.inputBase}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Paper>
          <Button className={style.searchButton}>
            <Typography>{t('searchButton')}</Typography>
          </Button>
        </Box>
        <FormGroup>
          <Box
            display="flex"
            justifyContent="space-between"
            className={style.filterContainer}
          >
            {Object.keys(filterSize).map((val: string) => (
              <Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filterSize[val]}
                      onChange={(e) =>
                        setFilterSize({
                          ...filterSize,
                          [e.target.name]: e.target.checked,
                        })
                      }
                      color="default"
                      className={style.checkBox}
                      name={val}
                    />
                  }
                  label={
                    <React.Fragment>
                      <Typography className={style.formControl}>
                        {t(`size${val}.text`)}
                      </Typography>
                      <Typography className={style.formControlMobile}>
                        {t(`size${val}.mobile`)}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <FormHelperText className={style.formHelperText}>
                  {t(`size${val}.size`)}
                </FormHelperText>
              </Box>
            ))}
            <Box className={style.valueContainer}>
              <Typography display="inline" className={style.filterValue}>
                35
              </Typography>{' '}
              <Typography display="inline" className={style.maxValue}>
                / 35
              </Typography>
            </Box>
          </Box>
        </FormGroup>
        <StatusColor />
        {/* Card */}
        <Box></Box>
      </Box>
    )
  }
}

export default SelectBaan
