import { useEffect } from "react";
import Landingpage from "./Landingpage";
import Property from "./Property";
import LandingPageTwo from "./landingPageTwo";
// import Section from "./Section";

//animation
// import AOS from "aos";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Solutions from "./Solutions";
// import CircularSlide from "./CircularSlide";
import About from "./About";
import Ownership from "./Ownership";
import Unrivaled from "./Unrivaled";
import IdealPropertyGrid from "./IdealPropertyGrid";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Landingpage />
      <Solutions />
      <LandingPageTwo />
      <Property />
      <About />
      <Ownership/>
      <Unrivaled/>
      <IdealPropertyGrid/>
    </>
  );
};

export default Home;
