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
  Typography,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { TransitionProps } from '@material-ui/core/transitions/transition'
import { getCroppedImg, getResizedImage } from './utils/imageHelper'
import Cropper from 'react-easy-crop'
import CloseIcon from '@material-ui/icons/Close'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import ZoomOutIcon from '@material-ui/icons/ZoomOut'
import { imageStyle } from './style'

interface resultImg {
  blob: Blob
  urlFile: string
}

interface resizeImg {
  uri: Blob
  widthImg: number
  heightImg: number
}

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
  const [maxZoom, setMaxZoom] = useState(4)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [finalImg, setFinalImg] = useState('')

  const style = imageStyle({ lang: i18n.language })

  const onSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => setUpImg(reader.result as string))

      const { uri, widthImg, heightImg }: resizeImg = (await getResizedImage(
        e.target.files[0]
      )) as resizeImg

      reader.readAsDataURL(uri)

      setCrop({
        x: 0,
        y: 0,
      })
      setMaxZoom(Math.min(widthImg / 180, heightImg / 240))
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
        PaperProps={{
          classes: { root: style.dialog },
        }}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setCropState(false)}
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <DialogTitle>
          <IconButton
            aria-label="close"
            className={style.closeButton}
            onClick={() => setCropState(false)}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogTitle className={style.dialogTitle}>
          {t('dialogTitle')}
        </DialogTitle>

        {!!upImg ? (
          <React.Fragment>
            <Box
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
              }}
            >
              <Box className={style.cropContainer}>
                <Cropper
                  image={upImg}
                  crop={crop}
                  zoom={zoom}
                  zoomSpeed={0.1}
                  maxZoom={maxZoom}
                  aspect={3 / 4}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </Box>
            </Box>
            <Box className={style.zoomSlider}>
              <ZoomOutIcon style={{ paddingRight: '10px', color: 'black' }} />
              <Slider
                defaultValue={1}
                value={zoom}
                min={1}
                max={maxZoom}
                step={0.1}
                onChange={(_, newValue) => {
                  setZoom(newValue as number)
                }}
              />
              <ZoomInIcon style={{ paddingLeft: '10px', color: 'black' }} />
            </Box>
          </React.Fragment>
        ) : (
          <Box className={style.cropContainer}>
            <Box style={{ width: '100%', height: '100%' }}>
              <input
                accept="image/*"
                className={style.input}
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
            </Box>
          </Box>
        )}
        <DialogContentText className={style.dialogText}>
          <ul>
            {t('cropDescription', {
              returnObjects: true,
              joinArrays: '|',
            })
              .split('|')
              .map((value) => (
                <li key={value}>{value}</li>
              ))}
          </ul>
        </DialogContentText>
        <Button
          variant="contained"
          color="primary"
          className={style.submitButton}
          onClick={async () => {
            if (!upImg) {
              return
            }
            const img: resultImg = await getCroppedImg(upImg, croppedAreaPixels)
            setCropState(false)
            setFinalImg(img.urlFile)
            props.setImageBlob(img.blob)
          }}
        >
          {t('confirmCrop')}
        </Button>
      </Dialog>

      {!!finalImg ? (
        <Box>
          <img src={finalImg} className={style.image} alt=""></img>
        </Box>
      ) : (
        <Box className={style.image}></Box>
      )}
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          className={style.button}
          onClick={() => {
            setCropState(true)
            setUpImg('')
          }}
        >
          {t('uploadTextButton')}
        </Button>
        <Typography className={style.reasonText}>
          {t('uploadReason')}
        </Typography>
      </Box>
    </Box>
  )
}

export default Image
