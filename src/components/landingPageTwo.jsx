import DubaiCreek from "../assets/images/dubai-sky.jpg";
// import { useState, useEffect } from "react";

const LandingPageTwo = () => {
  // const [scrollingText, setScrollingText] =useState("")

  return (
    <>
      <section className="scrolling-text-pg">
        <img src={DubaiCreek} alt="" className="" />

        <div className="textScroll-slide">
          <div className="textScroll">
            With an initial payment of 25,000 , interest free, get the property
            of your dreams.
          </div>
          <div className="textScroll">
            With an initial payment of 25,000 , interest free, get the property
            of your dreams.
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPageTwo;
