import React, { useEffect } from "react";
import axios from "axios";
import { userApi } from "../../Api";
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
import {
  Add,
  CheckCircleOutline,
  EmailOutlined,
  ErrorOutline,
  HighlightOff,
} from "@material-ui/icons";
import { MainSecondary, useStyles } from "./Main.Styles";
import Navbar from "./Navbar";

const UserList = () => {
  axios.defaults.withCredentials = true; //this sigle line will attach cookies with every axios request
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setopen] = React.useState(false);
  const [delet, setdelet] = React.useState(false);
  const [loading, setloading] = React.useState(false);
  const [opentwo, setopentwo] = React.useState(false);
  const [state, setstate] = React.useState([]);
  const [pageRefresh, setpageRefresh] = React.useState(false);
  const [userid, setuserid] = React.useState("");
  const [fetchedUsersApi, setfetchedUsersApi] = React.useState([]);
  const [user, setuser] = React.useState("NoSelection");

  // update user
  const udpateUser = async () => {
    try {
      const { data } = await axios.patch(
        `${userApi}/updateUser/${userid}`,
        state
      );
      if (data) {
        setopen(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // fetch user api for admin
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`${userApi}/findAllUsers`);
      console.log(data);
      setfetchedUsersApi(data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [pageRefresh]);
  // data match by id for edit it
  const getDatabyId = (id) => {
    const getData = fetchedUsersApi.find((data) => data._id === id);
    window.sendData = getData;
  };
  // set id into state before delete a user
  const deleteSinlgeUser = async (id) => {
    setdelet(true);
    setuserid(id);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // 1.edit a user
  const editUser = (id) => {
    setopen(true);
    setuser("EditUser");
    getDatabyId(id);
    setuserid(id);
  };
  // 1.Add a user
  const addUser = () => {
    setopen(true);
    setuser("AddUser");
  };
  //   close both dialogs
  const closeBothDialogs = () => {
    setopen(false);
    setopentwo(false);
  };
  // 2.Delelet a user
  //open ok dialog and we will delete user data here
  const openOneDialog = async () => {
    // delete dialog closed
    setdelet(false);
    setloading(true);
    // call here api and just delete the data
    try {
      const { data } = await axios.delete(
        `${userApi}/deleteSingleUser/${userid}`
      );
      console.log(data);
      // open record deleted dialog that data was deleted
      if (data.success) {
        setopentwo(true);
        setpageRefresh(!pageRefresh);
      }
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };
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
                          Username
                        </TableCell>

                        <TableCell
                          align="center"
                          style={{ color: MainSecondary, fontWeight: "bold" }}
                        >
                          Email
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ color: MainSecondary, fontWeight: "bold" }}
                        >
                          Password
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
                      {fetchedUsersApi.map((val) => (
                        <TableRow>
                          <TableCell align="right">
                            <Typography variant="subtitle2">
                              {val.username}
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="subtitle2">
                              {val.email}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              variant="subtitle2"
                              style={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                width: "100px",
                                display: "inline-block",
                                overflow: "hidden",
                              }}
                              align="right"
                            >
                              {val.password}
                            </Typography>
                          </TableCell>

                          <TableCell align="right">
                            {val.status ? (
                              <Button className={classes.buttonStyle}>
                                Approved
                              </Button>
                            ) : (
                              <Button
                                size="small"
                                className={classes.buttonStyleOutlined}
                              >
                                Block
                              </Button>
                            )}
                          </TableCell>

                          <TableCell align="right">
                            <ButtonGroup orientation="horizontal">
                              <Button
                                size="small"
                                className={classes.buttonStyle}
                                onClick={() => editUser(val._id)}
                              >
                                Edit
                              </Button>
                              <Button
                                size="small"
                                className={classes.buttonStyleOutlined}
                                onClick={() => deleteSinlgeUser(val._id)}
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
            onClick={openOneDialog}
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
      {/* add user dialog */}
      <Dialog open={open} onClose={() => setopen(false)}>
        <DialogTitle>
          {user === "AddUser" ? (
            <Typography style={{ fontWeight: "bold" }} variant="h6">
              Add User
            </Typography>
          ) : user === "EditUser" ? (
            <Typography style={{ fontWeight: "bold" }} variant="h6">
              Edit User
            </Typography>
          ) : null}
          <Box textAlign="right" style={{ marginTop: "-40px" }}>
            <IconButton onClick={() => setopen(false)}>
              <HighlightOff style={{ color: MainSecondary }} />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <div>
            {user === "AddUser" ? (
              <div>
                <Box my={1}>
                  <Container>
                    <OutlinedInput
                      placeholder="Username"
                      fullWidth
                      className={classes.input}
                    />
                  </Container>
                </Box>

                <Box my={1}>
                  <Container>
                    <OutlinedInput
                      placeholder="Email address"
                      fullWidth
                      endAdornment={
                        <EmailOutlined
                          fontSize="small"
                          style={{ color: "grey" }}
                        />
                      }
                      className={classes.input}
                    />
                  </Container>
                </Box>

                <Box my={1}>
                  <Container>
                    <OutlinedInput
                      placeholder="Password"
                      fullWidth
                      className={classes.input}
                    />
                  </Container>
                </Box>

                <Box my={1}>
                  <Container>
                    <OutlinedInput
                      placeholder="Confirm Passowrd"
                      fullWidth
                      className={classes.input}
                    />
                  </Container>
                </Box>
              </div>
            ) : user === "EditUser" ? (
              <div>
                <Box my={1}>
                  <Container>
                    <OutlinedInput
                      onChange={(e) =>
                        setstate({ ...state, username: e.target.value })
                      }
                      defaultValue={window.sendData.username}
                      placeholder="Username"
                      fullWidth
                      className={classes.input}
                    />
                  </Container>
                </Box>

                <Box my={1}>
                  <Container>
                    <OutlinedInput
                      onChange={(e) =>
                        setstate({ ...state, email: e.target.value })
                      }
                      defaultValue={window.sendData.email}
                      placeholder="Email address"
                      fullWidth
                      endAdornment={
                        <EmailOutlined
                          fontSize="small"
                          style={{ color: "grey" }}
                        />
                      }
                      className={classes.input}
                    />
                  </Container>
                </Box>

                <Box my={1}>
                  <Container>
                    <OutlinedInput
                      onChange={(e) =>
                        setstate({ ...state, password: e.target.value })
                      }
                      placeholder="Password"
                      fullWidth
                      className={classes.input}
                      defaultValue={window.sendData.password}
                    />
                  </Container>
                </Box>
              </div>
            ) : null}

            <Box>
              <Container>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.buttonStyle}
                  style={{ marginBottom: "16px" }}
                  onClick={
                    user === "AddUser"
                      ? () => alert("add User")
                      : user === "EditUser"
                      ? udpateUser
                      : null
                  }
                >
                  {user === "AddUser" ? (
                    <Typography variant="subtitle2">Add User</Typography>
                  ) : user === "EditUser" ? (
                    <Typography variant="subtitle2">Update</Typography>
                  ) : null}
                </Button>
              </Container>
            </Box>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserList;
