import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";
var Maingrey = grey[400];
var MainSecondary = "rgb(233,30,99)";
const useStyles2 = makeStyles((theme) => ({
  buttonStyle: {
    background: MainSecondary,
    color: "white",
    borderRadius:"50px",
    fontSize:"12px",
    paddingLeft:"12px",
    paddingRight:"12px",
    fontWeight:"bolder",
    
  },
  buttonStyleOutlined: {
    border:`2px solid ${MainSecondary}`,
    borderRadius:"50px",
    fontSize:"12px",
    paddingLeft:"12px",
    paddingRight:"12px",
    fontWeight:"bolder",
    marginLeft:"5px",
    '&:hover':{
      border:`2px solid ${MainSecondary}`,
      borderRadius:"50px",
      fontSize:"12px",
      paddingLeft:"12px",
      paddingRight:"12px",
      fontWeight:"bolder",
    }
  },
  
  resposiveFromSide:{
     [theme.breakpoints.down('sm')]:{
         marginLeft:"50px"
     }
  },
  input:{
    height:"40px",
    borderRadius:"0px",
    marginBottom:"10px",
    fontWeight:"bolder"
  },
  formControl: {
    minWidth: 160,
  },
  formControl2: {
    minWidth: 160,
    marginTop:"-15px"
  },
  card:{
    width:"230px",
    [theme.breakpoints.down('sm')]:{
      marginLeft:"-70px"
    }
  },
  text:{
    fontWeight:"bolder",
    color:"white",
  },
  paper:{
    borderRadius:"0px",
    marginTop:"20px"
  }
}));

export { Maingrey, MainSecondary, useStyles2 };
