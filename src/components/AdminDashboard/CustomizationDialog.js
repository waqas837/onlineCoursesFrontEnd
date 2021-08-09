import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import axios from "axios";
import { coursesApi } from "../../Api";
// main
const CustomizationDialog = ({
  openCustomize,
  setopenCustomize,
  customizeValue,
}) => {
  // write logics here
  axios.defaults.withCredentials = true;
  const [state, setstate] = useState([]);
  const [state2, setstate2] = useState([]);
  // add a course field
  const addCourseField = async () => {
    try {
      const { data } = await axios.post(`${coursesApi}/addCourseField`, state);
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  // add a language field
  const addLanguageField = async () => {
    try {
      const { data } = await axios.post(
        `${coursesApi}/addLanguageField`,
        state2
      );
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog open={openCustomize} onClose={() => setopenCustomize(false)}>
        <DialogTitle>
          <Box mb={3} display="flex" justifyContent="space-around">
            <Typography variant="h6">Add Custom Field</Typography>
            <IconButton
              onClick={() => setopenCustomize(false)}
              style={{ marginTop: -5 }}
            >
              <Close fontSize="small" color="secondary" />
            </IconButton>
          </Box>

          {/* iife for courses */}
          {(() => {
            if (customizeValue === "courseCustomize") {
              return (
                <React.Fragment>
                  <OutlinedInput
                    placeholder="Write a Correct Field"
                    style={{ height: "30px", borderRadius: 0 }}
                    onChange={(e) =>
                      setstate({ ...state, title: e.target.value })
                    }
                  />
                  <DialogActions>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      style={{ borderRaduis: 0 }}
                      onClick={addCourseField}
                    >
                      Add Course
                    </Button>
                  </DialogActions>
                </React.Fragment>
              );
            }
          })()}
          {/* iife for languages */}
          {(() => {
            if (customizeValue === "languageCustomize") {
              return (
                <React.Fragment>
                  <OutlinedInput
                    placeholder="Write a Correct Field"
                    style={{ height: "30px", borderRadius: 0 }}
                    onChange={(e) =>
                      setstate2({ ...state2, title: e.target.value })
                    }
                  />
                  <DialogActions>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      style={{ borderRaduis: 0 }}
                      onClick={addLanguageField}
                    >
                      Add Language
                    </Button>
                  </DialogActions>
                </React.Fragment>
              );
            }
          })()}
        </DialogTitle>
      </Dialog>
    </div>
  );
};

export default CustomizationDialog;
