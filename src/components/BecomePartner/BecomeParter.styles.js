import { makeStyles } from "@material-ui/core";
const useStyels = makeStyles((theme) => ({
  paper: {
    color: "white",
    padding:"20px",
    background:"rgb(233,30,99)",
    borderRadius:"0px",
    position: "relative",
    top: "100px",
    left: "-30px",
    width:"260px",
    marginLeft:"100px",
    [theme.breakpoints.down("sm")]: {
      color: "white",
      background:"rgb(233,30,99)",
      borderRadius:"0px",
      position: "absolute",
       width:"250px",
     
    },
  },
  button:{
    borderRadius:"50px",
    borderColor:"white",
    color:"white",

  },
   
}));
export { useStyels };
