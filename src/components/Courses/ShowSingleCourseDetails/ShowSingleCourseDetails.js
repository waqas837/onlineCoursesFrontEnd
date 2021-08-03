import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Box,
  Card,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ButtonGroup,
  IconButton,
  OutlinedInput,
  Zoom,
} from "@material-ui/core";
import { useStyles } from "./ShowSinglePrice.Styles";
import dummyimg from "../../../images/img2.jpg";
import PropTypes from "prop-types";
import {
  AccessTime,
  SignalCellularAlt,
  FileCopy,
  Extension,
  CastForEducation,
  Translate,
  BookmarkBorder,
  Star,
  ExpandLess,
  ExpandMore,
  Note,
  Lock,
  Facebook,
  Twitter,
  YouTube,
  LinkedIn,
  ArrowRight,
} from "@material-ui/icons";
import { grey, yellow } from "@material-ui/core/colors";
import Cards from "../../Cards";
// main
const ShowSingleCourseDetails = () => {
  const classes = useStyles();
  const [check, setcheck] = useState(false);
  const history = useHistory();
  const [stars, setstars] = useState();
  // submit raings
  const sumbitRatings = () => {
    alert(`Thanks for give ${stars} stars john`);
  };

  // star rating function
  const ratingChanged = (newRating) => {
    setstars(newRating);
  };
  const iconAndText = [
    {
      primary: "Javascript Introduction",
      icon: <Note color="secondary" />,
      timeLabel: (
        <Box>
          <Typography variant="caption">30 Mins</Typography>
        </Box>
      ),
      perview: (
        <Box>
          <Typography variant="caption">Perview</Typography>
        </Box>
      ),
    },
    {
      primary: "Javascript Where To",
      icon: <Note color="secondary" />,
      timeLabel: (
        <Box>
          <Typography variant="caption">30 Mins</Typography>
        </Box>
      ),
      perview: (
        <Box>
          <Typography variant="caption">Perview</Typography>
        </Box>
      ),
    },
    {
      primary: "Javascript Output",
      icon: <Note color="secondary" />,
      timeLabel: (
        <Box>
          <Typography variant="caption">30 Mins</Typography>
        </Box>
      ),
      perview: (
        <Box>
          <Typography variant="caption">Perview</Typography>
        </Box>
      ),
    },
    {
      primary: "Javascript Statement",
      icon: <Note color="secondary" />,
      timeLabel: (
        <Box>
          <Typography variant="caption">30 Mins</Typography>
        </Box>
      ),

      lockIcon: <Lock fontSize="small" />,
    },
    {
      primary: "Javascript Syntax",
      icon: <Note color="secondary" />,
      timeLabel: (
        <Box>
          <Typography variant="caption">30 Mins</Typography>
        </Box>
      ),

      lockIcon: <Lock fontSize="small" />,
    },
  ];
  const [value, setValue] = React.useState(0);
  const [course, setcourse] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // show or hide a course
  const showOrHideCourse = () => {
    setcourse(!course);
    setcheck(!check);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <div>
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
        <Box pt={12} textAlign="center">
          <Typography
            variant="h5"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            All Courses
          </Typography>
          <Box>
            <Typography
              variant="body2"
              className={classes.home}
              onClick={() => history.push("/")}
            >
              <ArrowRight id="icon" /> Home
            </Typography>
            <Typography
              variant="body2"
              className={classes.home}
              onClick={() => history.push("/courses")}
            >
              <ArrowRight id="icon" />
              All Courses
            </Typography>
            <Typography variant="body2" className={classes.perviewCourse}>
              <ArrowRight id="icon" /> Perview Course
            </Typography>
          </Box>
        </Box>
      </div>
      <Container>
        <Box mt={10} mb={4}>
          <Paper elevation={5} className={classes.paper}>
            {/* line one */}
            <Grid container>
              <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                <Typography variant="subtitle2" className={classes.imageText}>
                  <img
                    src={dummyimg}
                    height="50px"
                    width="50px"
                    style={{ borderRadius: "70px" }}
                    alt=""
                  />{" "}
                  &nbsp; Teacher <br /> &nbsp;Imran Khan
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Typography className={classes.imageText} variant="subtitle2">
                  <BookmarkBorder color="secondary" fontSize="large" />
                  Category <br /> ShortCourses
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Typography variant="subtitle2"> Review</Typography>
                <Typography variant="subtitle2">
                  {Array(5)
                    .fill()
                    .map(() => (
                      <Star fontSize="small" style={{ color: yellow[500] }} />
                    ))}
                </Typography>
              </Grid>
            </Grid>
            {/* second line */}
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box my={1}>
                  {" "}
                  <Typography variant="h4" style={{ fontWeight: "bolder" }}>
                    Javascript Online Course
                  </Typography>
                </Box>{" "}
              </Grid>
            </Grid>
            {/* third line for icons */}
            <Grid container>
              {/* icon 1 */}
              <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
                <Typography className={classes.icons} variant="caption">
                  <AccessTime fontSize="small" color="secondary" />
                  &nbsp; 10 Weeks
                </Typography>
              </Grid>
              {/* icon 2 */}
              <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
                <Typography className={classes.icons} variant="caption">
                  <SignalCellularAlt fontSize="small" color="secondary" />
                  &nbsp; All levels
                </Typography>
              </Grid>
              {/* icon 3 */}
              <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
                <Typography className={classes.icons} variant="caption">
                  <FileCopy fontSize="small" color="secondary" /> &nbsp;5
                  Lessons
                </Typography>
              </Grid>
              {/* icon 4 */}
              <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
                <Typography className={classes.icons} variant="caption">
                  <Extension fontSize="small" color="secondary" /> &nbsp; 0
                  Quizes
                </Typography>
              </Grid>
              {/* icon 5 */}
              <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
                <Typography className={classes.icons} variant="caption">
                  <CastForEducation fontSize="small" color="secondary" />{" "}
                  &nbsp;42 Students
                </Typography>
              </Grid>
              {/* icon 6 */}
              <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
                <Typography className={classes.icons} variant="caption">
                  <Translate fontSize="small" color="secondary" />
                  &nbsp; English
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        {/* tabs for details */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
            <AppBar
              position="static"
              style={{ background: "white", color: "black" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
              >
                <Tab label="Overview" {...a11yProps(0)} />
                <Tab label="Curriculum" {...a11yProps(1)} />
                <Tab label="Instructor" {...a11yProps(2)} />
                <Tab label="Reviews" {...a11yProps(3)} />
              </Tabs>
            </AppBar>
            {/* Overview */}
            <TabPanel value={value} index={0}>
              <Box>
                <Typography variant="caption">
                  Quiddam vocas oboediens quovis consectetur sequebatur quattuor
                  ponatur aditus veterum Respondent amet intellegunt habitare
                  officio estne moribus ames extrahenda vivendi solemus optimos
                  harum fruitur legerint Placet patrocinium interemit vitiosum
                  torquatus vellem non cui metuit valde quic Paupertas peccetur
                  debeant petitur nec posui murenam don mirum alius infantes
                  agemusque divitem Nulla viri genere quippe perfectio nostrum
                  contritum hinc callipho lucius ullo incessum irridebat multos
                  iacere Memoriae ex tribunus amplius inquieta legem esses
                  igitur eae utilitatis germen possim movere epicurei vult.
                </Typography>
              </Box>
            </TabPanel>
            {/*Curriculum*/}
            <TabPanel value={value} index={1}>
              {/* line for heading */}
              <Grid
                container
                onClick={showOrHideCourse}
                style={{ cursor: "pointer" }}
                className={classes.showOrHideCourse}
              >
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Typography variant="h5" style={{ fontWeight: "bolder" }}>
                    JavaScript
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Typography variant="h5">
                    {course ? (
                      <ExpandMore fontSize="small" />
                    ) : (
                      <ExpandLess fontSize="small" />
                    )}
                  </Typography>
                </Grid>
              </Grid>
              {/* line for showing course video lists */}
              {course ? (
                <Zoom direction="" in={check}>
                  <Grid container>
                    <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
                      <Typography
                        variant="h5"
                        style={{ fontWeight: "bolder", marginTop: "10px" }}
                      >
                        {/* list of course video */}
                        <List>
                          {iconAndText.map((val) => (
                            <ListItem button>
                              <ListItemIcon>{val.icon}</ListItemIcon>
                              <ListItemText primary={val.primary} />
                              {val.perview || val.timeLabel ? (
                                <ButtonGroup>
                                  <Button
                                    disabled
                                    style={{ border: "none" }}
                                    size="small"
                                  >
                                    {val.timeLabel}
                                  </Button>
                                  {/* so we can make a condition inside another condition for best accuracy */}
                                  {val.perview ? (
                                    <Button size="small"> {val.perview}</Button>
                                  ) : null}
                                </ButtonGroup>
                              ) : null}
                            </ListItem>
                          ))}
                        </List>
                        <Divider />
                      </Typography>
                    </Grid>
                  </Grid>
                </Zoom>
              ) : null}
            </TabPanel>
            {/* Instructor */}
            <TabPanel value={value} index={2}>
              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <img
                    src={dummyimg}
                    width="100px"
                    height="100px"
                    style={{ borderRadius: "100px" }}
                    alt=""
                  />
                  <br />
                  <IconButton className={classes.instructorLinks}>
                    <Facebook fontSize="small" />
                  </IconButton>
                  <IconButton className={classes.instructorLinks}>
                    <Twitter fontSize="small" />
                  </IconButton>
                  <IconButton className={classes.instructorLinks}>
                    <YouTube fontSize="small" />
                  </IconButton>
                  <IconButton className={classes.instructorLinks}>
                    <LinkedIn fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Typography variant="h5">Imran Khan</Typography>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna nibh, viverra non, semper
                    suscipit, posuere a, pede.
                  </Typography>
                </Grid>
                <Grid></Grid>
              </Grid>
            </TabPanel>
            {/* Reviews */}
            <TabPanel value={value} index={3}>
              <Box my={1}>
                <Typography
                  variant="subtitle2"
                  style={{ verticalAlign: "middle", display: "inline-flex" }}
                >
                  <img
                    style={{ borderRadius: "100px" }}
                    src={dummyimg}
                    width="100px"
                    height="100px"
                    alt=""
                  />{" "}
                  <span style={{ fontSize: "20px", marginLeft: "10px" }}>
                    John
                  </span>
                </Typography>
              </Box>
              <Paper style={{ borderRadius: "0px" }}>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />

                <OutlinedInput
                  multiline
                  rows={4}
                  placeholder="Please provide a feedback.."
                />
                <br />
                <Box ml={7} py={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ borderRadius: "20px" }}
                    onClick={sumbitRatings}
                  >
                    Submit
                  </Button>
                </Box>
              </Paper>
            </TabPanel>
          </Grid>
          {/* second 6 cols for card */}
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <Card
              elevation={5}
              style={{ borderRadius: "0px", marginBottom: "20px" }}
            >
              <CardActionArea>
                <CardMedia />
                <img src={dummyimg} width="100%" height="170px" alt="" />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ fontWeight: "bolder" }}
                  >
                    $99.99
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  fullWidth
                  style={{ borderRadius: "30px" }}
                  variant="contained"
                  color="secondary"
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        {/* related courses */}
        <Box>
          <Typography
            variant="h5"
            style={{ fontWeight: "bolder" }}
            color="initial"
          >
            Related Courses
          </Typography>
        </Box>
        <Cards />
      </Container>
    </div>
  );
};

export default ShowSingleCourseDetails;
