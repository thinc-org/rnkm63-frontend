import React from "react";
import "./Login.css";

import { useTranslation } from "react-i18next";

function LoginLocaleHOC() {
  return (
    <React.Suspense fallback="loading">
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
