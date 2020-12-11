import React from "react";
import "./Profile.css";

import { useTranslation } from "react-i18next";

function ProfileLocaleHOC() {
  return (
    <React.Suspense fallback="loading">
      <Profile />
    </React.Suspense>
  );
}

function Profile() {
  const { t, i18n } = useTranslation("profile");
  return (
    <div className="Profile">
      <h1>{t("someSampleText")}</h1>
    </div>
  );
}

export default ProfileLocaleHOC;
