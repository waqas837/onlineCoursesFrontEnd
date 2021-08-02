import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.down("sm")]: {
      height: "100px",
      fontSize: "85px",
    },
  },
  home: {
    verticalAlign: "middle",
    display: "inline-flex",
    fontWeight: "bolder",
    color: "white",
    "&:hover": {
      color: "red",
      cursor: "pointer",
      "& #icon": {
        color: "white",
      },
    },
  },
  allCourses: {
    color: "white",
    fontWeight: "bolder",
    display: "inline",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  outlinedInput: {
    height: "34px",
    fontStyle: "italic",
    fontSize: "12px",
  },
  searchIcon: { cursor: "pointer" },
  allCoureHeading: { fontWeight: "bolder" },
  appIcon: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));
export { useStyles };
