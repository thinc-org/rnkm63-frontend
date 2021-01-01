import { Grid, Typography } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { formStyle } from '../style'
import {
  FORM_PREFIX_FIELD_OPTIONS,
  FORM_RELIGION_FIELD_OPTIONS,
} from '../utils/registerSchema'
import { FormSelectField, FormTextField } from './formComponent'

const FormInput = React.memo(function FormInput() {
  const classes = formStyle()
  const { t } = useTranslation('form')

  return (
    <React.Fragment>
      <Typography className={classes.requireNote}>
        {t('requireNote')}
      </Typography>
      <Grid container className={classes.inside}>
        <Grid item xs={12} sm={2}>
          <FormSelectField
            name="prefixname"
            options={FORM_PREFIX_FIELD_OPTIONS}
          />
        </Grid>

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
        <Typography className={classes.nicknameNote}>
          {t('nicknameNote')}
          <Link
            href="https://www.facebook.com/chulafreshmen"
            target="_blank"
            className={classes.link}
          >
            CU for Freshmen
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
          <FormTextField name="emergencyTelRelationship" />
        </Grid>
      </Grid>
      <Grid container className={classes.inside}>
        <Grid item xs={12} sm={6}>
          <FormTextField name="disease" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextField name="allergy" />
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
        <Grid item xs={12} sm={6}>
          <FormTextField name="foodRestriction" />
        </Grid>
      </Grid>
    </React.Fragment>
  )
})

export default FormInput
