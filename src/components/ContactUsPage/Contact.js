import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import dummyimg from "../../images/img3.jpg";
import { useStyles } from "./Contact.styles";
import { ArrowRight } from "@material-ui/icons";
const Contact = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <Box mt={8}>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${dummyimg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "200px",
            boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
          }}
        >
          <Box pt={9} textAlign="center">
            <Typography
              variant="h5"
              style={{ color: "white", fontWeight: "bolder" }}
            >
              Contact
            </Typography>
            <Box>
              <Typography
                variant="body2"
                className={classes.home}
                onClick={() => history.push("/")}
              >
                Home
              </Typography>

              <Typography variant="body2" className={classes.about}>
                <ArrowRight id="icon" /> Contact
              </Typography>
            </Box>
          </Box>
        </div>
      </Box>
      {/* form for contact us */}
      <Box textAlign="center" my={4}>
        <Container>
          <Grid container spacing={3}>
            {/* first 6 cols */}
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              {" "}
              <OutlinedInput
                placeholder="Name"
                 
                className={classes.customWidthInput}
              />{" "}
              <OutlinedInput
                placeholder="Email"
                className={classes.customWidthInput}
              />
              <Box textAlign="left" mb={3}>
                
                <OutlinedInput
                  placeholder="Subject"
                  fullWidth
                  className={classes.outlinedInput}
                  // style={{ marginLeft: "-63px" }}
                />
              </Box>
              <OutlinedInput
                fullWidth
                placeholder="Message"
                multiline
                rows={5}
                style={{ borderRadius: "0px" }}
              />
              <Box textAlign="center" my={2}>
                
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ borderRadius: "40px" }}
                >
                  Submit your query
                </Button>
              </Box>
            </Grid>
            {/* second 6 cols */}
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box mb={12}>
                <Typography variant="h4">Phone no.</Typography>
                <Typography variant="body2">+009912341234</Typography>
              </Box>
              <Box>
                <Typography variant="h4">Our Email</Typography>
                <Typography variant="body2">Mtechub@gmail.com</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Contact;
