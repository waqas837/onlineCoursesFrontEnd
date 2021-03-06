import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  icons: {
    verticalAlign: "middle",
    display: "inline-flex",
  },
  imageText: {
    verticalAlign: "middle",
    display: "inline-flex",
  },
  paper: {
    borderRadius: "0px",
    padding: "20px",
  },
  instructorLinks: {
    "&:hover": {
      background: "rgb(245,0,87)",
      color: "white",
    },
  },
  showOrHideCourse: {
    "&:hover": {
      background: grey[100],
    },
  },
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
  perviewCourse:{
    verticalAlign: "middle",
    display: "inline-flex",
    fontWeight: "bolder",
    color: "white",
  }
}));
export { useStyles };
