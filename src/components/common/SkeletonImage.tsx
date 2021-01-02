import { Skeleton } from '@material-ui/lab'
import React, { useCallback, useState } from 'react'

export interface SkeletionImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const SkeletonImage = (props: SkeletionImageProps) => {
  const { alt, className, ...rest } = props
  const [loaded, setLoaded] = useState(true)
  const handleLoaded = useCallback(() => setLoaded(false), [])

  return (
    <>
      {loaded && <Skeleton variant="rect" className={className} />}
      <img
        alt={alt}
        className={className}
        onLoad={handleLoaded}
        style={{ display: loaded ? 'none' : 'block' }}
        {...rest}
      />
    </>
  )
}

export default SkeletonImage
