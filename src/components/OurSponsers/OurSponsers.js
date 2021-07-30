import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./OurSponsers.Stlyles";
import sushi from "../../images/sushi.png";
import bell from "../../images/BELL.png";
import handcr from "../../images/handcr.png";
import ns from "../../images/NS.png";
import travel from "../../images/taravel.png";
import urban from "../../images/urban.png";
const OurSponsers = () => {
  const classes = useStyles();
  return (
    <div>
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
      {/* making links */}
      <Box my={2} textAlign="center">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
              <img
                className={classes.pointer}
                width="100%"
                src={sushi}
                alt=""
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
              <img
                className={classes.pointer}
                width="100%"
                src={urban}
                alt=""
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
              <img className={classes.pointer} width="100%" src={ns} alt="" />
            </Grid>
            <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
              <img className={classes.pointer} width="100%" src={bell} alt="" />
            </Grid>
            <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
              <img
                className={classes.pointer}
                width="100%"
                src={handcr}
                alt=""
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
              <img
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

export default OurSponsers;
