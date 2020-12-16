import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
  realname: Yup.string().required('required'),
  prefixname: Yup.string().required('required'),
  surname: Yup.string().required('required'),
  nickname: Yup.string()
    .required('required')
    .matches(/^[ก-๛]+$/, 'notthai'),
  religion: Yup.string().required('required'),
  tel: Yup.string().required('required'),
  facebook: Yup.string().required('required'),
  lineID: Yup.string().required('required'),
  emergencyTel: Yup.string().required('required'),
  emergencyTelRelationship: Yup.string().required('required'),
  disease: Yup.string().required('required'),
  allergyMedicine: Yup.string().required('required'),
  usedMedicine: Yup.string().required('required'),
  foodRestriction: Yup.string().required('required'),
  disability: Yup.string().required('required'),
})

const FORM_PREFIX_FIELD_OPTIONS = [
  { value: 'นาย', text: 'mr' },
  { value: 'นางสาว', text: 'ms' },
]

const FORM_RELIGION_FIELD_OPTIONS = [
  { value: 'buddhism', text: 'bd' },
  { value: 'christianity', text: 'cs' },
  { value: 'islam', text: 'il' },
  { value: 'hinduism', text: 'hs' },
  { value: 'sikhism', text: 'sk' },
  { value: 'other', text: 'ot' },
  { value: 'RNS', text: 'rns' },
]
const formInitialValues = {
  prefixname: '',
  realname: '',
  surname: '',
  nickname: '',
  religion: '',
  tel: '',
  facebook: '',
  lineID: '',
  emergencyTel: '',
  emergencyTelRelationship: '',
  disease: '',
  allergyMedicine: '',
  usedMedicine: '',
  foodRestriction: '',
  disability: '',
}

export {
  registerSchema,
  FORM_PREFIX_FIELD_OPTIONS,
  FORM_RELIGION_FIELD_OPTIONS,
  formInitialValues,
}
