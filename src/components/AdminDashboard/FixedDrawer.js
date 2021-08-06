import React, { useState } from "react";
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
  Zoom,
  Hidden,
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
  ListItemText: {
    fontSize: 14,
  },
}));
const FixedDrawer = ({ open, setopen }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <Hidden only={["sm", "xs"]}>
        <Container>
          <Drawer
            variant="permanent"
            anchor="left"
            // overide the css of drawer
            classes={{ paper: classes.drawer }}
          >
            <Zoom in={checked}>
              <List style={{ width: 190 }}>
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
                    John <br />
                    <Typography variant="caption" style={{ color: "white" }}>
                      Sales Manager
                    </Typography>
                  </Typography>
                  <IconButton>
                    <MoreVert style={{ color: yellow[900] }} />
                  </IconButton>
                </Box>
                {/* some headings */}
                <Box textAlign="center" my={3}>
                  <Typography variant="h6" style={{ color: grey[500] }}>
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
                      <Dashboard
                        fontSize="small"
                        style={{ color: "#2196f3", fontSize: "15px" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.ListItemText,
                      }}
                      primary="Dashboard"
                      style={{ color: grey[400] }}
                    />
                  </ListItem>
                </Tooltip>

                {/* item 2 */}
                <Tooltip title="Users" arrow>
                  <ListItem
                    button
                    className={classes.marginListItems}
                    component={NavLink}
                    to="/admin/users"
                    exact
                    activeClassName={classes.activeLink}
                  >
                    <ListItemIcon>
                      <Person
                        fontSize="small"
                        style={{ color: yellow[200], fontSize: 15 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Users"
                      classes={{
                        primary: classes.ListItemText,
                      }}
                      style={{ color: grey[400] }}
                    />
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
                        style={{ color: red[400], fontSize: 15 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.ListItemText,
                      }}
                      primary="Courses"
                      style={{ color: grey[400] }}
                    />
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
                        style={{ color: green[400], fontSize: 15 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.ListItemText,
                      }}
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
                      <FindInPage
                        fontSize="small"
                        style={{ color: pink[400], fontSize: 15 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.ListItemText,
                      }}
                      primary="Teachers"
                      style={{ color: grey[400] }}
                    />
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
                        style={{ color: teal[400], fontSize: 15 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.ListItemText,
                      }}
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
                      <Comment
                        fontSize="small"
                        style={{ color: purple[400], fontSize: 15 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.ListItemText,
                      }}
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
            </Zoom>
          </Drawer>
        </Container>
      </Hidden>

      {/* This drawer will show only small screens */}
      <Hidden only={["xl", "lg", "md"]}>
        <Container>
          <Drawer
            anchor="top"
            // overide the css of drawer
            classes={{ paper: classes.drawer }}
            open={open}
            onClose={() => setopen(false)}
          >
            <Zoom in={checked}>
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
                    John
                  </Typography>
                  <IconButton>
                    <MoreVert style={{ color: yellow[900] }} />
                  </IconButton>
                </Box>
                {/* some headings */}
                <Box textAlign="center" my={3}>
                  <Typography variant="h6" style={{ color: grey[500] }}>
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
                      <Dashboard
                        fontSize="small"
                        style={{ color: "#2196f3", fontSize: "15px" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.ListItemText,
                      }}
                      primary="Dashboard"
                      style={{ color: grey[400] }}
                    />
                  </ListItem>
                </Tooltip>

                {/* item 2 */}
                <Tooltip title="Users" arrow>
                  <ListItem
                    button
                    className={classes.marginListItems}
                    component={NavLink}
                    to="/admin/users"
                    exact
                    activeClassName={classes.activeLink}
                  >
                    <ListItemIcon>
                      <Person
                        fontSize="small"
                        style={{ color: yellow[200], fontSize: 15 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Users"
                      classes={{
                        primary: classes.ListItemText,
                      }}
                      style={{ color: grey[400] }}
                    />
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
                        style={{ color: red[400], fontSize: 15 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.ListItemText,
                      }}
                      primary="Courses"
                      style={{ color: grey[400] }}
                    />
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
                        style={{ color: green[400], fontSize: 15 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.ListItemText,
                      }}
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
                      <FindInPage
                        fontSize="small"
                        style={{ color: pink[400], fontSize: 15 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.ListItemText,
                      }}
                      primary="Teachers"
                      style={{ color: grey[400] }}
                    />
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
                        style={{ color: teal[400], fontSize: 15 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.ListItemText,
                      }}
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
                      <Comment
                        fontSize="small"
                        style={{ color: purple[400], fontSize: 15 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.ListItemText,
                      }}
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
            </Zoom>
          </Drawer>
        </Container>
      </Hidden>
    </div>
  );
};

export default FixedDrawer;
