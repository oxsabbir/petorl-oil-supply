import { useState } from "react";
import { navMenu } from "../constant/constant";
import icons from "../icon/icons";
import Logo from "../image/Logo.png";
import ButtonSecond from "../ui/ButtonSecond";
const Nav = function () {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <nav className=" sticky top-0 z-10 bg-mainRed">
        <div className="sm:container py-[10px]  flex justify-between items-center  md:h-[105px] text-white">
          <div className="flex justify-between w-full items-center">
            <img className=" w-[192px] h-[44px ]" src={Logo} alt="Logo" />
            <span
              onClick={() => setIsShow((prev) => !prev)}
              className=" cursor-pointer px-4 md:hidden  text-[25px]"
            >
              {icons.bars}
            </span>
          </div>
          <div>
            <ul
              className={`" md:flex md:relative left-0 md:p-0 p-6  bg-mainRed absolute ${
                !isShow ? "hidden" : ""
              } top-0 right-0 justify-center items-center"`}
            >
              <span
                onClick={() => setIsShow((prev) => !prev)}
                className={`float-right md:hidden text-[25px]`}
              >
                {icons.cancel}
              </span>

              {navMenu.map((menu, i) => (
                <li
                  className="  px-4 lg:px-6  py-3 text-base font-semibold"
                  key={i}
                >
                  <a href="#">{menu}</a>
                </li>
              ))}
              <li className="pl-4 lg:pl-6">
                <ButtonSecond>Contact</ButtonSecond>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
