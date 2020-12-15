import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import { InputLabel } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import { indexStyle } from './style'
import { useTranslation } from 'react-i18next'
import FormLabel from '@material-ui/core/FormLabel'

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

function FormInput(props: any) {
  const classes = useStyles()
  const { t, i18n } = useTranslation('form')
  const style = indexStyle({ lang: i18n.language })

  const RegisterSchema = Yup.object().shape({
    realname: Yup.string().required(`${t('required')}`),
    prefix: Yup.string().required(`${t('required')}`),
    surname: Yup.string().required(`${t('required')}`),
    nickname: Yup.string()
      .required(`${t('required')}`)
      .matches(/^[ก-๛]+$/, 'Thai Only.'),
    religion: Yup.string().required(`${t('required')}`),
    tel: Yup.number()
      .required(`${t('required')}`)
      .min(9, `${t('required')}`),
    facebook: Yup.string().required(`${t('required')}`),
    lineID: Yup.string().required(`${t('required')}`),
    emergencyTel: Yup.number()
      .required(`${t('required')}`)
      .min(9, `${t('required')}`),
    emergencyConnection: Yup.string().required(`${t('required')}`),
    disease: Yup.string().required(`${t('required')}`),
    allergyMedicine: Yup.string().required(`${t('required')}`),
    usedMedicine: Yup.string().required(`${t('required')}`),
    foodRestriction: Yup.string().required(`${t('required')}`),
    disability: Yup.string().required(`${t('required')}`),
  })
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
    <div>
      <form onSubmit={formik.handleSubmit} className={classes.root}>
        <div className={classes.inside}>
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('prefix')}</FormLabel>
            <Select
              native
              className={classes.selectbox}
              //size="small"
              name="prefix"
              value={formik.values.prefix}
              error={formik.touched.prefix && Boolean(formik.errors.prefix)}
              variant="outlined"
              onChange={formik.handleChange}
            >
              {/* helperText={formik.touched.prefix && formik.errors.prefix} */}
              <option aria-label="None" value="" />
              <option value={'Mr.'}>{t('mr')}</option>
              <option value={'Ms.'}>{t('ms')}</option>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('realname')}</FormLabel>
            <TextField
              name="realname"
              id="realname"
              // className={classes.inputbox}
              size="small"
              value={formik.values.realname}
              onChange={formik.handleChange}
              error={formik.touched.realname && Boolean(formik.errors.realname)}
              helperText={formik.touched.realname && formik.errors.realname}
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('surname')}</FormLabel>
            <TextField
              name="surname"
              id="surname"
              // className={classes.inputbox}
              size="small"
              value={formik.values.surname}
              onChange={formik.handleChange}
              error={formik.touched.surname && Boolean(formik.errors.surname)}
              helperText={formik.touched.realname && formik.errors.realname}
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('nickname')}</FormLabel>
            <TextField
              name="nickname"
              id="nickname"
              // className={classes.inputbox}
              size="small"
              value={formik.values.nickname}
              onChange={formik.handleChange}
              error={formik.touched.nickname && Boolean(formik.errors.nickname)}
              helperText={formik.touched.nickname && formik.errors.nickname}
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('religion')}</FormLabel>
            <Select
              native
              className={classes.selectbox}
              //size="small"
              name="religion"
              value={formik.values.religion}
              error={formik.touched.religion && Boolean(formik.errors.religion)}
              variant="outlined"
              onChange={formik.handleChange}
            >
              <option aria-label="None" value="" />
              <option value={'buddhism'}>{t('bd')}</option>
              <option value={'christianity'}>{t('cs')}</option>
              <option value={'islam'}>{t('il')}</option>
              <option value={'hinduism'}>{t('hs')}</option>
              <option value={'sikhism'}>{t('sk')}</option>
              <option value={'other'}>{t('ot')}</option>
              <option value={'rns'}>{t('rns')}</option>
            </Select>
          </FormControl>
        </div>

        <div className={classes.inside}>
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('tel')}</FormLabel>
            <TextField
              name="tel"
              id="tel"
              // className={classes.inputbox}
              size="small"
              value={formik.values.tel}
              onChange={formik.handleChange}
              error={formik.touched.tel && Boolean(formik.errors.tel)}
              helperText={formik.touched.tel && formik.errors.tel}
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Facebook</FormLabel>
            <TextField
              name="facebook"
              id="facebook"
              // className={classes.inputbox}
              size="small"
              value={formik.values.facebook}
              onChange={formik.handleChange}
              error={formik.touched.facebook && Boolean(formik.errors.facebook)}
              helperText={formik.touched.facebook && formik.errors.facebook}
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>LINE ID</FormLabel>
            <TextField
              name="lineID"
              id="lineID"
              // className={classes.inputbox}
              size="small"
              value={formik.values.lineID}
              onChange={formik.handleChange}
              error={formik.touched.lineID && Boolean(formik.errors.lineID)}
              helperText={formik.touched.lineID && formik.errors.lineID}
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('emergencyTel')}</FormLabel>
            <TextField
              name="emergencyTel"
              id="emergencyTel"
              // className={classes.inputbox}
              size="small"
              value={formik.values.emergencyTel}
              onChange={formik.handleChange}
              error={
                formik.touched.emergencyTel &&
                Boolean(formik.errors.emergencyTel)
              }
              helperText={
                formik.touched.emergencyTel && formik.errors.emergencyTel
              }
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>
              {t('emergencyConnection')}
            </FormLabel>
            <TextField
              name="emergencyConnection"
              id="emergencyConnection"
              // className={classes.inputbox}
              size="small"
              value={formik.values.emergencyConnection}
              onChange={formik.handleChange}
              error={
                formik.touched.emergencyConnection &&
                Boolean(formik.errors.emergencyConnection)
              }
              helperText={
                formik.touched.emergencyConnection &&
                formik.errors.emergencyConnection
              }
              variant="outlined"
            />
          </FormControl>
        </div>

        <div className={classes.inside}>
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('disease')}</FormLabel>
            <TextField
              name="disease"
              id="disease"
              // className={classes.inputbox}
              size="small"
              value={formik.values.disease}
              onChange={formik.handleChange}
              error={formik.touched.disease && Boolean(formik.errors.disease)}
              helperText={formik.touched.disease && formik.errors.disease}
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>
              {t('allergyMedicine')}
            </FormLabel>
            <TextField
              name="allergyMedicine"
              id="allergyMedicine"
              // className={classes.inputbox}
              size="small"
              value={formik.values.allergyMedicine}
              onChange={formik.handleChange}
              error={
                formik.touched.allergyMedicine &&
                Boolean(formik.errors.allergyMedicine)
              }
              helperText={
                formik.touched.allergyMedicine && formik.errors.allergyMedicine
              }
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('usedMedicine')}</FormLabel>
            <TextField
              name="usedMedicine"
              id="usedMedicine"
              // className={classes.inputbox}
              size="small"
              value={formik.values.usedMedicine}
              onChange={formik.handleChange}
              error={
                formik.touched.usedMedicine &&
                Boolean(formik.errors.usedMedicine)
              }
              helperText={
                formik.touched.usedMedicine && formik.errors.usedMedicine
              }
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('disability')}</FormLabel>
            <TextField
              name="disability"
              id="disability"
              // className={classes.inputbox}
              size="small"
              value={formik.values.disability}
              onChange={formik.handleChange}
              error={
                formik.touched.disability && Boolean(formik.errors.disability)
              }
              helperText={
                formik.touched.disability && formik.errors.foodRestriction
              }
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>
              {t('foodRestriction')}
            </FormLabel>
            <TextField
              name="foodRestriction"
              id="foodRestriction"
              // className={classes.inputbox}
              size="small"
              value={formik.values.foodRestriction}
              onChange={formik.handleChange}
              error={
                formik.touched.foodRestriction &&
                Boolean(formik.errors.foodRestriction)
              }
              helperText={
                formik.touched.foodRestriction && formik.errors.foodRestriction
              }
              variant="outlined"
            />
          </FormControl>
        </div>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default FormInput
