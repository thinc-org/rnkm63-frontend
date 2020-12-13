import React, { useCallback, useRef, useState } from 'react'
import {
  Button,
  Slide,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContentText,
  Typography,
  Container,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { TransitionProps } from '@material-ui/core/transitions/transition'
import CloseIcon from '@material-ui/icons/Close'
import { imageStyle } from './style/styles'
import getCroppedImg from './utils/imageHelper'
import Cropper from 'react-easy-crop'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />
})

function Picture(props: React.PropsWithRef<any>) {
  const { t, i18n } = useTranslation('form')

  const [upImg, setUpImg] = useState('')
  const [cropState, setCropState] = useState(false)
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  })

  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const classes = imageStyle()

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => setUpImg(reader.result as string))
      reader.readAsDataURL(e.target.files[0])
      setCropState(true)
    }
  }

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 0,
      }}
    >
      <Dialog
        open={cropState}
        maxWidth="sm"
        fullWidth={true}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setCropState(false)}
      >
        <DialogTitle>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={() => setCropState(false)}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle>{'Hello World'}</DialogTitle>
        </DialogTitle>

        <div className={classes.cropContainer}>
          <Cropper
            image={upImg}
            crop={crop}
            zoom={zoom}
            zoomSpeed={0.1}
            maxZoom={5}
            zoomWithScroll={true}
            aspect={3 / 4}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <DialogContentText className={classes.dialogText}>
          <ul className={classes.unorderList}>
            {t('cropDescription', {
              returnObjects: true,
              joinArrays: '|',
            })
              .split('|')
              .map((value) => (
                <li>{value}</li>
              ))}
          </ul>
        </DialogContentText>
        <Button
          variant="contained"
          color="primary"
          className={classes.submitButton}
          onClick={async () => {
            const image = await getCroppedImg(upImg, croppedAreaPixels)
            setCropState(false)
            props.setImageUrl(image)
          }}
        >
          {t('confirmCrop')}
        </Button>
      </Dialog>

      {props.imageUrl ? (
        <div>
          <img src={props.imageUrl} className={classes.image}></img>
        </div>
      ) : (
        <div className={classes.image}></div>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          onChange={onSelectFile}
          onClick={(e) => (e.currentTarget.value = '')}
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component="span"
          >
            {t('uploadTextButton')}
          </Button>
        </label>
        <p className={classes.reasonText}>{t('uploadReason')}</p>
      </div>
    </div>
  )
}

export default Picture
