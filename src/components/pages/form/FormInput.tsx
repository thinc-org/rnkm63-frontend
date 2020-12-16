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
              name="prefix"
              options={FORM_PREFIX_FIELD_OPTIONS}
            />
          </Grid>
        ) : null}

        <Grid item xs={12} sm={4}>
          <FormTextField name="realname" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextField name="surname" />
        </Grid>

        <Grid item xs={6}>
          <FormTextField name="nickname" />
        </Grid>

        <Grid item xs={6}>
          <FormSelectField
            name="religion"
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
          <FormTextField name="tel" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextField name="facebook" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextField name="lineID" />
        </Grid>
        <Grid item xs={6}>
          <FormTextField name="emergencyTel" />
        </Grid>
        <Grid item xs={6}>
          <FormTextField name="emergencyConnection" />
        </Grid>
      </Grid>
      <Grid container className={classes.inside}>
        <Grid item xs={12} sm={6}>
          <FormTextField name="disease" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextField name="allergyMedicine" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextField name="usedMedicine" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextField name="disability" />
        </Grid>
        <Grid item xs={12}>
          <FormTextField name="foodRestriction" />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default FormInput
