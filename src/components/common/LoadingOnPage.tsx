import { Backdrop, makeStyles, Theme } from '@material-ui/core'
import React from 'react'

import Loading from './Loading'

interface ILoadingOnPage {
  onProcess: boolean
}

const useStyle = makeStyles((theme: Theme) => ({
  backdrop: {
    zIndex: theme.zIndex.modal + 1,
    backdropFilter: 'blur(2px)',
  },
}))

const LoadingOnPage = React.memo((props: ILoadingOnPage) => {
  const classes = useStyle()
  const { onProcess } = props
  return (
    <Backdrop className={classes.backdrop} open={onProcess}>
      <Loading />
    </Backdrop>
  )
})

export default LoadingOnPage
