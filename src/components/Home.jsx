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
    </>
  );
};

export default Home;
