import React from "react";
import {
  Box,
  Button,
  OutlinedInput,
  Grid,
  Paper,
  Typography,
  Container,makeStyles
} from "@material-ui/core";
import image from "../../../images/download.jpg";
import { grey } from "@material-ui/core/colors";
var Maingrey = grey[400];
var MainSecondary = "rgb(233,30,99)";
const useStyles = makeStyles((theme) => ({
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
const TeacherForm = () => {
  const classes = useStyles();
  return (
    <div>
      <Box mt={7}>
        {/* main line*/}
       
          {/* first section for form */}
          <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
            {/* headings */}
            <Box style={{ background: "rgb(158,7,105)" }} pb={9}>
              {/* becocome a teacher */}
              <Box py={2} textAlign="center">
                <Typography variant="h4" className={classes.text}>
                  Become a Teacher
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="subtitle2" className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus, quaerat beatae nulla debitis vitae.
                </Typography>
              </Box>
              {/* form */}
              <Box textAlign="center">
                <Container maxWidth="xs">
                  <Paper className={classes.paper} component={Box} py={3} elevation={10}>
                    <Box my={1}>
                      <OutlinedInput placeholder="Your Name" className={classes.input} />
                    </Box>
                    <Box my={1}>
                      <OutlinedInput placeholder="Email" className={classes.input} />
                    </Box>
                    <Box my={1}>
                      <OutlinedInput placeholder="Phone" className={classes.input} />
                    </Box>
                    <Box textAlign="center" my={2}>
                      <Button
                        className={classes.buttonStyle}
                        color="secondary"
                        style={{ boxShadow: "none" }}
                        variant="contained"
                        size="large"
                      >
                        Send Request
                      </Button>
                    </Box>
                  </Paper>
                </Container>
              </Box>
            </Box>
          </Grid>

          {/* second section for image */}
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <img
              style={{ objectFit: "cover" }}
              width="100%"
              height="500px"
              src={image}
              alt=""
            />
          </Grid>
          </Grid>
      </Box>
    </div>
  );
};

export default TeacherForm;
