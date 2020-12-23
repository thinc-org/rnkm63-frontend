import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { indexStyle } from '../../form/style'

interface IFormDialog {
  confirmOpen: boolean
  closeDialog: () => void
  submit: () => void
}

//   const FormDialog = React.memo(function FormDialog(props: IFormDialog) {
const FormDialog = React.memo(function FormDialog(props: IFormDialog) {
  const style = indexStyle()
  const { t } = useTranslation('form')
  const { confirmOpen, closeDialog, submit } = props
  return (
    <Dialog
      open={confirmOpen}
      onClose={closeDialog}
      PaperProps={{
        classes: { root: style.dialog },
      }}
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <DialogTitle classes={{ root: style.dialogTitle }}>
        <Typography className={style.dialogTitle}>
          {t('confirmDialogTitle')}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography className={style.dialogContent}>
          {t('confirmDescription')}
        </Typography>
      </DialogContent>
      <DialogActions classes={{ root: style.dialogAction }}>
        <Button
          onClick={closeDialog}
          classes={{ root: `${style.button} ${style.cancel}` }}
        >
          {t('cancel')}
        </Button>
        <Button
          onClick={submit}
          classes={{ root: `${style.button} ${style.confirm}` }}
        >
          {t('confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  )
})

export default FormDialog
