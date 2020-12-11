import React from "react";
import "./Form.css";
import Button from "@material-ui/core/Button";
import Photo from "./Image";
import FormInput from "./FormInput";

import { useTranslation } from 'react-i18next'

import { Box } from '@material-ui/core'

function Form() {
  const { t } = useTranslation('form')
  return (
    <div className="Form">
      <p>{t("title")}</p>
      <Photo />
      <FormInput />
      <p>{t("submitNote")}</p>
    </div>
  );
      <Button>{t("submit")}</Button>
}

export default Form
