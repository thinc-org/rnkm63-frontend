import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core'
import { Button } from 'components/common'
import { BlurBehindDialog } from 'components/common/BlurBehindDialog'
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
    <BlurBehindDialog
      open={confirmOpen}
      onClose={closeDialog}
      PaperProps={{
        classes: { root: style.dialog },
      }}
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
          color="secondary"
          className={style.dialogButton}
        >
          {t('cancel')}
        </Button>
        <Button onClick={submit} color="primary" className={style.dialogButton}>
          {t('confirm')}
        </Button>
      </DialogActions>
    </BlurBehindDialog>
  )
})

export default FormDialog
