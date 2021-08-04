import React from "react";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar/Navbar";
import TeacherForm from "./components/Home/BecomeTeacherSection/TeacherForm";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CourseCategory from "./components/Home/CourseCategories/CourseCategory";
import AboutOurCompany from "./components/Home/AboutOurCompany/AboutOurCompany";
import PopularCourses from "./components/Home/PopularCourses/PopularCourses";
import Calcluations from "./components/Home/Calculations/Calcluations";
import FeaturedInstructors from "./components/Home/FeaturedInstructors/FeaturedInstructors";
import UpcomingEvents from "./components/Home/UpcomingEvents/UpcomingEvents";
import LatestNews from "./components/Home/LatestNews/LatestNews";
import OurSponsers from "./components/Home/OurSponsers/OurSponsers";
import BecomePartner from "./components/Home/BecomePartner/BecomePartner";
import Footer from "./components/Home/Footer/Footer";
import AllCourses from "./components/Courses/AllCourses";
import ShowSingleCourseDetails from "./components/Courses/ShowSingleCourseDetails/ShowSingleCourseDetails";
import AboutUs from "./components/AboutUsPage/AboutUs";
import Contact from "./components/ContactUsPage/Contact";
import ApiTestOptimization from "./components/ApiTestOptimization";
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
        <Router>
        {/* Home route*/}
       <Route exact path="/">
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
        <BecomePartner />
        <Footer/>
       </Route>
       {/* Courses Route */}
       <Route exact path="/courses">
       <ScrollToTopButton />
       <Navbar/>
       <AllCourses/>
       <Footer/>
       </Route>
       <Route exact path="/courses/showPrices">
       <ScrollToTopButton />
       <Navbar/>
       <ShowSingleCourseDetails/>
       <Footer/>
       </Route>
       {/* about route */}
       <Route exact path="/about">
       <ScrollToTopButton />
       <Navbar/>
       <AboutUs/>
       <Footer/>
       </Route>
        {/* contact route */}
        <Route exact path="/contactus">
       <ScrollToTopButton />
       <Navbar/>
       <Contact/>
       <Footer/>
       </Route>
       {/* api rest response */}
        {/* contact route */}
        <Route exact path="/apiTest">
       <ApiTestOptimization/>
       </Route>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
