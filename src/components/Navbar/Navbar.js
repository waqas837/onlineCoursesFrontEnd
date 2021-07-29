import React,{useState} from "react";
import { MainSecondary, Maingrey, useStyles2 } from "../../Styles/Main.Styles";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.jpeg"
import Drawer from "../Drawer/Drawer";
import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { ExpandMore, Menu } from "@material-ui/icons";
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
}));

const Navbar = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [opendrawer,setopendrawer] = useState(false)
  return (
    <div>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={5}
        style={{ height: "60px"}}
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
            <Button size="small" className={classes.text}>
              Home
            </Button>
            <Button
              size="small"
              endIcon={<ExpandMore />}
              className={classes.text}
            >
              Courses
            </Button>
            <Button size="small" className={classes.text}>
              Blog
            </Button>
            <Button size="small" className={classes.text}>
              Contact
            </Button>
          </Box>
          <Box className={classes.hideNavigationForSmallScreen}>
            <Button
              className={classes2.buttonStyle}
              variant="contained"
              color="secondary"
              style={{ boxShadow: "none" }}
            >
              Login
            </Button>
            <Button
              className={classes2.buttonStyleOutlined}
              size="small"
              variant="outlined"
              color="secondary"
            >
              Signup
            </Button>
          </Box>
          <Hidden only={["xl", "lg", "md"]}>
            <Box ml="auto">
              <IconButton onClick={()=>setopendrawer(true)}>
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
