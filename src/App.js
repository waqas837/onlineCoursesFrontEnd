import React from "react";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TeacherForm from "./components/BecomeTeacherSection/TeacherForm";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CourseCategory from "./components/CourseCategories/CourseCategory";
const font = "Open Sans";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  },
  button: {
    textTransform: "capitalize",
  },
});
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ScrollToTopButton />
        <Navbar />
        <TeacherForm />
        <CourseCategory />
      </ThemeProvider>
    </div>
  );
}

export default App;
