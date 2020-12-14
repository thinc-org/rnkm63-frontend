import { compressAccurately, urltoBlob } from 'image-conversion'
import Resizer from 'react-image-file-resizer'

const createImage = (url: any) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

const limitFileKB = 300

function getRadianAngle(degreeValue: any) {
  return (degreeValue * Math.PI) / 180
}

export async function getResizedImage(img: File) {
  const tmpImg: HTMLImageElement = (await createImage(
    URL.createObjectURL(img)
  )) as HTMLImageElement

  let heightImg = tmpImg.height
  let widthImg = tmpImg.width

  const heightMin = 240
  const widthMin = 180

  if (heightImg <= heightMin) {
    const ratio = heightMin / heightImg
    heightImg *= ratio
    widthImg *= ratio
  }

  if (widthImg <= widthMin) {
    const ratio = widthMin / widthImg
    heightImg *= ratio
    widthImg *= ratio
  }

  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      img,
      widthImg,
      heightImg,
      'jpeg',
      100,
      0,
      (uri) => {
        resolve({ uri, widthImg, heightImg })
      },
      'blob'
    )
  })
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */
export async function getCroppedImg(
  imageSrc: any,
  pixelCrop: any,
  rotation = 0
) {
  const image: any = await createImage(imageSrc)
  const canvas: any = document.createElement('canvas')
  const ctx: any = canvas.getContext('2d')

  const maxSize = Math.max(image.width, image.height)
  const safeArea = maxSize

  // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context
  canvas.width = safeArea
  canvas.height = safeArea

  // translate canvas context to a central location on image to allow rotating around the center.
  ctx.translate(safeArea / 2, safeArea / 2)
  ctx.rotate(getRadianAngle(rotation))
  ctx.translate(-safeArea / 2, -safeArea / 2)

  // draw rotated image and store data.
  ctx.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5
  )
  const data = ctx.getImageData(0, 0, safeArea, safeArea)

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  // paste generated rotate image with correct offsets for x,y crop values.
  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  )

  // As Base64 string
  const base64 = canvas.toDataURL('image/jpeg')
  const blob = await urltoBlob(base64)

  const compressImg = await compressAccurately(blob, limitFileKB)
  // console.log('Before compress: ', checkImageSize(base64), limitFileKB * 1024)
  // console.log('After compress: ', compressImg.size, limitFileKB * 1024)
  // console.log('Result: ', compressImg)

  // As a blob
  return { urlFile: URL.createObjectURL(compressImg), blob: compressImg }
}

export function checkImageSize(img: string) {
  const buffer = Buffer.from(img.substring(img.indexOf(',') + 1))

  return buffer.length
}
