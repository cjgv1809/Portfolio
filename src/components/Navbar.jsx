import React, { useState } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} xl:max-w-7xl w-full mx-auto flex items-center py-5 fixed top-0 z-20 bg-primary`}
      id="navbar"
    >
      <div className="w-full flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
        </Link>

        <ul className="list-none hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                activeClass="activeLink"
                to={link.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-base font-medium cursor-pointer transition duration-300 transform hover:scale-110 text-secondary hover:text-white"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 object-contain cursor-pointer transition duration-300 transform hover:scale-110 "
            onClick={() => setToggle(!toggle)}
          />

          {toggle && (
            <ul className="list-none flex flex-col items-center gap-10 absolute top-20 right-0 z-50 w-full p-4 bg-primary">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    activeClass="activeLink"
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    className="text-base font-medium cursor-pointer transition duration-300 transform hover:scale-110 text-secondary hover:text-white"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
