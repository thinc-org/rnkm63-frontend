import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "../common";
import LanguageSwitcher from "./misc/LanguageSwitcher";
import LogOutButton from "./misc/LogOutButton";
import THINCLogo from "../../local/thincLogo.png";
import { UserContext } from "../../contexts/UserContext";

function HeaderSuspenseHOC() {
  return (
    <React.Suspense fallback={Loading}>
      <Header />
    </React.Suspense>
  )
}
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
    <div className={classes.header}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <img src={THINCLogo} alt="" className={classes.thincLogo} />
        <Box flexDirection="row" justifyContent="flex-start">
          <LanguageSwitcher />
          <LogOutButton />
        </Box>
      </Box>
    </div>
  )
}

export default withSuspense(Header)
