import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { close } from "../assets/icons";

import { navLinks } from "../constants";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={185} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.lable}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.lable}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={toggle ? close : hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
        {/* toggle menu for mobile device */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-coral-red absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="flex-1 flex  flex-col justify-start items-center  gap-3">
            {navLinks.map((item) => (
              <li key={item.lable}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-white mb-4"
                >
                  {item.lable}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
