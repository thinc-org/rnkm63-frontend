import React from "react";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { t, i18n } = useTranslation("shell");
  const switchLng = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("th");
    } else {
      i18n.changeLanguage("en");
    }
  };
  return (
    <Button onClick={switchLng} variant="contained" color="primary">
      {t("switchLanguage")}
    </Button>
  );
}

export default LanguageSwitcher;
