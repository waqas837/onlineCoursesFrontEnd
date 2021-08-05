import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Tooltip,
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
} from "@material-ui/icons";
import { grey, yellow } from "@material-ui/core/colors";
 const useStyles = makeStyles((theme) => ({
  drawer: {
    marginTop: "61px",
    background:"rgb(24,29,30)",
    padding:10,
    paddingLeft:0
  },
  marginListItems: {
    marginBottom: "10px",
  },
  activeLink: {
    background: "rgb(16,16,22)",
    borderLeft: `3px solid rgb(0,143,229)`,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    color:grey[200]
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
                  <Dashboard fontSize="small" style={{color:"#2196f3"}}/>
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
                  <Person fontSize="small" style={{color:yellow[200]}}/>
                </ListItemIcon>
                <ListItemText primary="Users" style={{color:grey[400]}} />
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
                  <FormatListBulleted fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Courses" />
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
                  <LocalActivity fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="New Courses" />
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
                  <FindInPage fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
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
                  <AssignmentLate fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Search By Rates" />
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
                  <Comment fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Experienced Teachers" />
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
                  <NotificationsActive fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Courses Categories" />
              </ListItem>
            </Tooltip>
          </List>
        </Drawer>
      </Container>
    </div>
  );
};

export default FixedDrawer;
