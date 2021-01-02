import { Avatar, Box } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import React, { useState } from 'react'

interface IAvatarImage {
  value: string
  style: string
  urlLogo: string | undefined
}

const AvatarImage = React.memo((props: IAvatarImage) => {
  const [loaded, setLoaded] = useState(false)
  const { value, style: classes, urlLogo } = props

  const setLoadedImage = React.useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <React.Fragment>
      <Box display={loaded ? 'inline' : 'none'}>
        <Avatar
          alt={value}
          className={classes}
          src={urlLogo}
          imgProps={{
            onLoad: setLoadedImage,
          }}
        />
      </Box>
      <Box display={!loaded ? 'inline' : 'none'}>
        <Skeleton variant="circle" className={classes}>
          <Avatar className={classes} />
        </Skeleton>
      </Box>
    </React.Fragment>
  )
})

export default AvatarImage
