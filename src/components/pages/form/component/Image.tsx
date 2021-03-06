import {
  Box,
  Button,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
  Slider,
  Typography,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions/transition'
import CloseIcon from '@material-ui/icons/Close'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import ZoomOutIcon from '@material-ui/icons/ZoomOut'
import { BlurBehindDialog } from 'components/common/BlurBehindDialog'
import LoadingOnPage from 'components/common/LoadingOnPage'
import React, { useCallback, useEffect, useState } from 'react'
import Cropper from 'react-easy-crop'
import { useTranslation } from 'react-i18next'

import { imageStyle } from '../style'
import {
  checkImageSize,
  getCroppedImg,
  getResizedImage,
} from '../utils/imageHelper'

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

const Image = React.memo(function Image(props: React.PropsWithRef<any>) {
  const { t } = useTranslation('form')
  const {
    setImageBlob,
    preImage,
    isImgWrong,
    imageRequired,
    setImageRequired,
  } = props

  const [upImg, setUpImg] = useState('')
  const [cropState, setCropState] = useState(false)
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  })

  const [zoom, setZoom] = useState(1)
  const [maxZoom, setMaxZoom] = useState(4)
  const [fileSizeError, setFileSizeError] = useState(false)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [finalImg, setFinalImg] = useState(preImage)
  const [editStatus, setEditStatus] = useState(false)
  const [onProcess, setOnProcess] = useState(false)

  const style = imageStyle({ editStatus: imageRequired })

  const onSelectFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setOnProcess(true)
        const reader = new FileReader()
        const file = e.target.files[0]

        if (!checkImageSize(file, true, 10240)) {
          setFileSizeError(true)
          setOnProcess(false)
          return
        }

        reader.addEventListener('load', () => setUpImg(reader.result as string))

        const { uri, widthImg, heightImg }: resizeImg = (await getResizedImage(
          file
        )) as resizeImg

        reader.readAsDataURL(uri)

        setCrop({
          x: 0,
          y: 0,
        })
        setMaxZoom(Math.min(widthImg / 180, heightImg / 240))
        setZoom(1)
        setFileSizeError(false)
        setOnProcess(false)
      }
    },
    []
  )

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const makeCroppedImage = useCallback(async () => {
    setOnProcess(true)
    if (!upImg) {
      return
    }
    const img: resultImg = await getCroppedImg(upImg, croppedAreaPixels)
    setCropState(false)
    setFinalImg(img.urlFile)
    setImageBlob(img.blob)
    setOnProcess(false)
    setEditStatus(true)
    setImageRequired(false)
  }, [upImg, croppedAreaPixels, setImageBlob, setImageRequired])

  const closeDialog = useCallback(() => {
    setCropState(false)
    setFileSizeError(false)
  }, [setCropState])

  const zoomOnChange = useCallback((_, newValue) => {
    setZoom(newValue as number)
  }, [])

  const selectSameFile = useCallback((e) => (e.currentTarget.value = ''), [])

  const resetCropState = useCallback(() => {
    setCropState(true)
    setUpImg('')
  }, [])

  useEffect(() => {
    setFinalImg(preImage)
  }, [preImage])

  return (
    <Box display="flex" alignItems="center" flexDirection="column" m={0}>
      <BlurBehindDialog
        open={cropState}
        maxWidth="sm"
        fullWidth={true}
        PaperProps={{
          classes: { root: style.dialog },
        }}
        disableBackdropClick={true}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeDialog}
      >
        <DialogTitle>
          <IconButton
            aria-label="close"
            className={style.closeButton}
            onClick={closeDialog}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogTitle className={style.dialogTitle}>
          {t('dialogTitle')}
        </DialogTitle>

        {upImg ? (
          <div>
            <Box
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
              alignContent="center"
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
              <ZoomOutIcon style={{ paddingRight: '10px' }} />
              <Slider
                defaultValue={1}
                value={zoom}
                color="secondary"
                min={1}
                max={maxZoom}
                step={0.1}
                onChange={zoomOnChange}
              />
              <ZoomInIcon style={{ paddingLeft: '10px' }} />
            </Box>
          </div>
        ) : (
          <Box className={style.cropContainer}>
            <Box width="100%" height="100%">
              <input
                accept="image/*"
                className={style.input}
                id="contained-button-file"
                onChange={async (e) => await onSelectFile(e)}
                onClick={selectSameFile}
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button className={style.imageUploadButton} component="span">
                  {t('uploadInstruction')}
                </Button>
              </label>
            </Box>
          </Box>
        )}
        <Typography hidden={!fileSizeError} className={style.errorText}>
          {t('fileSizeError')}
        </Typography>
        <DialogContentText className={style.dialogText}>
          {t('cropDescription', {
            returnObjects: true,
            joinArrays: '|',
          })
            .split('|')
            .map((value, index) => (
              <Typography className={style.cropDescription} key={index}>
                {'- ' + value}
              </Typography>
            ))}
        </DialogContentText>
        {upImg ? (
          <Button
            variant="contained"
            color="primary"
            className={style.submitButton}
            onClick={makeCroppedImage}
          >
            {t('confirmCrop')}
          </Button>
        ) : null}
      </BlurBehindDialog>

      {finalImg ? (
        <Box>
          <img src={finalImg} className={style.image} alt="" />
        </Box>
      ) : (
        <Box className={style.image} />
      )}
      <Box display="flex" alignItems="center" flexDirection="column">
        {isImgWrong && (
          <Button
            variant="contained"
            color="primary"
            className={style.button}
            onClick={resetCropState}
          >
            {t('uploadTextButton')}
          </Button>
        )}
        <Typography
          hidden={editStatus || !isImgWrong}
          className={style.reasonText}
        >
          {t('uploadReason')}
        </Typography>
      </Box>
      <LoadingOnPage onProcess={onProcess} />
    </Box>
  )
})

export default Image
