import { makeStyles } from "@material-ui/core";
const useStyels = makeStyles((theme) => ({
  paper: {
    color: "white",
    padding:"20px",
    background:"rgb(233,30,99)",
    borderRadius:"0px",
    position: "relative",
    top: "-10px",
    left: "-30px",
    width:"260px",
    
    [theme.breakpoints.down("sm")]: {
      color: "white",
      background:"rgb(233,30,99)",
      borderRadius:"0px",
      position: "relative",
      top: "-40px",
      left: "-10px",
      width:"250px",
   
    },
    
  },
  button:{
    borderRadius:"50px",
    borderColor:"white",
    color:"white"
  },
   
}));
export { useStyels };
