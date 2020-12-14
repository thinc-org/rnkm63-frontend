import React from 'react'
import { useState } from 'react'
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
import Image from './Image'
import FormInput from './FormInput'
import { indexStyle } from './style'
import { useTranslation } from 'react-i18next'

function Form() {
  const [imageUrl, setImageUrl] = useState('')
  const [userData, setUserData] = useState({
    name: 'Genshin',
    surname: 'Impact',
  })
  const [confirmOpen, setConfirmOpen] = useState(false)

  const { t, i18n } = useTranslation('form')
  const style = indexStyle({ lang: i18n.language })
  const validate = () => {
    //validate here
    return true
  }
  const confirm = () => {
    if (validate()) setConfirmOpen(true)
  }
  const submit = () => {
    alert('Submitted!')
  }

  return (
    <Container maxWidth="lg" classes={{ root: style.container }}>
      <p className={style.title}>{t('title')}</p>
      <div className={style.content}>
        <div className={style.image}>
          <Image imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </div>
        <div className={style.formInput}>
          <FormInput userData={userData} setUserData={setUserData} />
        </div>
      </div>
      <div>
        <Button
          classes={{ root: style.submitButton }}
          onClick={() => confirm()}
        >
          {t('submit')}
        </Button>
        <p className={style.submitNote}>{t('submitNote')}</p>
      </div>
      <Dialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        PaperProps={{
          classes: { root: style.dialog },
        }}
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <DialogTitle classes={{ root: style.dialogTitle }}>
          <p className={style.dialogTitle}>{t('confirmDialogTitle')}</p>
        </DialogTitle>
        <DialogContent>
          <p className={style.dialogContent}>{t('confirmDescription')}</p>
        </DialogContent>
        <DialogActions classes={{ root: style.dialogAction }}>
          <Button
            onClick={() => setConfirmOpen(false)}
            classes={{ root: style.cancelButton }}
          >
            {t('cancel')}
          </Button>
          <Button
            onClick={() => submit()}
            classes={{ root: style.confirmButton }}
          >
            {t('confirm')}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
export default Form
