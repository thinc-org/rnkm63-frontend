import * as Yup from 'yup'

interface IFormData {
  prefixname: string
  realname: string
  surname: string
  nickname: string
  religion: string
  disease: string
  allergy?: string
  allergyMedicine: string
  usedMedicine: string
  foodRestriction: string
  disability: string
  tel: string
  emergencyTel: string
  emergencyTelRelationship: string
  facebook: string
  lineID: string
  imgURL?: string
}

interface IFormDataRequest {
  data: IFormData | null
  isNameWrong: boolean
  isImgWrong: boolean
  reason: string | null
  isQualified: boolean
  isConfirm: boolean
  isTransfer: boolean
  currentBaan: number
  preferBaan: number | null
}

const registerSchema = Yup.object().shape({
  prefixname: Yup.string().required('required'),
  realname: Yup.string().required('required'),
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
  allergy: Yup.string().required('required'),
  allergyMedicine: Yup.string().required('required'),
  usedMedicine: Yup.string().required('required'),
  disability: Yup.string().required('required'),
  foodRestriction: Yup.string().required('required'),
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
  allergy: '',
  allergyMedicine: '',
  usedMedicine: '',
  foodRestriction: '',
  disability: '',
  imgURL: '',
}

export {
  registerSchema,
  FORM_PREFIX_FIELD_OPTIONS,
  FORM_RELIGION_FIELD_OPTIONS,
  formInitialValues,
}

export type { IFormData, IFormDataRequest }
