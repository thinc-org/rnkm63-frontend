import React from "react";
import "./Login.css";

import { useTranslation } from "react-i18next";
import { Loading } from "../../common";

function LoginLocaleHOC() {
  return (
    <React.Suspense fallback={Loading}>
      <Login />
    </React.Suspense>
  );
}

function Login() {
  const { t, i18n } = useTranslation("login");
  return (
    <div className="Login">
      <h1>{t("title")}</h1>
    </div>
  );
}

export default LoginLocaleHOC;
