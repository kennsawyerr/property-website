import Image1 from "../assets/images/dubai-place.jpg";
import Image2 from "../assets/images/dubai-place.jpg";
import Image3 from "../assets/images/dubai-place.jpg";
import Image4 from "../assets/images/dubai-place.jpg";
import Image5 from "../assets/images/dubai-place.jpg";
import Image6 from "../assets/images/dubai-place.jpg";
const Property = () => {
  return (
    <>
      <section className="property-bg">
        <ul className="grid property-container">
          <li>
            <img src={Image1} alt="" />
          </li>
          <li>
            <img src={Image2} alt="" />
          </li>
          <li>
            <img src={Image3} alt="" />
          </li>
          <li>
            <img src={Image4} alt="" />
          </li>
          <li>
            <img src={Image5} alt="" />
          </li>
          <li>
            <img src={Image6} alt="" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Property;
