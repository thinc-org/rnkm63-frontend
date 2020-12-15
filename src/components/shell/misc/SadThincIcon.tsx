import React from 'react'
import { makeStyles } from '@material-ui/core'
import sadThinc from '../../../local/sadthinc.png'
import theme from '../../../config/theme'
const useStyles = makeStyles({
  [theme.breakpoints.down('sm')]: {},
  [theme.breakpoints.up('sm')]: {},
})
function SadThincIcon() {
  const classes = useStyles()
  return <img src={sadThinc} className={classes.image}></img>
}
export default SadThincIcon
