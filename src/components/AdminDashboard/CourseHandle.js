import React, { useEffect } from "react";
import axios from "axios";
import { coursesApi } from "../../Api";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Table,
  TableContainer,
  Paper,
  Button,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  OutlinedInput,
} from "@material-ui/core";
import { Add, CheckCircleOutline, ErrorOutline } from "@material-ui/icons";
import { MainSecondary, useStyles } from "./Main.Styles";
import Navbar from "./Navbar";

const CoursesHandle = () => {
  axios.defaults.withCredentials = true;
  const classes = useStyles();
  const [open, setopen] = React.useState(false);
  const [delet, setdelet] = React.useState(false);
  const [loading, setloading] = React.useState(false);
  const [opentwo, setopentwo] = React.useState(false);
  const [pageRefresh, setpageRefresh] = React.useState(false);
  const [CourseData, setCourseData] = React.useState([]);
  const [showCourses, setshowCourses] = React.useState([]);
  const [user, setuser] = React.useState("NoSelection");
  //get all the courses data
  const getAllCourses = async () => {
    try {
      const { data } = await axios.get(`${coursesApi}/getAllCourseData`);
      console.log(data.newData);
      setshowCourses(data.newData);
    } catch (error) {
      console.log(error);
    }
  };
  // then call it in useEffect
  useEffect(() => {
    getAllCourses();
  }, [pageRefresh]);
  // create new course
  const createNewCourse = async () => {
    try {
      const { data } = await axios.post(
        `${coursesApi}/addNewCourse`,
        CourseData
      );
      if (data.success) {
        setpageRefresh(!pageRefresh);
        setopen(false);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // 1.Add a course
  const addUser = () => {
    setopen(true);
    setuser("AddCourse");
  };
  //   close both dialogs
  const closeBothDialogs = () => {
    setopen(false);
    setopentwo(false);
  };
  // 2.Delelet a course; we will need this later on
  //open ok dialog and we will delete user data here
  // const openOneDialog = async () => {
  //   // delete dialog closed
  //   setdelet(false);
  //   setloading(true);
  //   // call here api and just delete the data
  //   try {
  //     const { data } = await axios.delete(
  //       `${userApi}/deleteSingleUser/${userid}`
  //     );
  //     console.log(data);
  //     // open record deleted dialog that data was deleted
  //     if (data.success) {
  //       setopentwo(true);
  //       setpageRefresh(!pageRefresh);
  //     }
  //   } catch (error) {
  //     setloading(false);
  //     console.log(error);
  //   }
  // };
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <Box mt={10} ml={25} className={classes.resposiveFromSide}>
        <Container maxWidth="md">
          {/* line 0 */}
          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              {/* just divide into 6 coloumns */}
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Box textAlign="right">
                {/* pdf icon */}
                <IconButton onClick={addUser}>
                  <Add fontSize="small" style={{ color: MainSecondary }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          {/* line for the table */}
          <Box mt={2}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TableContainer
                  component={Paper}
                  elevation={4}
                  style={{ borderRadius: "0px" }}
                >
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          style={{ color: MainSecondary, fontWeight: "bold" }}
                        >
                          Course Name
                        </TableCell>

                        <TableCell
                          align="center"
                          style={{ color: MainSecondary, fontWeight: "bold" }}
                        >
                          Instructor Name
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ color: MainSecondary, fontWeight: "bold" }}
                        >
                          Course Category
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ color: MainSecondary, fontWeight: "bold" }}
                        >
                          Level
                        </TableCell>

                        <TableCell
                          align="right"
                          style={{ color: MainSecondary, fontWeight: "bold" }}
                        >
                          Status
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ color: MainSecondary, fontWeight: "bold" }}
                        >
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* row */}
                      {showCourses.map((val) => (
                        <TableRow>
                          <TableCell align="left">
                            <Typography variant="subtitle2">
                              {val.coursename}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="subtitle2">
                              {val.instructorname}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography
                              variant="subtitle2"
                              // style={{
                              //   whiteSpace: "nowrap",
                              //   textOverflow: "ellipsis",
                              //   width: "100px",
                              //   display: "inline-block",
                              //   overflow: "hidden",
                              // }}
                              // align="right"
                            >
                              {val.coursecategoryname}
                            </Typography>
                          </TableCell>

                          <TableCell align="right">
                            <ButtonGroup orientation="horizontal">
                              <Button
                                size="small"
                                className={classes.buttonStyle}
                                // onClick={() => editUser(val._id)}
                              >
                                Edit
                              </Button>
                              <Button
                                size="small"
                                className={classes.buttonStyleOutlined}
                                // onClick={() => deleteSingleCourse(val._id)}
                              >
                                Delete
                              </Button>
                            </ButtonGroup>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* dialog for delete confirmation */}
      <Dialog open={delet} onClose={() => setdelet(false)}>
        <Box pl={25} pr={25}></Box>
        <Box textAlign="center">
          <ErrorOutline
            style={{
              fontSize: "100px",
              color: "rgb(240,190,148)",
              fontWeight: "lighter",
              marginTop: "10px",
            }}
          />
        </Box>
        <DialogContent>
          <Box textAlign="center">
            <Typography variant="h6">Confirm Delete</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ background: "grey", marginBottom: "10px" }}
            variant="contained"
            size="small"
            onClick={() => setdelet(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{
              background: MainSecondary,
              color: "white",
              marginBottom: "10px",
            }}
            // onClick={openOneDialog}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>

      {/* pressed ok and record deleted */}
      <Dialog open={opentwo} onClose={() => setopentwo(false)}>
        <Box pl={25} pr={25}></Box>
        <Box textAlign="center">
          <CheckCircleOutline
            style={{
              fontSize: "100px",
              color: "rgb(170,219,133)",
              fontWeight: "lighter",
              marginTop: "10px",
            }}
          />
        </Box>
        <DialogContent>
          <Box textAlign="center">
            <Typography variant="h6">Record deleted</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={closeBothDialogs}
            style={{ marginBottom: "10px" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* <MainDialog
        user={user}
        open={open}
        pageRefresh={pageRefresh}
        setpageRefresh={setpageRefresh}
        userData={window.sendData}
        setopen={setopen}
      /> */}
      {/* edit user dialog */}
      <Dialog open={open} onClose={() => setopen(false)}>
        <DialogTitle>
          <Typography
            style={{ fontWeight: "bold", textAlign: "center" }}
            variant="h6"
          >
            Add Course
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box my={1}>
            <Container>
              <OutlinedInput
                onChange={(e) =>
                  setCourseData({
                    ...CourseData,
                    coursename: e.target.value,
                  })
                }
                placeholder="Course Name"
                fullWidth
                className={classes.input}
              />
            </Container>
          </Box>
          {/* courseCategories */}
          <Box my={1}>
            <Container>
              <OutlinedInput
                onChange={(e) =>
                  setCourseData({
                    ...CourseData,
                    coursecategoryname: e.target.value,
                  })
                }
                placeholder="Course Category Name"
                fullWidth
                className={classes.input}
              />
            </Container>
          </Box>

          <Box my={1}>
            <Container>
              <OutlinedInput
                onChange={(e) =>
                  setCourseData({
                    ...CourseData,
                    instructorname: e.target.value,
                  })
                }
                placeholder="Instructor Name"
                fullWidth
                className={classes.input}
              />
            </Container>
          </Box>
          <Box>
            <Container>
              <Button
                variant="contained"
                fullWidth
                className={classes.buttonStyle}
                style={{ marginBottom: "16px" }}
                onClick={createNewCourse}
              >
                Add Course
              </Button>
            </Container>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CoursesHandle;
