import React from 'react'
import { useState } from 'react'
import { Button, Container } from '@material-ui/core'
import Image from './Image'
import FormInput from './FormInput'
import { indexStyle } from './style/styles'
import { useTranslation } from 'react-i18next'

function Form() {
  const [imageUrl, setImageUrl] = useState('')
  const [userData, setUserData] = useState({
    name: 'Genshin',
    surname: 'Impact',
  })
  const style = indexStyle()
  const { t, i18n } = useTranslation('form')

  return (
    <Container maxWidth="lg" classes={{ root: style.container }}>
      <p>{t('title')}</p>
      <div className={style.content}>
        <div>
          <Image imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </div>
        <div className={style.formInput}>
          <FormInput userData={userData} setUserData={setUserData} />
        </div>
      </div>
      <div>
        <Button
          classes={{ root: style.submitButton }}
          onClick={() => submit(imageUrl, userData)}
        >
          {t('submit')}
        </Button>
        <p className={style.submitNote}>{t('submitNote')}</p>
      </div>
    </Container>
  )
}

const submit = (imageUrl: any, userData: any) => {
  alert(imageUrl + '\n' + JSON.stringify(userData))
}
export default Form
