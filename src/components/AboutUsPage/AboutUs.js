import React from "react";
import { useStyles } from "./AboutUs.styles";
import dummyimg from "../../images/img4.jpg";
import manbag from "../../images/manbag.jpg";
import sushi from "../../images/sushi.png";
import bell from "../../images/BELL.png";
import handcr from "../../images/handcr.png";
import ns from "../../images/NS.png";
import travel from "../../images/taravel.png";
import urban from "../../images/urban.png";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ArrowRight } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import "./About.css";
const AboutUs = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <CssBaseline />
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${dummyimg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "200px",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
        }}
      >
        <Box pt={9} textAlign="center">
          <Typography
            variant="h5"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            About
          </Typography>
          <Box>
            <Typography
              variant="body2"
              className={classes.home}
              onClick={() => history.push("/")}
            >
              Home
            </Typography>

            <Typography variant="body2" className={classes.about}>
              <ArrowRight id="icon" /> About
            </Typography>
          </Box>
        </Box>
      </div>
      {/* section about our company */}
      <Box ml={1} my={6} py={6} style={{ background: grey[100] }}>
        {/* main line */}
        <Container>
          <Grid container spacing={3}>
            {/* first 6 cols about company */}
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box>
                <Box my={1}>
                  <Typography style={{ fontWeight: "bolder" }} variant="h4">
                    About Our Company
                  </Typography>
                </Box>
                <Box my={1}>
                  <Typography
                    variant="caption"
                    style={{ fontWeight: "bolder", color: grey[600] }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna nibh, viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                    Aenean dignissim pellentesque felis.Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit. Donec odio. Quisque
                    volutpat mattis eros. Nullam malesuada erat ut turpis.
                    Suspendisse urna nibh, viverra non, semper suscipit, posuere
                    a, pede. Donec nec justo eget felis facilisis fermentum.
                    Aliquam porttitor mauris sit amet orci. Aenean dignissim
                    pellentesque felis.
                  </Typography>
                </Box>
                <Box my={2}>
                  <Button
                    className={classes.buttonStyleOutlined}
                    color="secondary"
                  >
                    Read more
                  </Button>
                </Box>
              </Box>
            </Grid>
            {/* second 6 cols image/video */}
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box>
                <img
                  src={dummyimg}
                  width="100%"
                  height="300px"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* campus gallery */}
      {/* <Box mt={5} textAlign="center">
        <Typography style={{ fontWeight: "bolder" }} variant="h4">
          Campus Gallery
        </Typography>
        <Typography style={{ fontWeight: "bolder" }} variant="body2">
          TOP SOLD COURSES ARE NOW AVAILABLE IN A SUSTAINABLE PRICE.
        </Typography>
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
      </Box> */}
      {/* image filter for campus gallery */}
      {/* Our creative team */}
      <Box py={3} className={classes.ourTeam}>
        <Container maxWidth="md">
          <Box mt={1}>
            <Grid container>
              {/* line 1 for images */}
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Box ml={6}>
                  <img
                    src={manbag}
                    width="100px"
                    height="100px"
                    style={{ borderRadius: "100px" }}
                    alt=""
                  />{" "}
                  &nbsp;&nbsp;
                  <img
                    src={manbag}
                    width="100px"
                    height="100px"
                    style={{ borderRadius: "100px" }}
                    alt=""
                  />
                </Box>{" "}
                <br />
                <img
                  src={manbag}
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "100px" }}
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;
                <img
                  src={manbag}
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "100px" }}
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;
                <img
                  src={manbag}
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "100px" }}
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;
              </Grid>
              {/* line 2 for team heading*/}
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography
                  style={{ fontWeight: "bolder", marginTop: "60px" }}
                  variant="body2"
                >
                  THE TEAM.
                </Typography>
                <Typography style={{ fontWeight: "bolder" }} variant="h4">
                  Our Creative Team
                </Typography>

                <Box textAlign="center" mb={4}>
                  <Divider
                    style={{
                      backgroundColor: "rgb(233,30,99)",
                      width: "10%",
                      height: "3px",

                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* our sponsers */}
      <Box mt={5} textAlign="center">
        <Typography style={{ fontWeight: "bolder" }} variant="h4">
          Our Sponsors
        </Typography>
        <Typography style={{ fontWeight: "bolder" }} variant="body2">
          EDUCATION NEWS ALL OVER
        </Typography>
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
      </Box>
      {/* making links for sponsers */}
      <Box my={4} textAlign="center">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
              <img
                onClick={() => window.scrollTo(0, 0)}
                className={classes.pointer}
                width="100%"
                src={sushi}
                alt=""
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
              <img
                onClick={() => window.scrollTo(0, 0)}
                className={classes.pointer}
                width="100%"
                src={urban}
                alt=""
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
              <img
                onClick={() => window.scrollTo(0, 0)}
                className={classes.pointer}
                width="100%"
                src={ns}
                alt=""
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
              <img
                onClick={() => window.scrollTo(0, 0)}
                className={classes.pointer}
                width="100%"
                src={bell}
                alt=""
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
              <img
                onClick={() => window.scrollTo(0, 0)}
                className={classes.pointer}
                width="100%"
                src={handcr}
                alt=""
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
              <img
                onClick={() => window.scrollTo(0, 0)}
                className={classes.pointer}
                width="100%"
                src={travel}
                alt=""
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default AboutUs;
