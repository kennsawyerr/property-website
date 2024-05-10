import { PiHouseLineBold } from "react-icons/pi";
import { TbMapShare } from "react-icons/tb";
import { CiHeart, CiMenuFries } from "react-icons/ci";
import { useState } from "react";
const Navbar = () => {
  const [toggleBtn, setToggleBtn] =useState(false);
 const handleNavbar =() => {
  setToggleBtn(!toggleBtn)
 }

  return (
    <>
      <nav>
        <div className="flex container space-btw gap-1">
          <ul className={`navflex width-50 space-btw`}>
            <li className="">MONTE</li>
            <li>
              <button>
                <TbMapShare size={30} />
              </button>
              <button>
                <CiMenuFries
                  onClick={handleNavbar}
                  className="icon-button"
                  color="black"
                  size={30}
                />
              </button>
            </li>
          </ul>

          <ul
            className={`flex width-50 space-btw hide`}
          >
            <li className="property-facts">
              Lorem ipsum dolor sit, amet ducimus.
            </li>
            <li className="property-facts">
              Al Sufouh beach welcomes 300 tourist daily.
            </li>
            <li>
              <button>
                <CiHeart color="white" size={30} />
              </button>

              <button>
                <PiHouseLineBold color="white" size={30} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
