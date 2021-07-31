import React from "react";
import "./Footer.css";
import {
  Box,
  Button,
  makeStyles,
  Grid,
  Paper,
  Typography,
  ButtonGroup,
  Container,
} from "@material-ui/core";
import {
  DraftsOutlined,
  PhoneInTalkOutlined,
  RoomOutlined,
} from "@material-ui/icons";
import logo from "../../../images/logo.jpeg";
import { grey } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  paper: {
    color: "white",
    background: "rgb(233,30,99)",
    borderRadius: "0px",
    width: "200px",
    height: "210px",
    [theme.breakpoints.down("sm")]: {
      color: "white",
      background: "rgb(233,30,99)",
      borderRadius: "0px",
      marginLeft: "48px",
      width: "200px"
    },
  },
  button: {
    borderRadius: "50px",
    borderColor: "white",
    color: "rgb(233,30,99)",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-30px",
      fontSize: "15px",
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        background: "rgb(38,40,44)",
        color: "white",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <Box textAlign="center">
        <Grid container>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Box mt={3}>
              <Box>
                <img src={logo} width="60px" height="55px" alt="" />
              </Box>
              <Box>
                <Typography variant="subtitle2" style={{ color: "grey" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text . When an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Box mt={3}>
              <Typography style={{ fontWeight: "bolder" }} variant="body1">
                Important Links
              </Typography>
            </Box>
            <Box mt={2}>
              <ul style={{ textAlign: "left" }}>
                <Container>
                  <li>About</li>
                  <li>Contact</li>
                  <li>FAQ</li>
                  <li>Blog</li>
                  <li>Shop</li>
                </Container>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Box mt={3}>
              <Typography
                style={{ marginBottom: "15px", fontWeight: "bold" }}
                variant="body1"
              >
                Contact Info
              </Typography>
              <Typography variant="body1">
                {" "}
                <RoomOutlined
                  fontSize="small"
                  style={{ color: grey[400] }}
                />{" "}
                Location:
              </Typography>
              <Typography variant="caption" style={{ color: grey[400] }}>
                1344 Joes Road, Kinderhook, NY, New York 12106.
              </Typography>
              <Typography variant="body1">
                <PhoneInTalkOutlined
                  fontSize="small"
                  style={{ color: grey[400] }}
                />{" "}
                Phone:
              </Typography>
              <Typography variant="caption" style={{ color: grey[400] }}>
                123-456-7890, 123-456-0101
              </Typography>
              <Typography variant="body1">
                <DraftsOutlined fontSize="small" style={{ color: grey[400] }} />{" "}
                Email:
              </Typography>
              <Typography variant="caption" style={{ color: grey[400] }}>
                hello@schooling.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Box textAlign="center" mt={3}>
              <Paper className={classes.paper}>
                <Typography variant="h5">Become a Teacher</Typography>
                <Box my={3}>
                  <Typography variant="body2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  size="medium"
                  className={classes.button}
                >
                  <Typography variant="body2">Join With Us</Typography>
                </Button>
              </Paper>
            </Box>
          </Grid>
         </Grid>
        <Box mt={5}>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typography variant="subtitle2" color="initial">
                © 2018, All Rights Reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typography variant="subtitle2" color="initial">
                <ButtonGroup>
                  <Button
                    variant="contained"
                    size="large"
                    style={{
                      borderRadius: "0px",
                      background: "rgb(233,30,99)",
                      color: "white",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "10px", fontWeight: "bolder" }}
                      variant="body2"
                    >
                      Our Feedback
                    </Typography>
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    style={{
                      borderRadius: "0px",
                      background: "rgb(233,30,99)",
                      color: "white",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "10px", fontWeight: "bolder" }}
                      variant="body2"
                    >
                      Our Twitter
                    </Typography>
                  </Button>
                </ButtonGroup>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
