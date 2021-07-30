import React from "react";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TeacherForm from "./components/BecomeTeacherSection/TeacherForm";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CourseCategory from "./components/CourseCategories/CourseCategory";
import AboutOurCompany from "./components/AboutOurCompany/AboutOurCompany";
import PopularCourses from "./components/PopularCourses/PopularCourses";
import Calcluations from "./components/Calculations/Calcluations";
import FeaturedInstructors from "./components/FeaturedInstructors/FeaturedInstructors";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import LatestNews from "./components/LatestNews/LatestNews";
import OurSponsers from "./components/OurSponsers/OurSponsers";
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
        <AboutOurCompany />
        <PopularCourses />
        <Calcluations />
        <FeaturedInstructors />
        <UpcomingEvents />
        <LatestNews />
        <OurSponsers />
      </ThemeProvider>
    </div>
  );
}

export default App;
