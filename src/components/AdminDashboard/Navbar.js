import React from "react";
import { MainCyan, Maingrey } from "./Main.Styles";
import { NavLink } from "react-router-dom";
import FixedDrawer from "./FixedDrawer";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
  Tooltip,
} from "@material-ui/core";
import { Menu, Search, Settings } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
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
      marginLeft: theme.spacing(3),
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
    borderBottom: `2px solid ${MainCyan}`,
    borderRadius: "0px",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        position="static"
        color="inherit"
        elevation={1}
        style={{ height: "60px" , background: "rgb(24,29,30)"}}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Menu style={{ color: Maingrey }} />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search style={{ color: Maingrey }} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {/* space generator */}
          <Box className={classes.grow}></Box>
          <Box
          // style={{
          //   boxShadow: "0 1px 2px rgb(0 0 0 / 0.2)",
          // }}
          >
            <Tooltip title="Settings" arrow>
              <IconButton
                component={NavLink}
                to="/setting"
                exact
                activeClassName={classes.activeLink}
              >
                <Settings fontSize="small" style={{ color: MainCyan }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <FixedDrawer />
    </div>
  );
};

export default Navbar;
