import React from "react";
import { useState } from "react";
import { Button, Container, makeStyles } from "@material-ui/core";
import Image from "./Image";
import FormInput from "./FormInput";
import { indexStyle } from "./style/styles";
import { useTranslation } from "react-i18next";

import { Box } from '@material-ui/core'

function Form() {
  const [imageUrl, setImageUrl] = useState(
    "https://media.discordapp.net/attachments/780977351428931594/784451408275046460/ElL3lTKVkAA2CmN.png"
  );
  const [userData, setUserData] = useState({
    name: "Genshin",
    surname: "Impact",
  });
  const style = indexStyle();
  const { t, i18n } = useTranslation("form");

  return (
    <Container maxWidth="lg" classes={{ root: style.container }}>
      <p>{t("title")}</p>
      <div className={style.content}>
        <div>
          <Image imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </div>
        <div className={style.formInput}>
          <FormInput userData={userData} setUserData={setUserData} />
        </div>
      </div>
      <div>
        <Button
          classes={{ root: style.submitButton }}
          onClick={() => submit(imageUrl, userData)}
        >
          {t("submit")}
        </Button>
        <p className={style.submitNote}>{t("submitNote")}</p>
      </div>
    </Container>
  );
      <Button>{t("submit")}</Button>
}

const submit = (imageUrl: any, userData: any) => {
  alert(imageUrl + "\n" + JSON.stringify(userData));
};
export default Form
