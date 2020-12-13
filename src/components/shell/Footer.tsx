import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  Footer: {
    minHeight: '8vh',
    border: '2px solid red',
  },
})

function Footer() {
  const classes = useStyles()
  return (
    <Box className={classes.Footer}>
      <h1>Footer GOES HERE</h1>
    </Box>
  )
}

export default Footer
