import {
  Avatar,
  Box,
  Dialog,
  Link,
  Theme,
  Typography,
  withStyles,
} from '@material-ui/core'
import MuiDialogActions from '@material-ui/core/DialogActions'
import MuiDialogContent from '@material-ui/core/DialogContent'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import i18n from 'i18next'
import { getBaan, getLogo } from 'local/BaanInfo'
import React from 'react'

import useStyles from '../style/cardDialogStyle'
import DialogTitle from './dialogComponent'
import SubmitButton from './SubmitButton'

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: '0',
    margin: '0 89px',
    color: 'white',
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0px 25px',
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

interface ICardDialog {
  ID: number
  open: boolean
  handleClose: () => void
  disabled: boolean
}

const CardDialog = function CardDialog(props: ICardDialog) {
  const { ID, open, handleClose, disabled } = props
  const classes = useStyles()
  const lang = i18n.language.startsWith('th') ? 'th' : 'en'
  const color = disabled ? '#A9A9A9' : 'white'
  const urlLogo = getLogo(ID)
  const value = getBaan(ID)

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className={classes.dialog_popup}
      PaperProps={{
        style: {
          backgroundColor: '#383838',
        },
      }}
    >
      <Avatar className={classes.avatar_picture} src={urlLogo} />
      <DialogTitle onClose={handleClose} classes={classes}>
        {value[`name-${lang}` as 'name-th' | 'name-en']}
      </DialogTitle>

      <DialogContent>
        <Box hidden={!value.instagram}>
          <Box className={classes.fbandigicon_item}>
            <InstagramIcon style={{ color: 'white' }} />
            <Typography className={classes.fbandigicon_text}>
              <Link
                href={value.iglink}
                color="inherit"
                style={{ pointerEvents: value?.iglink ? 'auto' : 'none' }}
                target="_blank"
                rel="noreferrer"
              >
                {value.instagram}
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box hidden={!value.facebook}>
          <Box className={classes.fbandigicon_item}>
            <FacebookIcon style={{ color: 'white' }} />
            <Typography className={classes.fbandigicon_text}>
              <Link
                href={value.fblink}
                color="inherit"
                style={{ pointerEvents: value?.fblink ? 'auto' : 'none' }}
                target="_blank"
                rel="noreferrer"
              >
                {value.facebook}
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box style={{ marginTop: '10px' }}>
          {value[`caption-${lang}` as 'caption-en' | 'caption-th'].map(
            (val: string, idx: number) => {
              return (
                <Typography key={idx} gutterBottom>
                  {val}
                </Typography>
              )
            }
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <SubmitButton color={color} disabled={disabled} ID={value.ID} />
      </DialogActions>
    </Dialog>
  )
}

export default CardDialog
