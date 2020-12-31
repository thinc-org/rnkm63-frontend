import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'
import { getBaan, getLogo } from 'local/BaanInfo'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { IFilterData } from '../@types/data'
import useStyles from '../style/cardDialogStyle'
import SubmitButton from './SubmitButton'

interface IComponentData {
  data: IFilterData
  disabled: boolean
  handleClickOpen: () => void
  setDialogData: (props: number) => void
}

const CardBaan = React.memo(function CardBaan(props: IComponentData) {
  const { data, disabled, handleClickOpen, setDialogData } = props
  const classes = useStyles()
  const { t, i18n } = useTranslation('selectbaan')
  const lang = i18n.language.startsWith('en') ? 'en' : 'th'
  const color = disabled ? '#A9A9A9' : 'white'

  const urlLogo = getLogo(data.ID)
  const value = getBaan(data.ID)

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() => {
            handleClickOpen()
            setDialogData(data.ID)
          }}
        >
          <CardContent>
            <Typography className={classes.card_title}>
              {value[`name-${lang}` as 'name-en' | 'name-th']}
            </Typography>
            <Avatar
              alt={value['name-en']}
              className={classes.avatar_picture_card}
              src={urlLogo}
            />
            <Typography className={classes.card_text}>
              {t('size')}: {value.size}
              <br />
              {t('seat')}:{' '}
              <span style={{ color: data.color }}>{data.capacity}</span>
              <br />
              {t('request')}:{' '}
              <span style={{ color: data.color }}>{data.request}</span>
              <br />
            </Typography>
          </CardContent>
        </CardActionArea>
        <SubmitButton color={color} disabled={disabled} ID={value.ID} />
      </Card>
    </React.Fragment>
  )
})

export default CardBaan
