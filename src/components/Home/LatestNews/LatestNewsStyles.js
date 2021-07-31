import { makeStyles } from "@material-ui/core";
const useStyels = makeStyles((theme) => ({
  heading1: {
    color: "white",
    position: "relative",
    top: "310px",
    left: "-120px",
    [theme.breakpoints.down("sm")]: {
      color: "white",
      position: "relative",
      top: "310px",
      left: "-180px",
    },
  },
  heading2: {
    color: "white",
    position: "relative",
    top: "300px",
    left: "-60px",
    fontWeight: "bolder",
    [theme.breakpoints.down("sm")]: {
      color: "white",
      position: "relative",
      top: "300px",
      left: "-120px",
      fontWeight: "bolder",
    },
  },
}));
export { useStyels };
