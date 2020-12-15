import * as Yup from 'yup'
export const registerSchema = Yup.object().shape({
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
