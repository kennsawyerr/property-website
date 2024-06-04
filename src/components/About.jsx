import DubaiCreek from "../assets/images/dubai-place.jpg";
import TestimonialPortrait1 from "../assets/images/person-1.jpeg"
import TestimonialPortrait2 from "../assets/images/person-2.jpg"
import TestimonialPortrait3 from "../assets/images/person-3.jpg"
import TestimonialPortrait4 from "../assets/images/person-4.jpg"

const About = () => {
  //   const [] = useState("hope and all formLandingpg");
  return (
    <>
      <section className="About-section">
        <main className="bor">
          <div className="hero-textcont">
            <div className="textcont">
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                asperiores sunt tempora totam accusamus consequuntur non. Animi
                esse nemo quisquam?
              </h5>

              <div className="testimonial-img-cont">
                <img src={TestimonialPortrait1} alt="client portrait image" className="testimonial-img" />
                <img src={TestimonialPortrait2} alt="client portrait image" className="testimonial-img" />
                <img src={TestimonialPortrait3} alt="client portrait image" className="testimonial-img" />
                <img src={TestimonialPortrait4} alt="client portrait image" className="testimonial-img" />
              </div>
            </div>

            <ul className="about">
              <li className="flex gap-1rem space-even">
                <div className="service-numbers">93</div>
                <div className="textcont">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi!
                </div>
              </li>

              <li className="flex gap-1rem space-even">
                <div className="service-numbers">91%</div>
                <div className="textcont">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi!
                </div>
              </li>

              <li className="flex gap-1rem space-even">
                <div className="service-numbers">467</div>
                <div className="textcont">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi!
                </div>
              </li>
            </ul>
          </div>
          <div className="hero-imgcont">
            <img src={DubaiCreek} className="hero-img" alt="" />
          </div>
        </main>
      </section>
    </>
  );
};

export default About;
