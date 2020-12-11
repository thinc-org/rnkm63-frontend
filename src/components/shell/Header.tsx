import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "../common";
import LanguageSwitcher from "./misc/LanguageSwitcher";
import THINCLogo from "../../local/thincLogo.png";
import { UserContext } from "../../contexts/UserContext";
import { withSuspense } from '../hoc'

const useStyles = makeStyles({
  header: {
    marginTop: "20px",
  },
  thincLogo: {},
});
function Header() {
  const classes = useStyles();
  const user = React.useContext(UserContext)[0];
  return (
    <Box className={classes.header}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <img src={THINCLogo} alt="" className={classes.thincLogo} />
        <Box flexDirection="row" justifyContent="flex-start">
          <LanguageSwitcher />
          <LogOutButton />
        </Box>
      </Box>
    </Box>
  )
}

export default withSuspense(Header)
