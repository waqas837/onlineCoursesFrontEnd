import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.jpeg";
import Drawer from "../Drawer/Drawer";
import {
  AppBar,
  Box,
  Button,
  Container,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { ExpandMore, Menu } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
var Maingrey = grey[400];
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
    borderRadius: "0px",
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
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/courses"
              exact
              activeClassName={classes.activeLink}
              size="small"
              endIcon={<ExpandMore />}
            >
              Courses
            </Button>
            <Button size="small">Blog</Button>
            <Button size="small">Contact</Button>
          </Box>
          <Box className={classes.hideNavigationForSmallScreen}>
            <Button
              className={classes.buttonStyle}
              variant="contained"
              color="secondary"
              style={{ boxShadow: "none" }}
            >
              Login
            </Button>
            <Button
              className={classes.buttonStyleOutlined}
              size="small"
              variant="outlined"
              color="secondary"
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
    </div>
  );
};

export default Navbar;
