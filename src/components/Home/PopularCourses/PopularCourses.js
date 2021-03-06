import React from "react";
import {
  Grid,
  Box,
  Typography,
  Divider,
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useStyles2 } from "../Navbar/Main.Styles";
import { CastForEducation, Person, Star } from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors";
import dummyimg from "../../../images/img4.jpg";
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
}));
const PopularCourses = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  return (
    <div>
      <Box mt={5} textAlign="center">
        <Typography style={{ fontWeight: "bolder" }} variant="h4">
          Popular Courses
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
      </Box>
      {/* cards */}
      <Box my={3} textAlign="center">
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {/* card 1 */}
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                //   onMouseOver={()=>alert("ok")}
                elevation={7}
                style={{
                  borderBottom: "3px solid rgb(245,0,87)",
                  paddingBottom: "10px",
                }}
              >
                <CardActionArea>
                  <CardMedia>
                    <img src={dummyimg} width="100%" height="200px" alt="" />
                  </CardMedia>
                  <CardContent>
                    {/* title */}
                    <Typography
                      style={{ fontWeight: "bolder", marginBottom: "15px" }}
                      gutterBottom
                      variant="h6"
                      component="h2"
                    >
                      JavaScript online course
                    </Typography>
                    {/* price */}
                    <Typography
                      gutterBottom
                      variant="body1"
                      className={classes.font}
                    >
                      $99.99
                    </Typography>
                    {/* star ratings */}
                    <Typography
                      gutterBottom
                      variant="caption"
                      className={classes.font2}
                    >
                      {Array(5)
                        .fill()
                        .map(() => (
                          <Star
                            fontSize="small"
                            style={{ color: yellow[700] }}
                          />
                        ))}
                    </Typography>
                    {/* row inside the card */}
                    <Grid container spacing={5}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <Person fontSize="small" color="secondary" /> Imran
                          Khan
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <CastForEducation
                            fontSize="small"
                            color="secondary"
                          />{" "}
                          43 Students
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* card 2 */}

            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                elevation={7}
                //   onMouseOver={()=>alert("ok")}
                style={{
                  borderBottom: "3px solid rgb(245,0,87)",
                  paddingBottom: "10px",
                }}
              >
                <CardActionArea>
                  <CardMedia>
                    <img src={dummyimg} width="100%" height="200px" alt="" />
                  </CardMedia>
                  <CardContent>
                    {/* title */}
                    <Typography
                      style={{ fontWeight: "bolder", marginBottom: "15px" }}
                      gutterBottom
                      variant="h6"
                      component="h2"
                    >
                      JavaScript online course
                    </Typography>
                    {/* price */}
                    <Typography
                      gutterBottom
                      variant="body1"
                      className={classes.font}
                    >
                      $99.99
                    </Typography>
                    {/* star ratings */}
                    <Typography
                      gutterBottom
                      variant="caption"
                      className={classes.font2}
                    >
                      {Array(5)
                        .fill()
                        .map(() => (
                          <Star
                            fontSize="small"
                            style={{ color: yellow[700] }}
                          />
                        ))}
                    </Typography>
                    {/* row inside the card */}
                    <Grid container spacing={5}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <Person fontSize="small" color="secondary" /> Imran
                          Khan
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <CastForEducation
                            fontSize="small"
                            color="secondary"
                          />{" "}
                          43 Students
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* card 3 */}

            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                elevation={7}
                //   onMouseOver={()=>alert("ok")}
                style={{
                  borderBottom: "3px solid rgb(245,0,87)",
                  paddingBottom: "10px",
                }}
              >
                <CardActionArea>
                  <CardMedia>
                    <img src={dummyimg} width="100%" height="200px" alt="" />
                  </CardMedia>
                  <CardContent>
                    {/* title */}
                    <Typography
                      style={{ fontWeight: "bolder", marginBottom: "15px" }}
                      gutterBottom
                      variant="h6"
                      component="h2"
                    >
                      JavaScript online course
                    </Typography>
                    {/* price */}
                    <Typography
                      gutterBottom
                      variant="body1"
                      className={classes.font}
                    >
                      $99.99
                    </Typography>
                    {/* star ratings */}
                    <Typography
                      gutterBottom
                      variant="caption"
                      className={classes.font2}
                    >
                      {Array(5)
                        .fill()
                        .map(() => (
                          <Star
                            fontSize="small"
                            style={{ color: yellow[700] }}
                          />
                        ))}
                    </Typography>
                    {/* row inside the card */}
                    <Grid container spacing={5}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <Person fontSize="small" color="secondary" /> Imran
                          Khan
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <CastForEducation
                            fontSize="small"
                            color="secondary"
                          />{" "}
                          43 Students
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* 2 main grid */}
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                //   onMouseOver={()=>alert("ok")}
                elevation={7}
                style={{
                  borderBottom: "3px solid rgb(245,0,87)",
                  paddingBottom: "10px",
                }}
              >
                <CardActionArea>
                  <CardMedia>
                    <img src={dummyimg} width="100%" height="200px" alt="" />
                  </CardMedia>
                  <CardContent>
                    {/* title */}
                    <Typography
                      style={{ fontWeight: "bolder", marginBottom: "15px" }}
                      gutterBottom
                      variant="h6"
                      component="h2"
                    >
                      JavaScript online course
                    </Typography>
                    {/* price */}
                    <Typography
                      gutterBottom
                      variant="body1"
                      className={classes.font}
                    >
                      $99.99
                    </Typography>
                    {/* star ratings */}
                    <Typography
                      gutterBottom
                      variant="caption"
                      className={classes.font2}
                    >
                      {Array(5)
                        .fill()
                        .map(() => (
                          <Star
                            fontSize="small"
                            style={{ color: yellow[700] }}
                          />
                        ))}
                    </Typography>
                    {/* row inside the card */}
                    <Grid container spacing={5}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <Person fontSize="small" color="secondary" /> Imran
                          Khan
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <CastForEducation
                            fontSize="small"
                            color="secondary"
                          />{" "}
                          43 Students
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* card 2 */}

            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                elevation={7}
                //   onMouseOver={()=>alert("ok")}
                style={{
                  borderBottom: "3px solid rgb(245,0,87)",
                  paddingBottom: "10px",
                }}
              >
                <CardActionArea>
                  <CardMedia>
                    <img src={dummyimg} width="100%" height="200px" alt="" />
                  </CardMedia>
                  <CardContent>
                    {/* title */}
                    <Typography
                      style={{ fontWeight: "bolder", marginBottom: "15px" }}
                      gutterBottom
                      variant="h6"
                      component="h2"
                    >
                      JavaScript online course
                    </Typography>
                    {/* price */}
                    <Typography
                      gutterBottom
                      variant="body1"
                      className={classes.font}
                    >
                      $99.99
                    </Typography>
                    {/* star ratings */}
                    <Typography
                      gutterBottom
                      variant="caption"
                      className={classes.font2}
                    >
                      {Array(5)
                        .fill()
                        .map(() => (
                          <Star
                            fontSize="small"
                            style={{ color: yellow[700] }}
                          />
                        ))}
                    </Typography>
                    {/* row inside the card */}
                    <Grid container spacing={5}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <Person fontSize="small" color="secondary" /> Imran
                          Khan
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <CastForEducation
                            fontSize="small"
                            color="secondary"
                          />{" "}
                          43 Students
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* card 3 */}

            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                elevation={7}
                //   onMouseOver={()=>alert("ok")}
                style={{
                  borderBottom: "3px solid rgb(245,0,87)",
                  paddingBottom: "10px",
                }}
              >
                <CardActionArea>
                  <CardMedia>
                    <img src={dummyimg} width="100%" height="200px" alt="" />
                  </CardMedia>
                  <CardContent>
                    {/* title */}
                    <Typography
                      style={{ fontWeight: "bolder", marginBottom: "15px" }}
                      gutterBottom
                      variant="h6"
                      component="h2"
                    >
                      JavaScript online course
                    </Typography>
                    {/* price */}
                    <Typography
                      gutterBottom
                      variant="body1"
                      className={classes.font}
                    >
                      $99.99
                    </Typography>
                    {/* star ratings */}
                    <Typography
                      gutterBottom
                      variant="caption"
                      className={classes.font2}
                    >
                      {Array(5)
                        .fill()
                        .map(() => (
                          <Star
                            fontSize="small"
                            style={{ color: yellow[700] }}
                          />
                        ))}
                    </Typography>
                    {/* row inside the card */}
                    <Grid container spacing={5}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <Person fontSize="small" color="secondary" /> Imran
                          Khan
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <CastForEducation
                            fontSize="small"
                            color="secondary"
                          />{" "}
                          43 Students
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Box my={5}>
            <Button
              color="secondary"
              variant="contained"
              className={classes2.buttonStyle}
              size="large"
            >
              All courses
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default PopularCourses;
