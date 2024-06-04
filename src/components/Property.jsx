import Image1 from "../assets/images/alSufouh.jpg";
import Image2 from "../assets/images/apartment.jpg";
import Image3 from "../assets/images/dubai-place.jpg";
import Image4 from "../assets/images/apartment.jpg";
import Image5 from "../assets/images/dubai-sky.jpg";
import Image6 from "../assets/images/dubai-creek.jpg";
const Property = () => {
  return (
    <>
      <h2>Explore Our Property Portfolio</h2>
      <section className="property-bg ">
        <ul className="grid property-container">
          <li className="grid-item">
            <img src={Image1} alt="a house" />
          </li>
          <li className="grid-item">
            <img src={Image2} alt="a house" />
          </li>
          <li className="grid-item">
            <img src={Image3} alt="a house" />
          </li>
          <li className="grid-item">
            <img src={Image4} alt="a house" />
          </li>
          <li className="grid-item">
            <img src={Image5} alt="a house" />
          </li>
          <li className="grid-item">
            <img src={Image6} alt="a house" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Property;
