import React from 'react'
import Link from '@material-ui/core/Link'
import theme from '../../../config/theme'
import {
  FORM_PREFIX_FIELD_OPTIONS,
  FORM_RELIGION_FIELD_OPTIONS,
} from './utils/optionConstant'
import { formStyle } from './style'
import { Grid, Typography } from '@material-ui/core'
import { FormSelectField, FormTextField } from './utils/formComponent'
import { useTranslation } from 'react-i18next'

function FormInput(props: any) {
  const classes = formStyle()
  const formik = props.formik
  const { t } = useTranslation('form')

  return (
    <React.Fragment>
      <Typography
        style={{
          color: theme.palette.warning.main,
          margin: theme.spacing(0.5),
          fontSize: '1.25rem',
        }}
      >
        {t('requireNote')}
      </Typography>
      <Grid container className={classes.inside}>
        {theme.breakpoints.up('sm') ? (
          <Grid item sm={2}>
            <FormSelectField
              id="prefix"
              name="prefix"
              value={formik.values.prefix}
              handleChange={formik.handleChange}
              error={formik.errors.prefix}
              touched={formik.touched.prefix}
              options={FORM_PREFIX_FIELD_OPTIONS}
            />
          </Grid>
        ) : null}

        <Grid item xs={12} sm={4}>
          <FormTextField
            id="realname"
            name="realname"
            value={formik.values.realname}
            handleChange={formik.handleChange}
            error={formik.errors.realname}
            touched={formik.touched.realname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextField
            id="surname"
            name="surname"
            value={formik.values.surname}
            handleChange={formik.handleChange}
            error={formik.errors.surname}
            touched={formik.touched.surname}
          />
        </Grid>

        <Grid item xs={6}>
          <FormTextField
            id="nickname"
            name="nickname"
            value={formik.values.nickname}
            handleChange={formik.handleChange}
            error={formik.errors.nickname}
            touched={formik.touched.nickname}
          />
        </Grid>

        <Grid item xs={6}>
          <FormSelectField
            id="religion"
            name="religion"
            value={formik.values.religion}
            handleChange={formik.handleChange}
            error={formik.errors.religion}
            touched={formik.touched.religion}
            options={FORM_RELIGION_FIELD_OPTIONS}
          />
        </Grid>
        <Typography
          style={{
            color: theme.palette.warning.main,
            margin: theme.spacing(0.5),
            fontSize: '0.75rem',
          }}
        >
          {t('nicknameNote')}
          <Link
            href="https://www.facebook.com/chulafreshmen"
            style={{
              color: '#97c0f3',
            }}
          >
            CU for Freshman
          </Link>
        </Typography>
      </Grid>

      <Grid container className={classes.inside}>
        <Grid item xs={12}>
          <FormTextField
            id="tel"
            name="tel"
            value={formik.values.tel}
            handleChange={formik.handleChange}
            error={formik.errors.tel}
            touched={formik.touched.tel}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextField
            id="facebook"
            name="facebook"
            value={formik.values.facebook}
            handleChange={formik.handleChange}
            error={formik.errors.facebook}
            touched={formik.touched.facebook}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextField
            id="lineID"
            name="lineID"
            value={formik.values.lineID}
            handleChange={formik.handleChange}
            error={formik.errors.lineID}
            touched={formik.touched.lineID}
          />
        </Grid>
        <Grid item xs={6}>
          <FormTextField
            id="emergencyTel"
            name="emergencyTel"
            value={formik.values.emergencyTel}
            handleChange={formik.handleChange}
            error={formik.errors.emergencyTel}
            touched={formik.touched.emergencyTel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormTextField
            id="emergencyConnection"
            name="emergencyConnection"
            value={formik.values.emergencyConnection}
            handleChange={formik.handleChange}
            error={formik.errors.emergencyConnection}
            touched={formik.touched.emergencyConnection}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.inside}>
        <Grid item xs={12} sm={6}>
          <FormTextField
            id="disease"
            name="disease"
            value={formik.values.disease}
            handleChange={formik.handleChange}
            error={formik.errors.disease}
            touched={formik.touched.disease}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextField
            id="allergyMedicine"
            name="allergyMedicine"
            value={formik.values.allergyMedicine}
            handleChange={formik.handleChange}
            error={formik.errors.allergyMedicine}
            touched={formik.touched.allergyMedicine}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextField
            id="usedMedicine"
            name="usedMedicine"
            value={formik.values.usedMedicine}
            handleChange={formik.handleChange}
            error={formik.errors.usedMedicine}
            touched={formik.touched.usedMedicine}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextField
            id="disability"
            name="disability"
            value={formik.values.disability}
            handleChange={formik.handleChange}
            error={formik.errors.disability}
            touched={formik.touched.disability}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextField
            id="foodRestriction"
            name="foodRestriction"
            value={formik.values.foodRestriction}
            handleChange={formik.handleChange}
            error={formik.errors.foodRestriction}
            touched={formik.touched.foodRestriction}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default FormInput
