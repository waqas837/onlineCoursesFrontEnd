import { makeStyles } from "@material-ui/core";
const useStyels = makeStyles((theme) => ({
  heading1: {
    color: "white",
    position: "relative",
    top: "310px",
    left: "-100px",
    [theme.breakpoints.down("sm")]: {
      color: "white",
      position: "relative",
      top: "290px",
      left: "-70px",
    },
  },
  heading2: {
    color: "white",
    position: "relative",
    top: "300px",
    left: "-40px",
    fontWeight: "bolder",
    [theme.breakpoints.down("sm")]: {
      color: "white",
      position: "relative",
      top: "280px",
      left: "-40px",
      fontWeight: "bolder",
    },
  },
}));
export { useStyels };
