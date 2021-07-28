import React from "react";
import { useStyles2 } from "../../Styles/Main.Styles";
import { Grid, Box, Typography, Divider, Container } from "@material-ui/core";
import image from "../../images/download.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const CourseCategory = () => {
  const classes = useStyles2();
  return (
    <div>
      {/* headings */}
      <Box mt={5} textAlign="center">
        <Typography style={{ fontWeight: "bolder" }} variant="body2">
          WELECOME TO REPTRO UNIVERSITY.
        </Typography>
        <Typography style={{ fontWeight: "bolder" }} variant="h4">
          Course Categories
        </Typography>
      </Box>
      <Box textAlign="center" mb={4}>
        <Divider
          style={{
            backgroundColor: "rgb(233,30,99)",
            width: "10%",
            height: "3px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />
      </Box>
      {/* caresoule */}
      <Box my={3}>
      <Box mb={3}>
          <Carousel
           navButtonsAlwaysVisible
           autoPlay={false}
           showThumbs={false}
           showStatus={0}
           centerMode
           centerSlidePercentage={50}
           >
  <div style={{padding:"10px"}}>
    <img src={image} alt="" width="100px" height="200px"/>
    <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  
  <div style={{padding:"10px"}}>
    <img src={image} alt="" width="100px" height="200px"/>
     <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={image} alt="" width="100px" height="200px"/>
     <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={image} alt="" width="100px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={image} alt="" width="100px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={image} alt="" width="100px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>

           </Carousel>
          </Box>
      </Box>
    </div>
  );
};

export default CourseCategory;
