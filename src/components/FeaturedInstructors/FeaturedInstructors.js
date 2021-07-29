import React from "react";
import dummyimg from "../../images/img4.jpg";
import {
  Box,
  Divider,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  makeStyles,
  CardMedia,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  font: {
    position: "absolute",
    top: "57%",
    left: "1%",
    width: "100%",
    color: "white",
    textAlign: "left",
    backgroundColor: "none",
  },
  font2: {
    position: "absolute",
    top: "57%",
    left: "30%",
    width: "100%",
    color: "white",
    backgroundColor: "none",
  },
  imageStyle: {
    borderRadius: "500px",
    marginTop: "70px",
  },
  cardImage: {
    "&:hover": {
      "& img": {
        border: "3px solid rgb(233,30,99)",
        padding:"3px",
        transition: "all .1s ease-in-out",
      },
    },
    "& #divider": {
      width: "500px",
      color: "blue",
      transition: "all .1s ease-in-out",
    },
  },
}));
const FeaturedInstructors = () => {
  const classes = useStyles();
  return (
    <div>
      <Box mt={5} textAlign="center">
        <Typography style={{ fontWeight: "bolder" }} variant="h4">
          Featured Instructors
        </Typography>
        <Typography style={{ fontWeight: "bolder" }} variant="body2">
          LEARN FROM OUR BEST INSTRUCTORS.
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
      {/* make cards */}

      <Box textAlign="center">
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {/* card 1 */}
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                //   onMouseOver={()=>alert("ok")}
                className={classes.cardImage}
                elevation={7}
                style={{
                  paddingBottom: "10px",
                  borderRadius: "0px",
                }}
              >
                <CardActionArea>
                  <CardMedia>
                    <img
                      className={classes.imageStyle}
                      src={dummyimg}
                      width="100px"
                      height="100px"
                      alt=""
                    />
                  </CardMedia>
                  <CardContent>
                    <Box textAlign="center">
                      <Typography style={{ fontWeight: "bolder" }} variant="h6">
                        Featured Instructors
                      </Typography>
                      <Typography
                        style={{ fontWeight: "bolder" }}
                        variant="body2"
                      >
                        LEARN FROM OUR BEST INSTRUCTORS.
                      </Typography>
                      <Box textAlign="center">
                        <Divider
                          id="divider"
                          component="div"
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

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do…
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* card 1 */}
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                //   onMouseOver={()=>alert("ok")}
                className={classes.cardImage}
                elevation={7}
                style={{
                  paddingBottom: "10px",
                  borderRadius: "0px",
                }}
              >
                <CardActionArea>
                  <CardMedia>
                    <img
                      className={classes.imageStyle}
                      src={dummyimg}
                      width="100px"
                      height="100px"
                      alt=""
                    />
                  </CardMedia>
                  <CardContent>
                    <Box textAlign="center">
                      <Typography style={{ fontWeight: "bolder" }} variant="h6">
                        Featured Instructors
                      </Typography>
                      <Typography
                        style={{ fontWeight: "bolder" }}
                        variant="body2"
                      >
                        LEARN FROM OUR BEST INSTRUCTORS.
                      </Typography>
                      <Box textAlign="center">
                        <Divider
                          id="divider"
                          component="div"
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

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do…
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* card 1 */}
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                //   onMouseOver={()=>alert("ok")}
                className={classes.cardImage}
                elevation={7}
                style={{
                  paddingBottom: "10px",
                  borderRadius: "0px",
                }}
              >
                <CardActionArea>
                  <CardMedia>
                    <img
                      className={classes.imageStyle}
                      src={dummyimg}
                      width="100px"
                      height="100px"
                      alt=""
                    />
                  </CardMedia>
                  <CardContent>
                    <Box textAlign="center">
                      <Typography style={{ fontWeight: "bolder" }} variant="h6">
                        Featured Instructors
                      </Typography>
                      <Typography
                        style={{ fontWeight: "bolder" }}
                        variant="body2"
                      >
                        LEARN FROM OUR BEST INSTRUCTORS.
                      </Typography>
                      <Box textAlign="center">
                        <Divider
                          id="divider"
                          component="div"
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

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do…
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default FeaturedInstructors;
