import {
  FormControl,
  FormLabel,
  TextField,
  FormHelperText,
  Select,
} from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { formStyle } from '../style'

interface IFormField<V, E> {
  id: string
  name: string
  value: V
  handleChange: (event: E) => void
  error: string | undefined
  touched: Boolean | undefined
  className?: string
}

interface IFormTextField
  extends IFormField<
    String,
    React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  > {}

interface IFormSelectFieldOption {
  value: string
  text: string
}

interface IFormSelectField
  extends IFormField<
    String,
    React.ChangeEvent<{ name?: string | undefined; value: any }>
  > {
  options: IFormSelectFieldOption[]
}

const FormTextField = React.memo(function FormTextField(props: IFormTextField) {
  const { id, name, value, handleChange, error, touched } = props
  const { t } = useTranslation('form')
  const classes = formStyle()
  return (
    <FormControl className={classes.formControl}>
      <FormLabel className={classes.label}>{t(name)}</FormLabel>
      <TextField
        name={name}
        id={id}
        size="small"
        value={value}
        onChange={handleChange}
        error={touched && Boolean(error)}
        //helperText={touched && error && t(error)}
        className={classes.particular}
        //label={t(name)}
        variant="outlined"
      />
      <FormHelperText className={classes.error}>
        {touched && error && t(error)}
      </FormHelperText>
    </FormControl>
  )
})

const FormSelectField = React.memo(function FormSelectField(
  props: IFormSelectField
) {
  const { id, name, value, handleChange, error, touched, options } = props
  const { t } = useTranslation('form')
  const classes = formStyle()
  return (
    <FormControl className={classes.formControl}>
      <FormLabel className={classes.label}>{t(name)}</FormLabel>
      <Select
        native
        className={classes.particular_select}
        id={id}
        name={name}
        value={value}
        variant="outlined"
        error={touched && Boolean(error)}
        onChange={handleChange}
      >
        <option aria-label="None" value="" />
        {options.map((option) => (
          <FormSelectFieldOption
            key={`${option.value}-${option.text}`}
            {...option}
          />
        ))}
      </Select>
    </FormControl>
  )
})

const FormSelectFieldOption = React.memo(function FormSelectFieldOption(
  props: IFormSelectFieldOption
) {
  const { t } = useTranslation('form')
  return (
    <option style={{ color: 'black' }} value={props.value}>
      {t(props.text)}
    </option>
  )
})

export { FormTextField, FormSelectField }
