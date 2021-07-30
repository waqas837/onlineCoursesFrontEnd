import React from "react";
import {
  Box,
  Button,
  makeStyles,
  Grid,
  Paper,
  Typography,
  ButtonGroup,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    color: "white",
    background: "rgb(233,30,99)",
    borderRadius: "0px",
    width: "70%",
    height: "210px",
    [theme.breakpoints.down("sm")]: {
      color: "white",
      background: "rgb(233,30,99)",
      borderRadius: "0px",
      marginLeft:"80px"
    },
  },
  button: {
    borderRadius: "50px",
    borderColor: "white",
    color: "rgb(233,30,99)",
    fontWeight: "bold",
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
              <Box>Logo</Box>
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
              <Typography variant="body1">Important Links</Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="subtitle2">Important Links</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Important Links</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Important Links</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Important Links</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Box mt={3}>
              <Typography variant="body1">Contact Info</Typography>
              <Typography variant="body1">Location:</Typography>
              <Typography variant="body1">Phone:</Typography>
              <Typography variant="body1">Email:</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Box mt={3}>
              <Paper className={classes.paper}>
                <Typography variant="h5">Become a Teacher</Typography>
                <Box my={3}>
                  <Typography variant="body2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Typography>
                </Box>{" "}
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
          <Box></Box>
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
