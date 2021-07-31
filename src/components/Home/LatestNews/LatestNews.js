import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import dummyimg from "../../../images/img4.jpg";
import { useStyels } from "./LatestNewsStyles";
import { grey } from "@material-ui/core/colors";

const LatestNews = () => {
  const classes = useStyels();
  return (
    <div
      style={{ background: grey[200], paddingTop: "23px",paddingBottom: "35px", marginTop: "5px" }}
    ><Container>
      
      <Box mt={5} textAlign="center">
        <Typography style={{ fontWeight: "bolder" }} variant="h4">
          Latest News
        </Typography>
        <Typography style={{ fontWeight: "bolder" }} variant="body2">
          EDUCATION NEWS ALL OVER THE WORLD.
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
      {/* one grid line */}
      <Box my={3} textAlign="center">
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <div
                style={{
                  backgroundImage: `url(${dummyimg})`,
                  backgroundSize: "100% 100%",
                  height: "370px",
                  boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* heading 1 */}
                <Box textAlign="center">
                  <Typography variant="caption" className={classes.heading1}>
                    20 April 2021
                  </Typography>
                </Box>
                {/* heading 2 */}
                <Box pl={4} pt={2} textAlign="center">
                  <Typography variant="body1" className={classes.heading2}>
                    Advantages of learning online
                  </Typography>
                </Box>
              </div>
            </Grid>

            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <div
                style={{
                  backgroundImage: `url(${dummyimg})`,
                  backgroundSize: "100% 100%",
                  height: "370px",
                  boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* heading 1 */}
                <Box textAlign="center">
                  <Typography variant="caption" className={classes.heading1}>
                    20 April 2021
                  </Typography>
                </Box>
                {/* heading 2 */}
                <Box pl={4} pt={2} textAlign="center">
                  <Typography variant="body1" className={classes.heading2}>
                    Advantages of learning online
                  </Typography>
                </Box>
              </div>
            </Grid>

            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <div
                style={{
                  backgroundImage: `url(${dummyimg})`,
                  backgroundSize: "100% 100%",
                  height: "370px",
                  boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* heading 1 */}
                <Box textAlign="center">
                  <Typography variant="caption" className={classes.heading1}>
                    20 April 2021
                  </Typography>
                </Box>
                {/* heading 2 */}
                <Box pl={4} pt={2} textAlign="center">
                  <Typography variant="body1" className={classes.heading2}>
                    Advantages of learning online
                  </Typography>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
    </div>
  );
};

export default LatestNews;
