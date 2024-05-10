import { PiHouseLineBold } from "react-icons/pi";
import { TbMapShare } from "react-icons/tb";
import { CiHeart, CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex">
          <ul className="flex bor width-50">
            <li>MONTE</li>
            <li>
              <button><TbMapShare/></button>
              <button><CiMenuFries /></button>
            </li>
          </ul>

          <ul className="flex width-50">
            <li className="property-facts">
              Lorem ipsum dolor sit, amet ducimus.
            </li>
            <li className="property-facts">
              Lorem ipsum dolor sit amet corrupti.
            </li>
            <li>
              <span> <CiHeart/></span>
              <span>
                <PiHouseLineBold />
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
