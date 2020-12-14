import React, { useCallback, useState } from 'react'
import {
  Button,
  Slide,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContentText,
  Slider,
  Box,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { TransitionProps } from '@material-ui/core/transitions/transition'
import CloseIcon from '@material-ui/icons/Close'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import ZoomOutIcon from '@material-ui/icons/ZoomOut'
import { imageStyle } from './style/styles'
import getCroppedImg from './utils/imageHelper'
import Cropper from 'react-easy-crop'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />
})

function Image(props: React.PropsWithRef<any>) {
  const { t, i18n } = useTranslation('form')

  const [upImg, setUpImg] = useState('')
  const [cropState, setCropState] = useState(false)
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  })

  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const classes = imageStyle({ lang: i18n.language })

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => setUpImg(reader.result as string))
      reader.readAsDataURL(e.target.files[0])
      setCrop({
        x: 0,
        y: 0,
      })
      setZoom(1)
    }
  }

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  return (
    <Box
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
        </DialogTitle>
        <DialogTitle className={classes.dialogTitle}>
          {t('dialogTitle')}
        </DialogTitle>

        {!!upImg ? (
          <React.Fragment>
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
              }}
            >
              <div className={classes.cropContainer}>
                <Cropper
                  image={upImg}
                  crop={crop}
                  zoom={zoom}
                  zoomSpeed={0.1}
                  maxZoom={4}
                  aspect={3 / 4}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </div>
            </div>
            <div className={classes.zoomSlider}>
              <ZoomOutIcon style={{ paddingRight: '10px' }} />
              <Slider
                defaultValue={1}
                value={zoom}
                min={1}
                max={4}
                step={0.1}
                onChange={(_, newValue) => {
                  setZoom(newValue as number)
                }}
              />
              <ZoomInIcon style={{ paddingLeft: '10px' }} />
            </div>
          </React.Fragment>
        ) : (
          <div className={classes.cropContainer}>
            <div style={{ width: '100%', height: '100%' }}>
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
                  style={{
                    width: '100%',
                    height: '100%',
                    color: 'white',
                    verticalAlign: 'center',
                  }}
                  component="span"
                >
                  {'Click to Upload Image'}
                </Button>
              </label>
            </div>
          </div>
        )}
        <DialogContentText className={classes.dialogText}>
          <ul>
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
            if (!upImg) {
              return
            }
            const image = await getCroppedImg(upImg, croppedAreaPixels)
            setCropState(false)
            props.setImageUrl(image)
          }}
        >
          {t('confirmCrop')}
        </Button>
      </Dialog>

      {!!props.imageUrl ? (
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
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            setCropState(true)
            setUpImg('')
          }}
        >
          {t('uploadTextButton')}
        </Button>
        <p className={classes.reasonText}>{t('uploadReason')}</p>
      </div>
    </Box>
  )
}

export default Image
