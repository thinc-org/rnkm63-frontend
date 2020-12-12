import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: any) => ({
  uploadButton: {
    background: "#1E334E",
    borderRadius: "40px",
    border: "1px solid white",
    display: "block",
    margin: "auto",
    width: "150px",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#1E334E",
    },
  },
  profile: {
    borderRadius: "24px",
    width: "150px",
    height: "200px",
    display: "block",
    margin: "auto",
  },
}));

function Image(props: any) {
  const style = useStyles();
  const { t, i18n } = useTranslation("form");
  return (
    <>
      <img src={props.imageUrl} className={style.profile}></img>
      <Button
        classes={{ root: style.uploadButton }}
        onClick={() => {
          props.setImageUrl(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67bSTxtH-CSWBiue6E2p865Qh1HGpJ8blVw&usqp=CAU"
          );
        }}
      >
        {t("upload")}
      </Button>
    </>
  );
}

export default Image;
