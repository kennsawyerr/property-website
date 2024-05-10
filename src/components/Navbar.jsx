import { PiHouseLineBold } from "react-icons/pi";
import { TbMapShare } from "react-icons/tb";
import { CiHeart, CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex container space-btw">
          <ul className="flex bor width-50 space-btw">
            <li>MONTE</li>
            <li>
              <button>
                <TbMapShare />
              </button>
              <button>
                <CiMenuFries className="icon-button" color="black" />
              </button>
            </li>
          </ul>

          <ul className="flex width-50 space-btw">
            <li className="property-facts">
              Lorem ipsum dolor sit, amet ducimus.
            </li>
            <li className="property-facts">
              Lorem ipsum dolor sit amet corrupti.
            </li>
            <li>
              <span>
                {" "}
                <CiHeart color="white" width={50} />
              </span>
              <span>
                <PiHouseLineBold color="white" />
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
