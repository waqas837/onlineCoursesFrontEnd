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
}));
export { useStyles };
