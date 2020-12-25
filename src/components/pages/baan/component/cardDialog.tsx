import { Box, Typography, withStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogActions from '@material-ui/core/DialogActions'
import MuiDialogContent from '@material-ui/core/DialogContent'
import { Theme } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import { IRequestError, RequestError } from 'components/common/Error'
import { createBrowserHistory } from 'history'
import { getLogo } from 'local/BaanInfo'
import PropTypes from 'prop-types'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { IFilterData } from '../@types/data'
import { postRequestBaan } from '../apiService'
import { useStyles } from '../style/cardDialogStyle'
import DialogTitle from './dialogComponent'
// import ConfirmSelect from './popupConfirm'

const DialogContent = withStyles((theme) => ({
  root: {
    padding: '0',
    margin: '0 89px',
    color: 'white',
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0px 45px',
      fontSize: '1.125rem',
    },
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

interface IComponentData {
  value: IFilterData
  setError: React.Dispatch<React.SetStateAction<IRequestError | null>>
  key: number
  disabled: boolean
}

const MediaCard = ({ value, disabled, setError }: IComponentData) => {
  const classes = useStyles()
  const { t } = useTranslation('selectbaan')
  const { i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'th'
  const history = createBrowserHistory({
    forceRefresh: true,
  })
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const sendToProfile = async (id: number) => {
    const res = await postRequestBaan(id)
    if (res.status < 200 || res.status >= 300) {
      setError(RequestError(res.status, res.headers['x-request-id']))
    } else {
      history.push('/')
    }
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClickOpen}>
        <CardContent>
          <Typography className={classes.card_title}>
            {value[`name-${lang}` as 'name-en' | 'name-th']}
          </Typography>
          <Avatar
            alt="Remy Sharp"
            className={classes.avatar_picture_card}
            src={getLogo(value.ID)}
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
      <Button
        className={classes.button_select_card}
        variant="contained"
        // onClick={handleClose}
        disabled={disabled}
        onClick={() => sendToProfile(value.ID)}
        color="primary"
      >
        {t('select')}
      </Button>

      <Dialog
        onClose={handleClose}
        open={open}
        // open={false}
        className={classes.dialog_popup}
        PaperProps={{
          style: {
            backgroundColor: '#383838',
          },
        }}
      >
        <Avatar className={classes.avatar_picture} src={getLogo(value.ID)} />
        <DialogTitle onClose={handleClose} classes={classes}>
          {value[`name-${lang}` as 'name-th' | 'name-en']}
        </DialogTitle>

        <DialogContent>
          <Box className={classes.fbandigicon_item}>
            <InstagramIcon style={{ color: 'white' }} />
            <Typography className={classes.fbandigicon_text}>
              {value.facebook}
            </Typography>
          </Box>
          <Box className={classes.fbandigicon_item}>
            <FacebookIcon style={{ color: 'white' }} />
            <Typography className={classes.fbandigicon_text}>
              {value.instagram}
            </Typography>
          </Box>
          <Typography style={{ marginTop: '10px' }}>
            {value[`caption-${lang}` as 'caption-en' | 'caption-th'].map(
              (val: string, idx: number) => {
                return (
                  <Typography key={idx} gutterBottom>
                    {val}
                  </Typography>
                )
              }
            )}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.button_select}
            variant="contained"
            onClick={() => sendToProfile(value.ID)}
            disabled={disabled}
          >
            {t('select')}
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

MediaCard.propTypes = {
  value: PropTypes.object,
}

export default MediaCard
