import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const indexStyle = makeStyles((theme: any) => ({
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

export const imageStyle = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      display: "none",
    },
    button: {
      backgroundColor: "#1D324D",
      border: "1px solid #C6C6C6",
      borderRadius: "20.2141px",
      margin: "auto",
      width: "150px",
      "&:hover": {
        backgroundColor: "#1D324D",
      },
    },
    submitButton: {
      margin: theme.spacing(2),
    },
    image: {
      borderRadius: "30px",
      borderColor: "red",
      borderWidth: "5px",
      width: "150px",
      height: "200px",
      backgroundColor: "#C4C4C4",
      marginBottom: "15px",
    },
    reasonText: {
      color: "#EB5757",
    },
    closeButton: {
      margin: 0,
      padding: theme.spacing(2),
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  })
);
