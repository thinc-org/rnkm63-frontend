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
import { fail } from 'components/ErrorProvider'
import { UserContext } from 'contexts/UserContext'
import { baanInfo } from 'local/BaanInfo'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ICapacityData, IFilterData } from './@types/data'
import { getCapacityData } from './apiService'
import MediaCard from './component/cardDialog'
import StatusColor from './StatusColor'
import { indexStyle } from './style/indexStyle'

type IFilterSize = {
  [key: string]: boolean
}

function Baan() {
  const { user: userInfo } = React.useContext(UserContext)

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
      try {
        const res = await getCapacityData()
        setCapacityData(res.data)
      } catch (e) {
        fail(e)
      }
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
          return val.ID === p.baanID
        })
        if (typeof findCapacity === 'undefined') return
        const capacity = findCapacity.capacity - findCapacity.memberCount
        const request = findCapacity.requestCount
        if (val.facebook === '') {
          val.facebook = '-'
        }
        if (val.instagram === '') {
          val.instagram = '-'
        }
        let color = ''
        const mem = request
        const bpOne = 0.8 * capacity
        if (mem >= capacity) color = 'red'
        else if (mem < capacity && bpOne <= mem) color = 'yellow'
        else color = '#44AD53'

        filterData.push({
          ...val,
          capacity,
          request,
          color,
        })
      }
    }

    setCurrentFilterData(filterData)
  }, [searchValue, filterSize, capacityData])

  if (!userInfo) return null
  return (
    <Box className={style.container}>
      <Box className={style.title} textAlign="center">
        <Typography variant="h2">
          {userInfo.currentBaan !== 0 ? t('titleMoveBaan') : t('titleJoinBaan')}
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
          return (
            <MediaCard
              key={val.ID}
              value={val}
              disabled={
                val.ID === userInfo.currentBaan ||
                val.ID === userInfo.preferBaan
              }
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default Baan
