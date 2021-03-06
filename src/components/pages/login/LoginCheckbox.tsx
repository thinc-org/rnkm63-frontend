import { Checkbox, FormControlLabel, Typography } from '@material-ui/core'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import React from 'react'

import indexStyle from './indexStyle'

type Props = {
  update?: () => void
  text?: string
}

function LoginCheckbox({ update, text }: Props) {
  const style = indexStyle()

  return (
    <FormControlLabel
      className={style.checkboxForm}
      control={
        <Checkbox
          onChange={update}
          color="primary"
          icon={
            <CheckBoxOutlineBlankIcon
              className={style.checkbox}
              fontSize="large"
            />
          }
          checkedIcon={
            <CheckBoxIcon className={style.checkbox} fontSize="large" />
          }
          name="checkedI"
        />
      }
      label={<Typography className={style.agreement}>{text}</Typography>}
    />
  )
}

export default LoginCheckbox
