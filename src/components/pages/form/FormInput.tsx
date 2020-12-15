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
import theme from '../../../config/theme'
import Link from '@material-ui/core/Link'
import FormHelperText from '@material-ui/core/FormHelperText'

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
  overrides: {
    MuiInput: {
      formControl: {
        'label + &': {
          marginTop: '0px',
        },
      },
    },
  },
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
    margin: theme.spacing(1),
    // marginRight:"20px"
  },
  particular: {
    margin: theme.spacing(0.5),
    background: theme.palette.primary.main,
    //borderColor:"#D3D3D3"
  },
  particular_select: {
    margin: theme.spacing(0.5),
    background: theme.palette.primary.main,
    height: '2.58rem',
  },
  label: {
    margin: theme.spacing(0.5),
    color: theme.palette.text.primary,
  },
  formControl: {
    margin: theme.spacing(0.5),
    minWidth: 120,
  },
  choice: {
    color: theme.palette.text.secondary,
  },
  error: {
    color: theme.palette.error.main,
    marginLeft: theme.spacing(0.5),
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

const INITIAL_VALUE = {
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
}

function FormInput(props: any) {
  const classes = useStyles()
  const { t, i18n } = useTranslation('form')
  const style = indexStyle({ lang: i18n.language })

  const formik = useFormik({
    initialValues: INITIAL_VALUE,
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Box>
      <p
        style={{
          color: '#FABD03',
          margin: theme.spacing(2),
          marginTop: '0rem',
          marginBottom: '0rem',
          fontSize: '1.25rem',
        }}
      >
        *Do not leave any fields blank. (“-” if empty)
      </p>
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
          <p
            style={{
              color: '#FABD03',
              margin: theme.spacing(2),
              marginTop: '0rem',
              marginBottom: '0rem',
              fontSize: '0.75rem',
            }}
          >
            Note: If you don’t have Thai nickname, please contact{' '}
            <Link href="https://www.facebook.com/chulafreshmen">
              CU for Freshman
            </Link>
          </p>
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
  const { id, name, value, handleChange, error, touched, className } = props
  const { t } = useTranslation('form')
  const classes = useStyles()
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
  const {
    id,
    name,
    value,
    handleChange,
    error,
    touched,
    className,
    options,
  } = props
  const { t } = useTranslation('form')
  const classes = useStyles()
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

export default FormInput
