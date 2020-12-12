import React from "react";
import { useState } from "react";
import { Button, Container, makeStyles } from "@material-ui/core";
import Image from "./Image";
import FormInput from "./FormInput";
import { useTranslation } from "react-i18next";

import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme: any) => ({
  submitButton: {
    background: "#44AD53",
    borderRadius: "40px",
    width: "100%",
    maxWidth: "434px",
    display: "block",
    margin: "auto",
    "&:hover": {
      backgroundColor: "#44AD53",
    },
  },
  formInput: {
    background: "#5c5c5c",
    [theme.breakpoints.up("sm")]: {
      display: "inline",
      marginLeft: "20px",
      flexGrow: 1,
    },
  },
  content: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  submitNote: {
    display: "block",
    textAlign: "center",
    margin: "0px",
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "50px",
      paddingRight: "50px",
    },
    background: "#929292",
  },
}));

function Form() {
  const [imageUrl, setImageUrl] = useState(
    "https://media.discordapp.net/attachments/780977351428931594/784451408275046460/ElL3lTKVkAA2CmN.png"
  );
  const [userData, setUserData] = useState({
    name: "Genshin",
    surname: "Impact",
  });
  const style = useStyles();
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
