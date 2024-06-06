import { IoIosArrowDown } from "react-icons/io";
const Frequently = () => {
  return (
    <>
      <section className="container faqs">
        <div className="clients-grid"></div>
        <div className="flex">
          <div className="text-box">
            <h1>Frequently Asked Questions</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              consequuntur doloremque.
            </p>
          </div>
          <ul className="faqs-box">
            <li>
              <div className="flex space-even">
              <h3>Lorem ipsum dolor sit amet consectetur?</h3>
              <IoIosArrowDown />
              </div>
              <p className="hide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, eaque. Inventore!
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Frequently;
