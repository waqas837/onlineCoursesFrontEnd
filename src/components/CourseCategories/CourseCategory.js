import React from "react";
import { useStyles2 } from "../Navbar/Main.Styles";
import { Grid, Box, Typography, Divider, Container, Hidden } from "@material-ui/core";
import image from "../../images/download.jpg";
import image2 from "../../images/img2.jpg";
import image3 from "../../images/img3.jpg";
import image4 from "../../images/img4.jpg";
import image5 from "../../images/imge1.jpg";
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
      {/* caresoule for large screens*/}
    <Hidden only={['xs','sm']}>
    <Box mb={5}>
        <Carousel
          navButtonsAlwaysVisible
          autoPlay={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={0}
          centerMode
          centerSlidePercentage={30}
           
        >
          <div style={{ padding: "10px" }}>
            <img src={image} alt="" width="100px" height="200px"/>
          </div>

          <div style={{ padding: "10px" }}>
            <img src={image2} alt="" width="100px" height="200px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img src={image3} alt="" width="100px" height="200px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img src={image4} alt="" width="100px" height="200px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img src={image5} alt="" width="100px" height="200px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img src={image3} alt="" width="100px" height="200px" />
          </div>
        </Carousel>
      </Box>
    </Hidden>
      {/*carosoul for the mobile showing */}
      <Hidden only={['xl','lg','md']}>
         {/* for the mobile showing */}
      <Box mb={5}>
        <Carousel
          navButtonsAlwaysVisible
          autoPlay={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={0}
          centerMode
          // centerSlidePercentage={30}
           
        >
          <div style={{ padding: "10px" }}>
            <img src={image} alt="" width="100%" height="300px"/>
          </div>

          <div style={{ padding: "10px" }}>
            <img src={image2} alt="" width="100%" height="300px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img src={image3} alt="" width="100%" height="300px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img src={image4} alt="" width="100%" height="300px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img src={image5} alt="" width="100%" height="300px" />
          </div>
          <div style={{ padding: "10px" }}>
            <img src={image3} alt="" width="100%" height="300px" />
          </div>
        </Carousel>
      </Box>
      </Hidden>
    </div>
  );
};

export default CourseCategory;
