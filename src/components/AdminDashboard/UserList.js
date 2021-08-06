import React from "react";
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
} from "@material-ui/core";
import MainDialog from "./MainDialog";
import { Add, CheckCircleOutline, ErrorOutline } from "@material-ui/icons";
import { MainSecondary, useStyles } from "./Main.Styles";
import Navbar from "./Navbar";

const UserList = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setopen] = React.useState(false);
  const [delet, setdelet] = React.useState(false);
  const [opentwo, setopentwo] = React.useState(false);
  const [user, setuser] = React.useState("NoSelection");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // 1.edit a user
  const editUser = () => {
    setopen(true);
    setuser("EditUser");
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
  //open only one dialog
  const openOneDialog = () => {
    setdelet(false);
    setopentwo(true);
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
                <TableContainer component={Paper}>
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
                          Confirm Password
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
                      <TableRow>
                        <TableCell align="right">JohnDeo001</TableCell>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">JohnDeo@gamail.com</TableCell>
                        <TableCell align="right">00000000000</TableCell>

                        <TableCell align="right">
                          <Button
                            size="small"
                            className={classes.buttonStyleOutlined}
                          >
                            Block
                          </Button>
                        </TableCell>

                        <TableCell align="right">
                          <ButtonGroup orientation="horizontal">
                            <Button
                              size="small"
                              className={classes.buttonStyle}
                              onClick={editUser}
                            >
                              Edit
                            </Button>
                            <Button
                              size="small"
                              className={classes.buttonStyleOutlined}
                              onClick={() => setdelet(true)}
                            >
                              Delete
                            </Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                      {/* row */}
                      <TableRow>
                        <TableCell align="right">JohnDeo001</TableCell>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">JohnDeo@gamail.com</TableCell>
                        <TableCell align="right">00000000000</TableCell>

                        <TableCell align="right">
                          <Button
                            size="small"
                            variant="contained"
                            className={classes.buttonStyle}
                          >
                            Approve
                          </Button>
                        </TableCell>

                        <TableCell align="right">
                          <ButtonGroup orientation="horizontal">
                            <Button
                              size="small"
                              className={classes.buttonStyle}
                              onClick={editUser}
                            >
                              Edit
                            </Button>
                            <Button
                              size="small"
                              className={classes.buttonStyleOutlined}
                              onClick={() => setdelet(true)}
                            >
                              Delete
                            </Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
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
      {/* edit user dialog */}
      <MainDialog user={user} open={open} setopen={setopen} />
    </div>
  );
};

export default UserList;
