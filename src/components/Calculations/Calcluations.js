import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  responsive: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  spacing: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "40px",
    },
  },
}));
const Calcluations = () => {
  const classes = useStyles();
  return (
    <div>
      <Box my={3} py={5} style={{ background: "rgb(233,30,99)" }}>
        <Container>
          <Box
            display="flex"
            justifyContent="space-around"
            className={classes.responsive}
          >
            <Box textAlign="center" className={classes.spacing}>
              <Typography
                style={{ color: "white", fontWeight: "bolder" }}
                variant="h4"
                color="initial" 
              >
                100%
              </Typography>
              <Typography
                style={{ color: "white", fontWeight: "bolder" }}
                variant="body1"
                color="initial"
              >
                Success Rate
              </Typography>
              
            </Box>

            <Box textAlign="center" className={classes.spacing}>
              <Typography
                style={{ color: "white", fontWeight: "bolder" }}
                variant="h4"
                color="initial"
              >
                12 +
              </Typography>
              <Typography
                style={{ color: "white", fontWeight: "bolder" }}
                variant="body1"
                color="initial"
              >
                Years of Service
              </Typography>
            </Box>

            <Box textAlign="center" className={classes.spacing}>
              <Typography
                style={{ color: "white", fontWeight: "bolder" }}
                variant="h4"
                color="initial"
              >
                135 k+
              </Typography>
              <Typography
                style={{ color: "white", fontWeight: "bolder" }}
                variant="body1"
                color="initial"
              >
                Students
              </Typography>
            </Box>

            <Box textAlign="center" className={classes.spacing}>
              <Typography
                style={{ color: "white", fontWeight: "bolder" }}
                variant="h4"
                color="initial"
              >
                500 +
              </Typography>
              <Typography
                style={{ color: "white", fontWeight: "bolder" }}
                variant="body1"
                color="initial"
              >
                Courses
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Calcluations;
