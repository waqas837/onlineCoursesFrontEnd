import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  CardActionArea,
  Hidden,
  Container,
} from "@material-ui/core";
import {
  Search,
  MoreVert as MoreVertIcon,
  Stars,
  Check,
  Visibility,
} from "@material-ui/icons";
import img from "../../../images/prtenr.jpg";
const useStyles = makeStyles((theme) => ({
  inputsResp: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  borderRadius: {
    background: "#1769aa",
    color: "white",
    display: "inline-block",
    padding: "8px",
    borderRadius: "12px 12px 12px 0px",
    marginTop: "10px",
  },
  lastbooked: {
    color: "#f73378",
    textDecoration: "underline",
  },
  info: {
    color: "#1769aa",
    textDecoration: "underline",
    fontWeight: "bolder",
  },
  ratings: {
    marginTop: "10px",
    marginBottom: "5px",
  },
  reviews: {
    marginBottom: "10px",
  },
  searchBarResp: {
    [theme.breakpoints.down("sm")]: {
      //we can do something else here
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    [theme.breakpoints.down("xl")]: {
      background: "lightgrey",
      marginTop: "15px",
      borderRadius: "7px",
      padding: "20px",
      marginLeft: "-10px",
    },
  },
  makeFontResp: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "70%",
    },
  },
  CardimgResp: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
const AllCoursesLists = ({ match }) => {
  const classes = useStyles();
  const [state, setstate] = useState();
  const history = useHistory();

  // show prices
  const showPrices = () => {
    history.push(`${match.url}/showPrices`);
  };

  return (
    <div>
      <CssBaseline />
     <Box>
        {/* end for the search , here we can write the card in the grid */}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Container maxWidth="md">
          {Array(5)
            .fill()
            .map(() => (
              <Box my={3}>
                {/* fist hidden element */}
                <Hidden only={["xs", "sm"]}>
                  <Card style={{ textAlign: "center" }}>
                    <CardActionArea
                      className={classes.CardimgResp}
                      style={{ display: "flex" }}
                    >
                      <CardMedia
                        style={{ width: "100%", height: "250px" }}
                        image={img}
                        title="Cologone by park plaza"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          color="primary"
                          component="h2"
                        >
                          New Course{" "}
                          <Stars
                            size="small"
                            style={{ color: "yellowgreen" }}
                          />{" "}
                          <Stars
                            style={{ color: "yellowgreen" }}
                            size="small"
                          />{" "}
                          <Stars
                            size="small"
                            style={{ color: "yellowgreen" }}
                          />{" "}
                          <Stars
                            size="small"
                            style={{ color: "yellowgreen" }}
                          />
                          <Box className={classes.borderRadius}>
                            {" "}
                            <Typography size="small">Very Good</Typography>
                          </Box>
                          <Box ml={3}>
                            {" "}
                            <Typography size="small"></Typography>
                          </Box>
                          <Typography variant="h6" className={classes.ratings}>
                            8.4 <Check fontSize="small" />
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            className={classes.reviews}
                          >
                            5,575 reviews <Visibility fontSize="small" />
                          </Typography>
                        </Typography>
                        <Box mb={1} className={classes.info}>
                          {" "}
                          <Typography variant="body2">
                            Altstadt-Süd, Cologne Show on map
                          </Typography>
                        </Box>

                        <Box mb={1}>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            This course is best for begginers and also for for
                            who wants to learn the advances course{" "}
                          </Typography>
                        </Box>

                        <Box mb={1}>
                          {" "}
                          <Typography
                            className={classes.lastbooked}
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Last buy 9 hours ago on our site
                          </Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        onClick={showPrices}
                        variant="contained"
                        color="secondary"
                        style={{ borderRadius: "0px" }}
                      >
                        Show prices
                      </Button>
                    </CardActions>
                  </Card>
                </Hidden>
                {/* second hidden element */}
                <Hidden only={["md", "lg", "xl"]}>
                  <Card style={{ textAlign: "center", marginLeft: "-17px" }}>
                    <CardActionArea className={classes.CardimgResp}>
                      <CardMedia
                        style={{ width: "100%", height: "250px" }}
                        image={img}
                        title="Cologone by park plaza"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          color="primary"
                          component="h2"
                        >
                          Cologone by park plaza{" "}
                          <Stars
                            size="small"
                            style={{ color: "yellowgreen" }}
                          />{" "}
                          <Stars
                            style={{ color: "yellowgreen" }}
                            size="small"
                          />{" "}
                          <Stars
                            size="small"
                            style={{ color: "yellowgreen" }}
                          />{" "}
                          <Stars
                            size="small"
                            style={{ color: "yellowgreen" }}
                          />
                          <Box className={classes.borderRadius}>
                            {" "}
                            <Typography size="small">Very Good</Typography>
                          </Box>
                          <Box ml={3}>
                            {" "}
                            <Typography size="small"></Typography>
                          </Box>
                          <Typography variant="h6" className={classes.ratings}>
                            8.4 <Check fontSize="small" />
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            className={classes.reviews}
                          >
                            5,575 reviews <Visibility fontSize="small" />
                          </Typography>
                        </Typography>
                        <Box mb={1} className={classes.info}>
                          {" "}
                          <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci, at? Corrupti.
                          </Typography>
                        </Box>

                        <Box mb={1}>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            This course is best for begginers and also for for
                            who wants to learn the advances course
                          </Typography>
                        </Box>

                        <Box mb={1}>
                          {" "}
                          <Typography
                            className={classes.lastbooked}
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Last buy 9 hours ago on our site
                          </Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        onClick={showPrices}
                        variant="contained"
                        color="secondary"
                        style={{ borderRadius: "0px" }}
                      >
                        Show prices
                      </Button>
                    </CardActions>
                  </Card>
                </Hidden>
              </Box>
            ))}
        </Container>
      </Grid>
     </Box>
    </div>
  );
};

export default withRouter(AllCoursesLists);
