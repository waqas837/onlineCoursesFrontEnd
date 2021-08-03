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
    fontStyle: "italic",
    fontSize: "12px",
  },
  searchIcon: { cursor: "pointer" },
  allCoureHeading: { fontWeight: "bolder" },
  
  about: {
    verticalAlign: "middle",
    display: "inline-flex",
    fontWeight: "bolder",
    color: "white",
  },
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
  },
  pointer: {
    cursor: "pointer",
  },
  ourTeam:{
    background: grey[200],
  }
}));
export { useStyles };
