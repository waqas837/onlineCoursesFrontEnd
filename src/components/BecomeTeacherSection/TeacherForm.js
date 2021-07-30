import React from "react";
import {
  Box,
  Button,
  OutlinedInput,
  Grid,
  Paper,
  Typography,
  Container,
} from "@material-ui/core";
import { useStyles2 } from "../Navbar/Main.Styles";
import image from "../../images/manbag.jpg";
const TeacherForm = () => {
  const classes = useStyles2();
  return (
    <div>
      <Box mt={7}>
        {/* main line*/}
        <Grid container>
          {/* first section for form */}

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            {/* headings */}
            <Box style={{ background: "rgb(158,7,105)" }} pb={9}>
              {/* becocome a teacher */}
              <Box py={2} textAlign="center">
                <Typography variant="h4" className={classes.text}>
                  Become a Teacher
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="subtitle2" className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus, quaerat beatae nulla debitis vitae.
                </Typography>
              </Box>
              {/* form */}
              <Box textAlign="center">
                <Container maxWidth="xs">
                  <Paper className={classes.paper} component={Box} py={3} elevation={10}>
                    <Box my={1}>
                      <OutlinedInput placeholder="Your Name" className={classes.input} />
                    </Box>
                    <Box my={1}>
                      <OutlinedInput placeholder="Email" className={classes.input} />
                    </Box>
                    <Box my={1}>
                      <OutlinedInput placeholder="Phone" className={classes.input} />
                    </Box>
                    <Box textAlign="center" my={2}>
                      <Button
                        className={classes.buttonStyle}
                        color="secondary"
                        style={{ boxShadow: "none" }}
                        variant="contained"
                        size="large"
                      >
                        Send Request
                      </Button>
                    </Box>
                  </Paper>
                </Container>
              </Box>
            </Box>
          </Grid>

          {/* second section for image */}
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <img
              style={{ objectFit: "cover" }}
              width="100%"
              height="500px"
              src={image}
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default TeacherForm;
