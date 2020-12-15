import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import { InputLabel, Box } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import { indexStyle } from './style'
import { useTranslation } from 'react-i18next'
import FormLabel from '@material-ui/core/FormLabel'

const RegisterSchema = Yup.object().shape({
  realname: Yup.string().required('required'),
  prefix: Yup.string().required('required'),
  surname: Yup.string().required('required'),
  nickname: Yup.string()
    .required('required')
    .matches(/^[ก-๛]+$/, 'notthai'),
  religion: Yup.string().required('required'),
  tel: Yup.string().required('required'),
  facebook: Yup.string().required('required'),
  lineID: Yup.string().required('required'),
  emergencyTel: Yup.string().required('required'),
  emergencyConnection: Yup.string().required('required'),
  disease: Yup.string().required('required'),
  allergyMedicine: Yup.string().required('required'),
  usedMedicine: Yup.string().required('required'),
  foodRestriction: Yup.string().required('required'),
  disability: Yup.string().required('required'),
})

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
  inside: {
    margin: '10px',
    // marginRight:"20px"
  },
  particular: {
    margin: '10px',
  },
  selectbox: {
    height: '40px',
  },
  label: {
    marginBottom: '5px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

const FORM_PREFIX_FIELD_OPTIONS = [
  { value: 'Mr.', text: 'mr' },
  { value: 'Ms.', text: 'ms' },
]

const FORM_RELIGION_FIELD_OPTIONS = [
  { value: 'buddhism', text: 'bd' },
  { value: 'christianity', text: 'cs' },
  { value: 'islam', text: 'il' },
  { value: 'hiduism', text: 'hs' },
  { value: 'sikhism', text: 'sk' },
  { value: 'other', text: 'ot' },
  { value: 'rns', text: 'rns' },
]

function FormInput(props: any) {
  const classes = useStyles()
  const { t, i18n } = useTranslation('form')
  const style = indexStyle({ lang: i18n.language })

  const formik = useFormik({
    initialValues: {
      prefix: '',
      realname: '',
      surname: '',
      nickname: '',
      religion: '',
      tel: '',
      facebook: '',
      lineID: '',
      emergencyTel: '',
      emergencyConnection: '',
      disease: '',
      allergyMedicine: '',
      usedMedicine: '',
      foodRestriction: '',
      disability: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Box>
      <form onSubmit={formik.handleSubmit} className={classes.root}>
        <Box className={classes.inside}>
          <FormSelectField
            id="prefix"
            name="prefix"
            value={formik.values.prefix}
            handleChange={formik.handleChange}
            error={formik.errors.prefix}
            touched={formik.touched.prefix}
            options={FORM_PREFIX_FIELD_OPTIONS}
          />
          <FormTextField
            id="realname"
            name="realname"
            value={formik.values.realname}
            handleChange={formik.handleChange}
            error={formik.errors.realname}
            touched={formik.touched.realname}
          />

          <FormTextField
            id="surname"
            name="surname"
            value={formik.values.surname}
            handleChange={formik.handleChange}
            error={formik.errors.surname}
            touched={formik.touched.surname}
          />

          <FormTextField
            id="nickname"
            name="nickname"
            value={formik.values.nickname}
            handleChange={formik.handleChange}
            error={formik.errors.nickname}
            touched={formik.touched.nickname}
          />

          <FormSelectField
            id="religion"
            name="religion"
            value={formik.values.religion}
            handleChange={formik.handleChange}
            error={formik.errors.religion}
            touched={formik.touched.religion}
            options={FORM_RELIGION_FIELD_OPTIONS}
          />
        </Box>

        <Box className={classes.inside}>
          <FormTextField
            id="tel"
            name="tel"
            value={formik.values.tel}
            handleChange={formik.handleChange}
            error={formik.errors.tel}
            touched={formik.touched.tel}
          />

          <FormTextField
            id="facebook"
            name="facebook"
            value={formik.values.facebook}
            handleChange={formik.handleChange}
            error={formik.errors.facebook}
            touched={formik.touched.facebook}
          />

          <FormTextField
            id="lineID"
            name="lineID"
            value={formik.values.lineID}
            handleChange={formik.handleChange}
            error={formik.errors.lineID}
            touched={formik.touched.lineID}
          />

          <FormTextField
            id="emergencyTel"
            name="emergencyTel"
            value={formik.values.emergencyTel}
            handleChange={formik.handleChange}
            error={formik.errors.emergencyTel}
            touched={formik.touched.emergencyTel}
          />
          <FormTextField
            id="emergencyConnection"
            name="emergencyConnection"
            value={formik.values.emergencyConnection}
            handleChange={formik.handleChange}
            error={formik.errors.emergencyConnection}
            touched={formik.touched.emergencyConnection}
          />
        </Box>

        <Box className={classes.inside}>
          <FormTextField
            id="disease"
            name="disease"
            value={formik.values.disease}
            handleChange={formik.handleChange}
            error={formik.errors.disease}
            touched={formik.touched.disease}
          />
          <FormTextField
            id="allergyMedicine"
            name="allergyMedicine"
            value={formik.values.allergyMedicine}
            handleChange={formik.handleChange}
            error={formik.errors.allergyMedicine}
            touched={formik.touched.allergyMedicine}
          />
          <FormTextField
            id="usedMedicine"
            name="usedMedicine"
            value={formik.values.usedMedicine}
            handleChange={formik.handleChange}
            error={formik.errors.usedMedicine}
            touched={formik.touched.usedMedicine}
          />
          <FormTextField
            id="foodRestriction"
            name="foodRestriction"
            value={formik.values.foodRestriction}
            handleChange={formik.handleChange}
            error={formik.errors.foodRestriction}
            touched={formik.touched.foodRestriction}
          />
          <FormTextField
            id="disability"
            name="disability"
            value={formik.values.disability}
            handleChange={formik.handleChange}
            error={formik.errors.disability}
            touched={formik.touched.disability}
          />
        </Box>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  )
}

function FormPrefixField(
  props: IFormField<
    String,
    React.ChangeEvent<{ name?: string | undefined; value: any }>
  >
) {
  return <FormSelectField {...props} options={FORM_PREFIX_FIELD_OPTIONS} />
}

interface IFormField<T, E> {
  id: string
  name: string
  value: T
  handleChange: (event: E) => void
  error: string | undefined
  touched: Boolean | undefined
}

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

interface IFormTextField
  extends IFormField<
    String,
    React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  > {}

interface ITranslationAndStyles {
  t: Function
  classes: any
}

function withTranslationAndStyles<P>(
  Component: React.ComponentType<P & ITranslationAndStyles>
): React.FC<P> {
  return (props: P) => {
    const classes = useStyles()
    const { t } = useTranslation('form')
    return <Component {...props} t={t} classes={classes} />
  }
}

class FormTextFieldC extends React.PureComponent<
  IFormTextField & ITranslationAndStyles
> {
  constructor(props: IFormTextField & ITranslationAndStyles) {
    super(props)
  }
  render() {
    const {
      id,
      name,
      value,
      handleChange,
      error,
      touched,
      t,
      classes,
    } = this.props
    return (
      <FormControl className={classes.formControl}>
        <TextField
          name={name}
          id={id}
          size="small"
          value={value}
          onChange={handleChange}
          error={touched && Boolean(error)}
          helperText={touched && error && t(error)}
          label={t(name)}
        />
      </FormControl>
    )
  }
}

class FormSelectFieldC extends React.PureComponent<
  IFormSelectField & ITranslationAndStyles
> {
  constructor(props: IFormSelectField & ITranslationAndStyles) {
    super(props)
  }
  render() {
    const {
      id,
      name,
      value,
      handleChange,
      error,
      touched,
      options,
      t,
      classes,
    } = this.props
    return (
      <FormControl className={classes.formControl}>
        <FormLabel className={classes.label}>{t(name)}</FormLabel>
        <Select
          native
          className={classes.selectbox}
          id={id}
          name={name}
          value={value}
          error={touched && Boolean(error)}
          onChange={handleChange}
        >
          <option aria-label="None" value="" />
          {options.map((option) => (
            <option value={option.value}>{t(option.text)}</option>
          ))}
        </Select>
      </FormControl>
    )
  }
}

const FormSelectField = withTranslationAndStyles<IFormSelectField>(
  FormSelectFieldC
)
const FormTextField = withTranslationAndStyles<IFormTextField>(FormTextFieldC)

export default FormInput
