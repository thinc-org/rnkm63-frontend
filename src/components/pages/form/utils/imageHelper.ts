import { compressAccurately } from 'image-conversion'
import Resizer from 'react-image-file-resizer'

export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

const limitFileKB = 300

function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180
}

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
        90,
        0,
        (uri) => {
          resolve(uri)
        },
        'blob'
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
      'blob'
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
export async function getCroppedImg(
  imageSrc: any,
  pixelCrop: any,
  rotation = 0
) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!!

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
