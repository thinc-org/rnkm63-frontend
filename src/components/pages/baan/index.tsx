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

import { getCapacityData } from './apiService'
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
  color: string
}

interface ICapacityData {
  id: number
  capacity: number
  memberCount: number
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

  const [capacityData, setCapacityData] = useState<ICapacityData[]>([])
  const [currentFilterData, setCurrentFilterData] = useState<IFilterData[]>([])
  const { t } = useTranslation('selectbaan')
  const style = indexStyle()

  // Fetch Current Baan Information
  useEffect(() => {
    async function getData() {
      const res = await getCapacityData()
      setCapacityData(res.data)
    }
    getData()
  }, [])

  // Filter Data
  useEffect(() => {
    if (capacityData.length === 0) return
    const filterData: IFilterData[] = []
    for (const val of baanInfo) {
      const cmpTextEn = val['name-en']
        .toUpperCase()
        .indexOf(searchValue.toUpperCase())
      const cmpTextTh = val['name-th'].indexOf(searchValue)
      if (filterSize[val.size] && (cmpTextEn > -1 || cmpTextTh > -1)) {
        const findCapacity = capacityData.find((p) => {
          return val.ID === p.id
        })
        if (val.facebook === '') {
          val.facebook = '-'
        }
        if (val.instagram === '') {
          val.instagram = '-'
        }
        // const bpOne = 0.8*findCapacity.capacity
        let color = ''
        let cap =
          findCapacity?.capacity !== undefined ? findCapacity?.capacity : 0
        let mem =
          findCapacity?.memberCount !== undefined
            ? findCapacity?.memberCount
            : 0
        console.log(cap, mem)
        const bpOne = 0.8 * cap
        if (mem <= bpOne) color = 'red'
        else if (bpOne < mem && mem < cap) color = 'yellow'
        else color = 'red'

        filterData.push({
          ...val,
          capacity: findCapacity?.capacity as number,
          request: findCapacity?.memberCount as number,
          color: color,
        })
      }
    }

    setCurrentFilterData(filterData)
  }, [searchValue, filterSize, capacityData])

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
              onChange={(e) => setSearchValue(e.target.value)}
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
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {currentFilterData.map((val) => {
            return <MediaCard key={val.ID} value={val} />
          })}
        </Box>
      </Box>
    )
  }
}

export default Baan
