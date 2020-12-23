import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputBase,
  Paper,
  Typography,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { Loading } from 'components/common'
import { HandleRequestError, RequestError } from 'components/common/Error'
import { UserContext } from 'contexts/UserContext'
import { baanInfo } from 'local/BaanInfo'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'

import MediaCard from './component/cardDialog'
import StatusColor from './StatusColor'
import { indexStyle } from './style/indexStyle'

type IFilterSize = {
  [key: string]: boolean
}

interface IFilterData {
  ID: number
  size: string
  'name-en': string
  'name-th': string
  'caption-th': string[]
  'caption-en': string[]
  facebook: string
  instagram: string
  capacity: number
  request: number
}

function Baan() {
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

  const [currentFilterData, setCurrentFilterData] = useState<IFilterData[]>([])
  const { t } = useTranslation('selectbaan')
  const style = indexStyle()

  // Fetch Current Baan Information
  // useEffect(() => {}, [])

  // Filter Data
  useEffect(() => {
    const filterData: IFilterData[] = []
    for (const val of baanInfo) {
      const cmpTextEn = val['name-en']
        .toUpperCase()
        .indexOf(searchValue.toUpperCase())
      const cmpTextTh = val['name-th'].indexOf(searchValue)
      if (filterSize[val.size] && (cmpTextEn > -1 || cmpTextTh > -1)) {
        filterData.push({
          ...val,
          capacity: 0,
          request: 0,
        })
      }
    }

    setCurrentFilterData(filterData)
  }, [searchValue, filterSize])

  if (!isUserLoaded) return <Loading />
  else if (userLoadError) return <HandleRequestError {...userLoadError} />
  else if (!userInfo) return <HandleRequestError {...RequestError(500, null)} />
  else if (!userInfo.data || !userInfo.isConfirm) return <Redirect to="/form" />
  else {
    return (
      <Box className={style.container}>
        <Box className={style.title} textAlign="center">
          <Typography variant="h2">
            {userInfo.currentBaan !== 0
              ? t('titleMoveBaan')
              : t('titleJoinBaan')}
          </Typography>
          <Typography variant="h5" className={style.titleDescription}>
            {t('titleDescription')}
          </Typography>
        </Box>
        <Box display="flex" width="100%" className={style.searchContainer}>
          <Paper className={style.paperSearch}>
            <SearchIcon className={style.searchIcon} />
            <InputBase
              placeholder={t('searchPlaceholder')}
              fullWidth
              className={style.inputBase}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchValue(e.target.value)
              }
            />
          </Paper>
        </Box>
        <FormGroup>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className={style.filterContainer}
          >
            {Object.keys(filterSize).map((val: string, idx: number) => (
              <Box key={idx}>
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
                {currentFilterData.length}
              </Typography>{' '}
              <Typography display="inline" className={style.maxValue}>
                / {baanInfo.length - 1}
              </Typography>
            </Box>
          </Box>
        </FormGroup>
        <StatusColor />
        {/* Card */}
        <MediaCard />
        <Box></Box>
      </Box>
    )
  }
}

export default Baan
