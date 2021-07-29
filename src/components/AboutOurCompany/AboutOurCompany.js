import React from "react";
import { Grid, Box, Typography, Button, Container } from "@material-ui/core";
import dummyimg from "../../images/img4.jpg";
import { useStyles2 } from "../../Styles/Main.Styles";
import { grey } from "@material-ui/core/colors";
const AboutOurCompany = () => {
  const classes = useStyles2();
  return (
    <div>
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
                    style={{ fontWeight: "bolder",color:grey[600] }}
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
    </div>
  );
};

export default AboutOurCompany;
