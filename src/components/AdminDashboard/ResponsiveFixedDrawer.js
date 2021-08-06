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
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
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
  ListItemText:{
    fontSize:12
  },
   
}));
const ResponsiveFixedDrawer = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  return (
    <div>
    
    
    </div>
  );
};

export default ResponsiveFixedDrawer;
