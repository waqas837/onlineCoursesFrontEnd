import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.jpeg";
import Drawer from "../Drawer/Drawer";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Hidden,
  IconButton,
  makeStyles,
  OutlinedInput,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Close, Menu } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import MainDialog from "../../MainDialog";
var MainSecondary = "rgb(233,30,99)";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginLeft: "-20px",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(30),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  activeLink: {
    borderBottom: `2px solid ${MainSecondary}`,
    color: MainSecondary,
    borderRadius: "0px",
    background: grey[100],
  },
  text: {
    fontWeight: "bold",
    marginRight: "2px",
    fontSize: "12px",
  },
  hideNavigationForSmallScreen: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonStyle: {
    background: MainSecondary,
    color: "white",
    borderRadius: "50px",
    fontSize: "12px",
    paddingLeft: "12px",
    paddingRight: "12px",
    fontWeight: "bolder",
  },
  buttonStyleOutlined: {
    border: `2px solid ${MainSecondary}`,
    borderRadius: "50px",
    fontSize: "12px",
    paddingLeft: "12px",
    paddingRight: "12px",
    fontWeight: "bolder",
    marginLeft: "5px",
    "&:hover": {
      border: `2px solid ${MainSecondary}`,
      borderRadius: "50px",
      fontSize: "12px",
      paddingLeft: "12px",
      paddingRight: "12px",
      fontWeight: "bolder",
    },
  },

  resposiveFromSide: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
  },
  input: {
    height: "40px",
    borderRadius: "0px",
    marginBottom: "10px",
    fontWeight: "bolder",
  },
  formControl: {
    minWidth: 160,
  },
  formControl2: {
    minWidth: 160,
    marginTop: "-15px",
  },
  card: {
    width: "230px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-70px",
    },
  },
  text: {
    fontWeight: "bolder",
    color: "white",
  },
  paper: {
    borderRadius: "0px",
    marginTop: "20px",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [loginDialog, setloginDialog] = useState(false);
  const [signupdialog, setsignupdialog] = useState(false);
  const [state, setstate] = useState([]);
  console.log(state);
  // login dialog open
  const openLoginDialog = () => {
    setloginDialog(true);
  };
  // login Now'
  const login = () => {};
  const [opendrawer, setopendrawer] = useState(false);
  return (
    <div>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={5}
        style={{ height: "60px" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img src={logo} width="60px" height="55px" alt="" />
          </IconButton>
          {/* create spacing */}
          <Box className={classes.searchIcon}>/</Box>
          <Box className={classes.search}></Box>
          {/* main navigations */}

          <Box className={classes.grow}>
            <Button
              size="small"
              component={NavLink}
              to="/"
              exact
              activeClassName={classes.activeLink}
              style={{ fontSize: "12px" }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/courses"
              activeClassName={classes.activeLink}
              style={{ fontSize: "12px" }}
              size="small"
            >
              Courses
            </Button>

            <Button
              style={{ fontSize: "12px" }}
              component={NavLink}
              to="/about"
              activeClassName={classes.activeLink}
              size="small"
            >
              About
            </Button>
            <Button
              component={NavLink}
              to="/contactus"
              activeClassName={classes.activeLink}
              style={{ fontSize: "12px" }}
              size="small"
            >
              Contact
            </Button>
          </Box>
          <Box className={classes.hideNavigationForSmallScreen}>
            <Button
              className={classes.buttonStyle}
              variant="contained"
              color="secondary"
              style={{ boxShadow: "none" }}
              onClick={openLoginDialog}
            >
              Login
            </Button>
            <Button
              className={classes.buttonStyleOutlined}
              size="small"
              variant="outlined"
              color="secondary"
              onClick={() => setsignupdialog(true)}
            >
              Signup
            </Button>
          </Box>
          <Hidden only={["xl", "lg", "md"]}>
            <Box ml="auto">
              <IconButton onClick={() => setopendrawer(true)}>
                <Menu fontSize="small" color="secondary" />
              </IconButton>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer opendrawer={opendrawer} setopendrawer={setopendrawer} />
      {/* login dialog */}
      <Box>
        <Dialog open={loginDialog} onClose={() => setloginDialog(false)}>
          <DialogTitle>
            <Box textAlign="center" mt={4}>
              <Typography variant="h5">Login</Typography>
            </Box>{" "}
            <IconButton
              style={{ marginLeft: "180px", marginTop: "-140px" }}
              onClick={() => setloginDialog(false)}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box mb={2}>
              <OutlinedInput
                onChange={(e) => setstate({ ...state, email: e.target.value })}
                placeholder="Email"
                style={{ height: "34px" }}
              />
            </Box>
            <Box mb={2}>
              <OutlinedInput
                type="passowrd"
                onChange={(e) =>
                  setstate({ ...state, passowrd: e.target.value })
                }
                placeholder="Password"
                style={{ height: "34px" }}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" size="small">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      {/* signup */}
      {/* login dialog */}
      <Box>
        <Dialog open={signupdialog} onClose={() => setsignupdialog(false)}>
          <DialogTitle>
            <Box textAlign="center" mt={4}>
              <Typography variant="h5">Sign up</Typography>
            </Box>{" "}
            <IconButton
              style={{ marginLeft: "180px", marginTop: "-140px" }}
              onClick={() => setsignupdialog(false)}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box mb={2}>
              <OutlinedInput
                onChange={(e) =>
                  setstate({ ...state, username: e.target.value })
                }
                placeholder="Username"
                style={{ height: "34px" }}
              />
            </Box>
            <Box mb={2}>
              <OutlinedInput
                type="email"
                onChange={(e) => setstate({ ...state, email: e.target.value })}
                placeholder="Email"
                style={{ height: "34px" }}
              />
            </Box>
            <Box mb={2}>
              <OutlinedInput
                type="Password"
                onChange={(e) =>
                  setstate({ ...state, password: e.target.value })
                }
                placeholder="email"
                style={{ height: "34px" }}
              />
            </Box>
            <Box mb={2}>
              <OutlinedInput
                type="passowrd"
                onChange={(e) =>
                  setstate({ ...state, cpassowrd: e.target.value })
                }
                placeholder="Confirm Password"
                style={{ height: "34px" }}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" size="small">
              Signup
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default Navbar;
