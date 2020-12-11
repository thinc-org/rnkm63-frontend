import React from "react";
import "./Profile.css";

import { useTranslation } from "react-i18next";
import { Loading } from "../../common";

function ProfileSuspenseHOC() {
  return (
    <React.Suspense fallback={Loading}>
      <Profile />
    </React.Suspense>
  );
}

function Profile() {
  const { t } = useTranslation("profile");
  return (
    <div className="Profile">
      <h1>{t("someSampleText")}</h1>
    </div>
  );
}

export default ProfileSuspenseHOC;
