import {
  FormControl,
  FormLabel,
  TextField,
  FormHelperText,
  Select,
} from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { formStyle } from '../../style'
import { useField } from 'formik'

interface IFormField {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<any>) => void
  error: string | undefined
  touched: boolean
}

interface IFormTextFieldWrapper {
  name: string
}

interface IFormTextField extends IFormField {}

interface IFormSelectFieldOption {
  value: string
  text: string
}

interface IFormSelectFieldWrapper {
  name: string
  options: IFormSelectFieldOption[]
}

interface IFormSelectField extends IFormField {
  options: IFormSelectFieldOption[]
}

const FormTextField = React.memo(function FormTextField(
  props: IFormTextFieldWrapper
) {
  const { name } = props
  const [{ value, onChange }, { error, touched }] = useField(name)
  const pass = { name, value, onChange, error, touched }
  return <FormTextFieldInner {...pass} />
})

const FormTextFieldInner = React.memo(function FormTextFieldInner(
  props: IFormTextField
) {
  const { name, value, onChange, error, touched } = props
  const { t } = useTranslation('form')
  const classes = formStyle()
  return (
    <FormControl className={classes.formControl}>
      <FormLabel className={classes.label} focused={false}>
        {t(name)}
      </FormLabel>
      <TextField
        name={name}
        size="small"
        value={value}
        onChange={onChange}
        error={touched && Boolean(error)}
        className={classes.particular}
        variant="outlined"
      />
      <FormHelperText className={classes.error}>
        {touched && error && t(error)}
      </FormHelperText>
    </FormControl>
  )
})

const FormSelectField = React.memo(function FormSelectField(
  props: IFormSelectFieldWrapper
) {
  const { name, options } = props
  const [{ value, onChange }, { error, touched }] = useField(name)
  const pass = { name, value, onChange, error, touched, options }
  return <FormSelectFieldInner {...pass} />
})

const FormSelectFieldInner = React.memo(function FormSelectFieldInner(
  props: IFormSelectField
) {
  const { name, value, onChange, error, touched, options } = props
  const { t } = useTranslation('form')
  const classes = formStyle()
  return (
    <FormControl className={classes.formControl}>
      <FormLabel className={classes.label}>{t(name)}</FormLabel>
      <Select
        native
        className={classes.particular_select}
        name={name}
        value={value}
        variant="outlined"
        error={touched && Boolean(error)}
        onChange={onChange}
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
