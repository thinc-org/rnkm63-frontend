import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  InputBase,
  Paper,
  Typography,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { Loading } from 'components/common'
import LoadingOnPage from 'components/common/LoadingOnPage'
import { fail } from 'components/ErrorProvider'
import { SubmitContext } from 'contexts/SubmitContext'
import { UserContext } from 'contexts/UserContext'
import { baanInfo } from 'local/BaanInfo'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  BaanSize,
  ICapacityData,
  IFilterData,
  IFilterSize,
} from './@types/data'
import CardBaan from './component/CardBaan'
import CardDialog from './component/cardDialog'
import GridCard from './component/GridCard'
import StatusColor from './component/StatusColor'
import { indexStyle } from './style/indexStyle'
import { getCapacityData } from './utils/apiService'
import { searchBaan } from './utils/baanUtils'

function Baan() {
  const { user: userInfo } = React.useContext(UserContext)

  const [searchValue, setSearchValue] = useState('')
  const [filterSize, setFilterSize] = useState<IFilterSize>({
    S: true,
    M: true,
    L: true,
    XL: true,
  })

  const [open, setOpen] = React.useState(false)
  const [dialogDataID, setDialogData] = useState<number>(0)
  const [capacityData, setCapacityData] = useState<ICapacityData[]>([])
  const [currentFilterData, setCurrentFilterData] = useState<
    IFilterData[] | null
  >(null)

  const [isSubmit, setSubmit] = useState(false)

  const { t } = useTranslation('selectbaan')
  const style = indexStyle()

  const handleClickOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

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
    const filterData: IFilterData[] = searchBaan(
      filterSize,
      searchValue,
      capacityData
    )

    setCurrentFilterData(filterData)
  }, [searchValue, filterSize, capacityData])

  if (!userInfo) return null
  else if (!currentFilterData) return <Loading />
  else {
    return (
      <SubmitContext.Provider value={{ setSubmit }}>
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
              {['S', 'M', 'L', 'XL'].map((value, idx: number) => (
                <Box key={idx}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filterSize[value as BaanSize]}
                        onChange={(e) =>
                          setFilterSize({
                            ...filterSize,
                            [e.target.name]: e.target.checked,
                          })
                        }
                        color="default"
                        className={style.checkBox}
                        name={value}
                      />
                    }
                    label={
                      <React.Fragment>
                        <Typography className={style.formControl}>
                          {t(`size${value}.text`)}
                        </Typography>
                        <Typography className={style.formControlMobile}>
                          {t(`size${value}.mobile`)}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <FormHelperText className={style.formHelperText}>
                    {t(`size${value}.size`)}
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
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            className={style.cardContainer}
          >
            {currentFilterData.map((val) => (
              <React.Fragment key={val.ID}>
                <CardBaan
                  data={val}
                  handleClickOpen={handleClickOpen}
                  setDialogData={setDialogData}
                  disabled={
                    val.ID === userInfo.currentBaan ||
                    val.ID === userInfo.preferBaan
                  }
                />
              </React.Fragment>
            ))}
          </Box>
          <Grid container className={style.gridContainer}>
            {currentFilterData.map((val) => (
              <React.Fragment key={val.ID}>
                <GridCard
                  data={val}
                  handleClickOpen={handleClickOpen}
                  setDialogData={setDialogData}
                  disabled={
                    val.ID === userInfo.currentBaan ||
                    val.ID === userInfo.preferBaan
                  }
                />
              </React.Fragment>
            ))}
          </Grid>
          <CardDialog
            ID={dialogDataID}
            open={open}
            handleClose={handleClose}
            disabled={
              dialogDataID === userInfo.currentBaan ||
              dialogDataID === userInfo.preferBaan
            }
          />
        </Box>
        <LoadingOnPage onProcess={isSubmit} />
      </SubmitContext.Provider>
    )
  }
}

export default Baan
