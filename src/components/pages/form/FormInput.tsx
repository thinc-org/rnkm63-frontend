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

const RegisterSchema = Yup.object().shape({
  firstname: Yup.string().required('This field is required.'),
  nametitle: Yup.string().required('This field is required.'),
  lastname: Yup.string().required('This field is required.'),
  nickname: Yup.string().required('This field is required.'),
  religion: Yup.string().required('This field is required.'),
  tel: Yup.number()
    .required('This field is required.')
    .min(9, 'This field is required.'),
  fb: Yup.string().required('This field is required.'),
  lineid: Yup.string().required('This field is required.'),
  emertel: Yup.number()
    .required('This field is required.')
    .min(9, 'This field is required.'),
  relation: Yup.string().required('This field is required.'),
})

function FormInput(props: any) {
  const classes = useStyles()
  const { t, i18n } = useTranslation('form')
  const style = indexStyle({ lang: i18n.language })
  const formik = useFormik({
    initialValues: {
      nametitle: '',
      firstname: '',
      lastname: '',
      nickname: '',
      religion: '',
      tel: '',
      fb: '',
      lineid: '',
      emertel: '',
      relation: '',
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
            <FormLabel className={classes.label}>{t('nametitle')}</FormLabel>
            <Select
              native
              className={classes.selectbox}
              //size="small"
              name="nametitle"
              value={formik.values.nametitle}
              error={
                formik.touched.nametitle && Boolean(formik.errors.nametitle)
              }
              variant="outlined"
              onChange={formik.handleChange}
            >
              {/* helperText={formik.touched.nametitle && formik.errors.nametitle} */}
              <option aria-label="None" value="" />
              <option value={'Mr.'}>{t('mr')}</option>
              <option value={'Ms.'}>{t('ms')}</option>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('firstname')}</FormLabel>
            <TextField
              name="firstname"
              id="firstname"
              // className={classes.inputbox}
              size="small"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('lastname')}</FormLabel>
            <TextField
              name="lastname"
              id="lastname"
              // className={classes.inputbox}
              size="small"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.firstname && formik.errors.firstname}
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
              name="fb"
              id="fb"
              // className={classes.inputbox}
              size="small"
              value={formik.values.fb}
              onChange={formik.handleChange}
              error={formik.touched.fb && Boolean(formik.errors.fb)}
              helperText={formik.touched.fb && formik.errors.fb}
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>LINE ID</FormLabel>
            <TextField
              name="lineid"
              id="lineid"
              // className={classes.inputbox}
              size="small"
              value={formik.values.lineid}
              onChange={formik.handleChange}
              error={formik.touched.lineid && Boolean(formik.errors.lineid)}
              helperText={formik.touched.lineid && formik.errors.lineid}
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('emertel')}</FormLabel>
            <TextField
              name="emertel"
              id="emertel"
              // className={classes.inputbox}
              size="small"
              value={formik.values.emertel}
              onChange={formik.handleChange}
              error={formik.touched.emertel && Boolean(formik.errors.emertel)}
              helperText={formik.touched.emertel && formik.errors.emertel}
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>{t('relation')}</FormLabel>
            <TextField
              name="relation"
              id="relation"
              // className={classes.inputbox}
              size="small"
              value={formik.values.relation}
              onChange={formik.handleChange}
              error={formik.touched.relation && Boolean(formik.errors.relation)}
              helperText={formik.touched.relation && formik.errors.relation}
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
