import React from 'react'
import { makeStyles } from '@material-ui/core'
import sadThinc from '../../../local/sadthinc.png'
import theme from '../../../config/theme'
const useStyles = makeStyles({
  [theme.breakpoints.down('sm')]: {},
})
function SadThincIcon() {
  const classes = useStyles()
  return <img src={sadThinc} className={classes.image} />
}
export default SadThincIcon
