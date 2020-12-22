import { makeStyles } from '@material-ui/core'
import React from 'react'

import theme from '../../../config/theme'
import sadThinc from '../../../local/sadthinc.png'
const useStyles = makeStyles({
  image: {
    width: '206px',
    height: '266px',
    [theme.breakpoints.down('sm')]: {
      width: '171px',
      height: '220px',
    },
  },
})
function SadThincIcon() {
  const classes = useStyles()
  return <img src={sadThinc} alt="" className={classes.image} />
}
export default SadThincIcon
