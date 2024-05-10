import { useState } from "react";
import CircularSlide from "./CircularSlide";
import DubaiCreek from "../assets/images/alSufouh.jpg";
// import { motion } from "framer-motion";

const Landingpage = () => {
  const [text] = useState("hope and all formLandingpg");
  return (
    <>
      <section className="">
        <main className="">
          {/* <motion.div *
            initial={{ x: 0 }}
            animate={{ x: 100 }}
  transition={{ duration: 2, ease: "easeInOut" }} 
          >*/}
          <div className="hero-textcont">
            <h5>Building your Dreams</h5>
            <h1 className="hero-text">Real Estate in Dubai: Ideal for  living and Investing</h1>
            <CircularSlide herotext={text} />
          </div>
          <div className="hero-imgcont">
            <img src={DubaiCreek} className="hero-img" alt="" />
          </div>
          {/* </motion.div> */}
        </main>
      </section>
    </>
  );
};

export default Landingpage;
