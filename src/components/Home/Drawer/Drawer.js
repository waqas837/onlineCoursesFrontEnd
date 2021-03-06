import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  Home,
  CloseOutlined,
  PhoneInTalk,
  Book,
  MenuBook,
  ExitToApp,
  VpnKey,
  ExitToAppOutlined,
} from "@material-ui/icons";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  SwipeableDrawer,
} from "@material-ui/core";
import logo from "../../../images/logo.jpeg";
import { grey } from "@material-ui/core/colors";
import Cookies from "js-cookie";
var MainSecondary = "rgb(233,30,99)";
// main
const useStyles = makeStyles((theme) => ({
  activeLink: {
    borderLeft: `3px solid ${MainSecondary}`,
    borderRadius: "0px",
    background: grey[100],
  },
}));
const Drawer = ({
  opendrawer,
  setopendrawer,
  setloginDialog,
  setsignupdialog,
  logout,
}) => {
  const classes = useStyles();
  return (
    <div>
      <SwipeableDrawer
        open={opendrawer}
        onClose={() => setopendrawer(false)}
        anchor="left"
      >
        <List style={{ width: "240px" }}>
          {/* logo */}
          <ListItem button>
            <img src={logo} width="100px" height="60px" alt="" />
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => setopendrawer(false)}
            >
              <CloseOutlined />
            </IconButton>
          </ListItem>
          <Divider />
          {/* Home */}
          <ListItem
            button
            component={NavLink}
            to="/"
            exact
            activeClassName={classes.activeLink}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          {/* Courses */}
          <ListItem
            button
            component={NavLink}
            to="/courses"
            activeClassName={classes.activeLink}
          >
            <ListItemIcon>
              <MenuBook />
            </ListItemIcon>
            <ListItemText primary="Courses" />
          </ListItem>

          {/* About*/}
          <ListItem
            button
            component={NavLink}
            to="/about"
            exact
            activeClassName={classes.activeLink}
          >
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>

          {/* contact*/}
          <ListItem
            button
            component={NavLink}
            to="/contactus"
            exact
            activeClassName={classes.activeLink}
          >
            <ListItemIcon>
              <PhoneInTalk />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          {Cookies.get("user") ? (
            <ListItem button onClick={logout}>
              <ListItemIcon>
                <ExitToAppOutlined />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          ) : (
            <div>
              <ListItem button onClick={() => setsignupdialog(true)}>
                <ListItemIcon>
                  <VpnKey />
                </ListItemIcon>
                <ListItemText primary="Sign Up" />
              </ListItem>

              <ListItem button onClick={() => setloginDialog(true)}>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItem>
            </div>
          )}
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
