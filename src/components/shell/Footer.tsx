import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import SGCUIcon from "../../local/sgcuIcon.png";
import THINCIcon from "../../local/thincIcon.png";
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  footer: {
    backgroundColor: "black",
  },
  sgcuIcon: {
    width: "25.63px",
    height: "45px",
  },
  thincIcon: {
    marginLeft: "12.37px",
    width: "99.09px",
    height: "40px",
  },
  footerFont: {
    color: "#8D8D8D",
    textAlign: "center",
    fontSize: "10px",
    marginBottom: "9px",
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Box display="flex" flexDirection="column" marginTop="15px">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          marginBottom="6px"
        >
          <img src={SGCUIcon} alt="" className={classes.sgcuIcon} />
          <img src={THINCIcon} alt="" className={classes.thincIcon} />
        </Box>
        <Typography variant="body1" className={classes.footerFont}>
          งานรับน้องก้าวใหม่ ปีการศึกษา 2563
          องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย สงวนลิขสิทธิ์ © 2563
          Thinc.
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
