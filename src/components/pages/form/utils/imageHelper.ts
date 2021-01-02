import { compressAccurately } from 'image-conversion'
import Resizer from 'react-image-file-resizer'

export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.src = url
  })

const limitFileKB = 300

export async function getResizedImage(
  img: File | Blob,
  widthTarget: number = -1,
  heightTarget: number = -1
): Promise<any> {
  const tmpImg: HTMLImageElement = (await createImage(
    URL.createObjectURL(img)
  )) as HTMLImageElement

  if (widthTarget !== -1) {
    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        img,
        widthTarget,
        heightTarget,
        'jpeg',
        95,
        0,
        (uri) => {
          resolve(uri)
        },
        'blob',
        widthTarget,
        heightTarget
      )
    })
  }

  let heightImg = tmpImg.height
  let widthImg = tmpImg.width

  const heightMin = 400
  const widthMin = 300

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
      'blob',
      widthImg,
      heightImg
    )
  })
}

function canvasToBlob(canvas: HTMLCanvasElement, type: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob === null) {
        reject('failed to convert canvas to blob')
      } else {
        resolve(blob)
      }
    }, type)
  })
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */
export async function getCroppedImg(imageSrc: any, pixelCrop: any) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!!

  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  )

  // As Base64 string
  const blob = await canvasToBlob(canvas, 'image/jpeg')

  const resizeBlob = await getResizedImage(blob, 300, 400)
  const compressImg = await compressAccurately(resizeBlob, limitFileKB)

  // As a blob
  return { urlFile: URL.createObjectURL(compressImg), blob: compressImg }
}

export function checkImageSize(
  img: string | File,
  checkFile: Boolean = false,
  sizeLimit: number
) {
  if (typeof img === 'string') {
    const buffer = Buffer.from(img.substring(img.indexOf(',') + 1))
    if (checkFile === true) {
      return buffer.length <= sizeLimit * 1024
    }
    return buffer.length
  } else {
    const buffer = img.size
    if (checkFile === true) {
      return buffer <= sizeLimit * 1024
    }
    return buffer
  }
}
