import React, { useState } from "react";
import dummyimg from "../../images/prtenr.jpg";
import { useStyles } from "./AllCourses.styles";
import MainAllCourses from "./AllCoursesGridView/MainAllCourses";
import {
  Box,
  Grid,
  Typography,
  OutlinedInput,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { List, Apps, Search } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { ArrowRight } from "@material-ui/icons";
import AllCoursesLists from "./AllCoursesListView/AllCoursesLists";
const AllCourses = () => {
  const classes = useStyles();
  const history = useHistory();
  const [showlist, setshowlist] = useState(true);
  return (
    <div style={{ marginTop: "40px" }}>
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
            All Courses
          </Typography>
          <Box>
            <Typography variant="body2" className={classes.allCourses}>
              All Courses
            </Typography>

            <Typography
              variant="body2"
              className={classes.home}
              onClick={() => history.push("/")}
            >
              <ArrowRight id="icon" /> Home
            </Typography>
          </Box>
        </Box>
      </div>
      {/* all courses */}
      <React.Fragment>
        <Box my={3} textAlign="center">
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typography variant="h5" className={classes.allCoureHeading}>
                All Courses
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <OutlinedInput
                placeholder="Search Courses.."
                endAdornment={
                  <IconButton>
                    <Search fontSize="small" className={classes.searchIcon} />
                  </IconButton>
                }
                className={classes.outlinedInput}
              />
              <Tooltip arrow title="Grid View">
                <IconButton onClick={() => setshowlist(false)}>
                  {showlist ? <Apps /> : <Apps color="secondary" />}
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="List  View">
                <IconButton onClick={() => setshowlist(true)}>
                  {showlist ? <List color="secondary" /> : <List />}
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
      {/* custom tabs data */}
      {/* app view */}
      {showlist ? <AllCoursesLists /> : <MainAllCourses />}
    </div>
  );
};

export default AllCourses;
