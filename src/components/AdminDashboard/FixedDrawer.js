import React from "react";
import { NavLink } from "react-router-dom";
import handcr from "../../images/afaaq bhai.jpg";
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Tooltip,
  Typography,
  IconButton,
} from "@material-ui/core";
import {
  AssignmentLate,
  Dashboard,
  LocalActivity,
  NotificationsActive,
  Person,
  FormatListBulleted,
  Comment,
  FindInPage,
  MoreVert,
} from "@material-ui/icons";
import {
  brown,
  green,
  grey,
  pink,
  purple,
  red,
  teal,
  yellow,
} from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  drawer: {
    marginTop: "61px",
    background: "rgb(24,29,30)",
    padding: 10,
    paddingLeft: 0,
  },
  marginListItems: {
    marginBottom: "10px",
  },
  activeLink: {
    background: "black",
    borderLeft: `3px solid rgb(0,143,229)`,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    color: grey[200],
  },
}));
const FixedDrawer = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Drawer
          variant="permanent"
          anchor="left"
          // overide the css of drawer
          classes={{ paper: classes.drawer }}
        >
          <List>
            {/* user image */}
            <Box display="flex" justifyContent="space-around">
              <img
                src={handcr}
                width="40px"
                height="40px"
                style={{ borderRadius: "100px", marginLeft: "5px" }}
                variant="body1"
                alt=""
              />
              <Typography variant="subtitle1" style={{ color: "white" }}>
                Afaq bhai <br />
                <Typography variant="caption" style={{ color: "white" }}>
                  Sales Manager
                </Typography>
              </Typography>
              <IconButton>
                <MoreVert style={{ color: yellow[900]}} />
              </IconButton>
            </Box>
            {/* some headings */}
            <Box textAlign="center" my={3}>
              <Typography variant="h6" style={{ color: "white" }}>
                Navigations
              </Typography>
            </Box>
            {/* item 1 */}
            <Tooltip title="Dashboard" arrow>
              <ListItem
                button
                className={classes.marginListItems}
                component={NavLink}
                to="/admin"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <Dashboard fontSize="small" style={{ color: "#2196f3" }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Tooltip>

            {/* item 2 */}
            <Tooltip title="Search User" arrow>
              <ListItem
                button
                className={classes.marginListItems}
                component={NavLink}
                to="/searchUser"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <Person fontSize="small" style={{ color: yellow[200] }} />
                </ListItemIcon>
                <ListItemText primary="Users" style={{ color: grey[400] }} />
              </ListItem>
            </Tooltip>
            {/* item 3 */}
            <Tooltip title="User List" arrow>
              <ListItem
                button
                className={classes.marginListItems}
                component={NavLink}
                to="/userlist"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <FormatListBulleted
                    fontSize="small"
                    style={{ color: red[400] }}
                  />
                </ListItemIcon>
                <ListItemText primary="Courses" style={{ color: grey[400] }} />
              </ListItem>
            </Tooltip>
            {/* item 4 */}
            <Tooltip title="New Courses" arrow>
              <ListItem
                button
                className={classes.marginListItems}
                component={NavLink}
                to="/posts"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <LocalActivity
                    fontSize="small"
                    style={{ color: green[400] }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="New Courses"
                  style={{ color: grey[400] }}
                />
              </ListItem>
            </Tooltip>
            {/* item 5*/}
            <Tooltip title="Incidents" arrow>
              <ListItem
                button
                className={classes.marginListItems}
                component={NavLink}
                to="/incidents"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <FindInPage fontSize="small" style={{ color: pink[400] }} />
                </ListItemIcon>
                <ListItemText primary="Teachers" style={{ color: grey[400] }} />
              </ListItem>
            </Tooltip>
            {/* item 6 */}
            <Tooltip title="Alerts" arrow>
              <ListItem
                button
                component={NavLink}
                to="/alerts"
                exact
                activeClassName={classes.activeLink}
                className={classes.marginListItems}
              >
                <ListItemIcon>
                  <AssignmentLate
                    fontSize="small"
                    style={{ color: teal[400] }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Search By Rates"
                  style={{ color: grey[400] }}
                />
              </ListItem>
            </Tooltip>
            {/* Comment item 7 */}
            <Tooltip title="Comments" arrow>
              <ListItem
                button
                component={NavLink}
                className={classes.marginListItems}
                to="/comments"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <Comment fontSize="small" style={{ color: purple[400] }} />
                </ListItemIcon>
                <ListItemText
                  primary="Experienced Teachers"
                  style={{ color: grey[400] }}
                />
              </ListItem>
            </Tooltip>
            {/* Comment item 8 */}
            <Tooltip title="Notifications" arrow>
              <ListItem
                button
                component={NavLink}
                className={classes.marginListItems}
                to="/notifications"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <NotificationsActive
                    fontSize="small"
                    style={{ color: brown[400] }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Courses Categories"
                  style={{ color: grey[400] }}
                />
              </ListItem>
            </Tooltip>
          </List>
        </Drawer>
      </Container>
    </div>
  );
};

export default FixedDrawer;
