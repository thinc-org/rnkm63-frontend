import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'
import { IRequestError } from 'components/common/Error'
import { getLogo } from 'local/BaanInfo'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { IFilterData } from '../@types/data'
import { useStyles } from '../style/cardDialogStyle'
import SubmitButton from './SubmitButton'

interface IComponentData {
  value: IFilterData
  setError: React.Dispatch<React.SetStateAction<IRequestError | null>>
  disabled: boolean
  handleClickOpen: () => void
  setDialogData: (props: IFilterData) => void
}

const CardBaan = React.memo(function CardBaan(props: IComponentData) {
  const { value, disabled, setError, handleClickOpen, setDialogData } = props
  const classes = useStyles()
  const { t, i18n } = useTranslation('selectbaan')
  const lang = i18n.language.startsWith('en') ? 'en' : 'th'
  const color = disabled ? '#A9A9A9' : 'white'

  const urlLogo = getLogo(value.ID)

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() => {
            handleClickOpen()
            setDialogData(value)
          }}
          classes={{
            root: classes.actionArea,
            focusHighlight: classes.focusHighlight,
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
              <br></br>
              {t('seat')}:{' '}
              <span style={{ color: value.color }}>{value.capacity}</span>
              <br></br>
              {t('request')}:{' '}
              <span style={{ color: value.color }}>{value.request}</span>
              <br></br>
            </Typography>
          </CardContent>
        </CardActionArea>
        <SubmitButton
          color={color}
          disabled={disabled}
          ID={value.ID}
          setError={setError}
        />
      </Card>
    </React.Fragment>
  )
})

export default CardBaan
