import React from "react";
import "./NotFound.css";

import { useTranslation } from "react-i18next";
import { Loading } from "../../common";

function NotFoundLocaleHOC() {
  return (
    <React.Suspense fallback={Loading}>
      <NotFound />
    </React.Suspense>
  );
}

function NotFound() {
  const { t, i18n } = useTranslation("notfound");
  return (
    <div className="NotFound">
      <h1>{t("title")}</h1>
    </div>
  );
}

export default NotFoundLocaleHOC;
