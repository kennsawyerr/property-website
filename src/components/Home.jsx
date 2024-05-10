import { useEffect } from "react";
import Landingpage from "./Landingpage";
import Property from "./Property";
import LandingPageTwo from "./landingPageTwo";


//animation
// import AOS from "aos";
import  AOS  from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import CircularSlide from "./CircularSlide";
const Home = () => {

    useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Navbar/>
      <Landingpage />
      <LandingPageTwo />
      <Property />
      <CircularSlide/>
 
    </>
  );
};

export default Home;
