
import Landingpage from "./Landingpage";
import Property from "./Property";
import LandingPageTwo from "./landingPageTwo";
// import Section from "./Section";

//animation

import Navbar from "./Navbar";
import Solutions from "./Solutions";
// import CircularSlide from "./CircularSlide";
import About from "./About";
import Ownership from "./Ownership";
import Unrivaled from "./Unrivaled";
import IdealPropertyGrid from "./IdealPropertyGrid";
import Frequently from "./Frequently";
import BuildYourFuture from "./BuildYourFuture";
import Footer from "./Footer";
const Home = () => {

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
      <Frequently/>
      <BuildYourFuture/>
      <Footer/>
    </>
  );
};

export default Home;
