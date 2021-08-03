import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  Box,
  OutlinedInput,
  Button,
  IconButton,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
const MainDialog = ({ loginDialog, setloginDialog }) => {
  return (
    <div>
      <Dialog open={loginDialog} onClose={() => setloginDialog(false)}>
        <DialogTitle>
          <Box textAlign="center" my={2}>
            <Typography variant="h5">Login</Typography>
          </Box>{" "}
          <IconButton
            style={{ marginLeft: "180px", marginTop: "-140px" }}
            onClick={() => setloginDialog(false)}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box mb={2}>
            <OutlinedInput placeholder="Email" style={{ height: "34px" }} />
          </Box>
          <Box mb={2}>
            <OutlinedInput placeholder="Password" style={{ height: "34px" }} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" size="small">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MainDialog;
