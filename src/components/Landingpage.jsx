import { useState } from "react";
import CircularSlide from "./CircularSlide";
import DubaiCreek from "./dubai-1.jpg";
// import { motion } from "framer-motion";

const Landingpage = () => {
  const [text] = useState("hope and all formLandingpg");
  return (
    <>
      <section className="container">
        <main className="">
          {/* <motion.div *
            initial={{ x: 0 }}
            animate={{ x: 100 }}
  transition={{ duration: 2, ease: "easeInOut" }} 
          >*/}
          <div className="hero-textcont">
            <h5>Building your Dreams</h5>
            <h1>Real Estate in Dubai: Ideal for those living in Dubai</h1>
            <CircularSlide herotext={text} />
          </div>
          <div className="hero-imgcont">
            <img src={DubaiCreek} alt="" />
          </div>
          {/* </motion.div> */}
        </main>
      </section>
    </>
  );
};

export default Landingpage;
