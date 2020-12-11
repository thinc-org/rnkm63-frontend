import React from "react";
import "./Form.css";

import { useTranslation } from "react-i18next";
import { Loading } from "../../common";

function FormSuspenseHOC() {
  return (
    <React.Suspense fallback={Loading}>
      <Form />
    </React.Suspense>
  );
}

function Form() {
  const { t } = useTranslation("form");
  return (
    <div className="Form">
      <h1>{t("title")}</h1>
    </div>
  );
}

export default FormSuspenseHOC;
