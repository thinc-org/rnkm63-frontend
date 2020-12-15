import React from 'react'
import Link from '@material-ui/core/Link'
import theme from '../../../config/theme'
import {
  FORM_PREFIX_FIELD_OPTIONS,
  FORM_RELIGION_FIELD_OPTIONS,
} from './utils/optionConstant'
import { formStyle } from './style'
import { Box, Typography } from '@material-ui/core'
import { FormSelectField, FormTextField } from './utils/formComponent'

function FormInput(props: any) {
  const classes = formStyle()
  const formik = props.formik

  return (
    <React.Fragment>
      <Typography
        style={{
          color: '#FABD03',
          margin: theme.spacing(2),
          marginTop: '0rem',
          marginBottom: '0rem',
          fontSize: '1.25rem',
        }}
      >
        *Do not leave any fields blank. (“-” if empty)
      </Typography>
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
        <Typography
          style={{
            color: '#FABD03',
            margin: theme.spacing(2),
            marginTop: '0rem',
            marginBottom: '0rem',
            fontSize: '0.75rem',
          }}
        >
          Note: If you don’t have Thai nickname, please contact{' '}
          <Link
            href="https://www.facebook.com/chulafreshmen"
            style={{
              color: '#97c0f3',
            }}
          >
            CU for Freshman
          </Link>
        </Typography>
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
    </React.Fragment>
  )
}

export default FormInput
