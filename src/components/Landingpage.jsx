
import CircularSlide from "./CircularSlide";
import DubaiCreek from "../assets/images/alSufouh.jpg";

const Landingpage = () => {
  
  return (
    <>
      <section className="">
        <main className="">
          <div className="hero-textcont">
            <h5>Building your Dreams</h5>
            <h1 className="hero-text">
              Real Estate in Dubai: Ideal for living and Investing
            </h1>
            <CircularSlide  ballWidth={300} ballSizeX={50} />
          </div>
          <div className="hero-imgcont">
            <img src={DubaiCreek} className="hero-img" alt="" />
          </div>
        </main>
      </section>
    </>
  );
};

export default Landingpage;
