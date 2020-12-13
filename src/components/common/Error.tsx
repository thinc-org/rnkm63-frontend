import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  ErrorContainer: {
    backgroundColor: 'red',
  },
})

interface IError {
  title: string
  detail: string
}

function Error({ title, detail }: IError) {
  const classes = useStyles()
  return (
    <Box className={classes.ErrorContainer}>
      <h1>Error!!</h1>
      <h4>{title}</h4>
      <p>{detail}</p>
    </Box>
  )
}

export default Error
