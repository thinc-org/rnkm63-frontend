import { Button, makeStyles } from '@material-ui/core'
import theme from 'config/theme'
import React from 'react'
import { Link } from 'react-router-dom'

interface Buttonprops {
  name: string
  link: string
}

const useStyle = makeStyles({
  root: {
    marginRight: '1rem',
    textAlign: 'center',
    textTransform: 'none',
  },
  [theme.breakpoints.between(880, 'md')]: {
    root: {
      marginRight: '3rem',
    },
  },
  [theme.breakpoints.up('md')]: {
    root: {
      marginRight: '5.4rem',
    },
  },
})

const LinkPage = (props: Buttonprops) => {
  const classes = useStyle()
  return (
    <>
      <Button component={Link} to={props.link} className={classes.root}>
        {props.name}
      </Button>
    </>
  )
}

export default LinkPage
