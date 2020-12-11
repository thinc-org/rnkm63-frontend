import React from "react";
import "./Form.css";

import { useTranslation } from "react-i18next";

function FormLocaleHOC() {
  return (
    <React.Suspense fallback="loading">
      <Form />
    </React.Suspense>
  );
}

function Form() {
  const { t, i18n } = useTranslation("form");
  return (
    <div className="Form">
      <h1>{t("title")}</h1>
    </div>
  );
}

export default FormLocaleHOC;
