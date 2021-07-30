import React from "react";
import dummyimg from "../../images/img4.jpg";
import {
  Box,
  Divider,
  Typography,
  Paper,
  Grid,
  Container,
  makeStyles,
  Card,
  CardActionArea,
  Button,
  CardMedia,
} from "@material-ui/core";
import {
  LocationOnOutlined,
  AccessTime,
  MailOutline,
  MessageOutlined,
} from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "0px",
    paddingBottom: "10px",
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: "10px",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      transition: "box-shadow 0.3s ease-in-out",
    },
  },
  year: {
    background: grey[200],
    padding: "5px",
    paddingLeft: "13px",
    paddingRight: "13px",
    width: "35px",
    fontWeight: "light",
    fontSize: "15px",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1px",
    },
  },
  image: {
    borderRadius: "100px",
  },
  month: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5px",
    },
    color: "grey",
    fontWeight: "bolder",
  },
  date: {
    month: {
      [theme.breakpoints.down("sm")]: {
        // marginLeft: "4px",
      },
    },
  },
  root: {
    position: "relative",
  },
  font: {
    position: "absolute",
    top: "33%",
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
  font3: {
    borderRadius: "20px",
    margin: "5px",
  },
  lastbutton: {
    color: "white",
    borderColor: "white",
    borderRadius: "20px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]:{
      marginBottom:"20px"
    }
  },
}));
const UpcomingEvents = () => {
  const classes = useStyles();
  // it always returns the 0-6,0-11,for months and days only
  // after applying the methods we can create an object/arr/(both have indexes)
  // of months and then we get them
  //   1.months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = new Date().getMonth();
  const today = new Date().getDate();
  const year = new Date().getFullYear();
  const Month = months[monthName];

  return (
    <div>
      <Box mt={5} textAlign="center">
        <Typography style={{ fontWeight: "bolder" }} variant="h4">
          Upcoming Events
        </Typography>
        <Typography style={{ fontWeight: "bolder" }} variant="body2">
          UPCOMING EDUCATION EVENTS TO FEED YOUR BRAIN.
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
      {/* make two sections */}
      {/* one line */}
      <Box my={2}>
        <Container>
          <Grid container spacing={3}>
            {/* first column */}
            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
              <Box my={2}>
                {/* paper 1 */}
                <Paper className={classes.paper} elevation={3}>
                  {/* date */}
                  <Box display="block">
                    <Box>
                      <Typography className={classes.date} variant="h4">
                        {today}
                      </Typography>
                    </Box>
                    {/* 
                    month */}
                    <Box>
                      <Typography variant="caption" className={classes.month}>
                        {Month}
                      </Typography>
                      {/* year */}
                    </Box>
                    <Box ml={-1} mt={1} className={classes.year}>
                      {year}
                    </Box>
                  </Box>
                  {/* image */}
                  <Box ml={4}>
                    <img
                      className={classes.image}
                      src={dummyimg}
                      width="100px"
                      height="100px"
                      alt=""
                    />
                  </Box>
                  {/* 3 typo in a box */}
                  <Box>
                    <Typography
                      style={{ marginBottom: "10px" }}
                      variant="subtitle2"
                    >
                      Saturday
                    </Typography>
                    <Typography
                      style={{ marginBottom: "10px", fontWeight: "bold" }}
                      variant="body1"
                    >
                      <AccessTime fontSize="small" color="secondary" />{" "}
                      Importance of Foundation course
                    </Typography>
                    <Typography variant="caption">
                      <LocationOnOutlined fontSize="small" color="secondary" />{" "}
                      PSC Convention Hall
                    </Typography>
                  </Box>
                </Paper>
              </Box>
              <Box my={2}>
                {/* paper 2 */}
                <Paper className={classes.paper} elevation={3}>
                  {/* date */}
                  <Box display="block">
                    <Box>
                      <Typography className={classes.date} variant="h4">
                        {today}
                      </Typography>
                    </Box>
                    {/* month */}
                    <Box>
                      <Typography className={classes.month} variant="caption">
                        {Month}
                      </Typography>
                      {/* year */}
                    </Box>
                    <Box ml={-1} mt={1} className={classes.year}>
                      {year}
                    </Box>
                  </Box>
                  {/* image */}
                  <Box ml={4}>
                    <img
                      className={classes.image}
                      src={dummyimg}
                      width="100px"
                      height="100px"
                      alt=""
                    />
                  </Box>
                  {/* 3 typo in a box */}
                  <Box>
                    <Typography
                      style={{ marginBottom: "10px" }}
                      variant="subtitle2"
                    >
                      Saturday
                    </Typography>
                    <Typography
                      style={{ marginBottom: "10px", fontWeight: "bold" }}
                      variant="body1"
                    >
                      <AccessTime fontSize="small" color="secondary" />{" "}
                      Importance of Foundation course
                    </Typography>
                    <Typography variant="caption">
                      <LocationOnOutlined fontSize="small" color="secondary" />{" "}
                      PSC Convention Hall
                    </Typography>
                  </Box>
                </Paper>
              </Box>
              <Box my={1}>
                {/* paper 3 */}
                <Paper className={classes.paper} elevation={3}>
                  {/* date */}
                  <Box display="block">
                    <Box>
                      <Typography className={classes.date} variant="h4">
                        {today}
                      </Typography>
                    </Box>
                    {/* month */}
                    <Box>
                      <Typography className={classes.month} variant="caption">
                        {Month}
                      </Typography>
                      {/* year */}
                    </Box>
                    <Box ml={-1} mt={1} className={classes.year}>
                      {year}
                    </Box>
                  </Box>
                  {/* image */}
                  <Box ml={4}>
                    <img
                      className={classes.image}
                      src={dummyimg}
                      width="100px"
                      height="100px"
                      alt=""
                    />
                  </Box>
                  {/* 3 typo in a box */}
                  <Box>
                    <Typography
                      style={{ marginBottom: "10px" }}
                      variant="subtitle2"
                    >
                      Saturday
                    </Typography>
                    <Typography
                      style={{ marginBottom: "10px", fontWeight: "bold" }}
                      variant="body1"
                    >
                      <AccessTime fontSize="small" color="secondary" />{" "}
                      Importance of Foundation course
                    </Typography>
                    <Typography variant="caption">
                      <LocationOnOutlined fontSize="small" color="secondary" />{" "}
                      PSC Convention Hall
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Grid>

            {/* second column */}
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <div
                style={{
                  backgroundImage: `url(${dummyimg})`,
                  backgroundSize: "100% 100%",
                  height: "100%",
                  boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* icon */}
                <Box pl={5} pt={5}>
                  <MessageOutlined
                    fontSize="large"
                    style={{ color: "white", fontSize: "50px" }}
                  />
                </Box>
                {/* heading 1 */}
                <Box textAlign="center">
                  <Typography variant="h6" style={{ color: "white" }}>
                    Upcoming Educational Events
                  </Typography>
                </Box>
                {/* heading 2 */}
                <Box pl={4} pt={2} textAlign="center">
                  <Typography variant="body1" style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio
                  </Typography>
                </Box>
                {/* button */}
                <Box pl={5} pt={15}>
                  <Button
                    variant="outlined"
                    size="large"
                    className={classes.lastbutton}
                  >
                    All Events
                  </Button>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default UpcomingEvents;
