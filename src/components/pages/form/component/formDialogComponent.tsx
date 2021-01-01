import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { indexStyle } from '../style'

interface IFormDialog {
  confirmOpen: boolean
  text: string
  closeDialog: () => void
  submit: () => void
}

const FormDialog = React.memo(function FormDialog(props: IFormDialog) {
  const style = indexStyle()
  const { t } = useTranslation('form')
  const { confirmOpen, closeDialog, submit, text } = props
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
          {t(`${text}DialogDescription`)}
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
