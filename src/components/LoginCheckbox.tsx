import React from 'react'
import { FormControlLabel } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'

interface Props extends WithStyles<typeof styles> {
  className?: string
  update?: () => void
  text?: string
}

const styles = {
  label: {
    fontSize: 12,
  },
}

const GreenCheckbox = withStyles({
  root: {
    color: '#27AE60',
    '&$checked': {
      color: '#27AE60',
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />)

function LoginCheckbox(props: Props) {
  const { classes, update } = props

  return (
    <FormControlLabel
      classes={classes}
      control={
        <GreenCheckbox
          onChange={update}
          icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
          checkedIcon={<CheckBoxIcon fontSize="large" />}
          name="checkedI"
        />
      }
      label={props.text}
    />
  )
}

export default withStyles(styles)(LoginCheckbox)
