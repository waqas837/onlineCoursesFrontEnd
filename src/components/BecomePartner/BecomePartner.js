import React from "react";
import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import { useStyels } from "./BecomeParter.styles";
import dummyimg from "../../images/prtenr.jpg";
const BecomePartner = () => {
  const classes = useStyels();
  return (
    <div>
      <Box my={5}>
        <div
          style={{
            backgroundImage: `url(${dummyimg})`,
            backgroundSize: "100% 100%",
            width: "100%",
            height: "100vh",
            boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* heading 1 */}
          <Box textAlign="center" >
            <Container maxWidth="xs" style={{position: "relative"}}>
              <Paper className={classes.paper}>
                <Typography variant="h5">Become a Teacher</Typography>
                 <Box my={3}>
                  <Typography variant="body2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Typography>
                </Box>{" "}
                <Button
                  variant="outlined"
                  size="large"
                  className={classes.button}
                >
                  <Typography variant="body2">Join With Us</Typography>
                </Button>
              </Paper>
            </Container>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default BecomePartner;
