import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
var MainSecondary = "rgb(233,30,99)";
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
    borderRadius: "0px",
  },
  searchIcon: { cursor: "pointer" },
  allCoureHeading: { fontWeight: "bolder" },

  about: {
    verticalAlign: "middle",
    display: "inline-flex",
    fontWeight: "bolder",
    color: "white",
  },
  customWidthInput:{
    marginBottom:"20px",
    height:"34px",
    width:"100%",
    borderRadius:"0px",
    [theme.breakpoints.down("sm")]:{
      marginBottom:"15px",
      width:"100%"
    }
  },
  makeItResponsive:{
    [theme.breakpoints.down("sm")]:{
      marginBottom:"-10px",
      
    }
  }
}));
export { useStyles };
