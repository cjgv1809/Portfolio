import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} max-w-7xl w-full mx-auto flex items-center py-5 fixed top-0 z-20 bg-primary`}
      id="navbar"
    >
      <div className="w-full flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="hidden sm:flex text-2xl text-white font-bold cursor-pointer">
            Carlos's Portfolio
          </p>
        </Link>

        <ul className="list-none hidden sm:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${
                  active === link.id
                    ? "text-white hover:text-secondary"
                    : "text-secondary hover:text-white"
                } text-base font-medium cursor-pointer transition duration-300 transform hover:scale-110`}
                onClick={() => setActive(link.id)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
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
                  <a
                    href={`#${link.id}`}
                    className={`${
                      active === link.id
                        ? "text-white hover:text-secondary"
                        : "text-secondary hover:text-white"
                    } text-base font-medium cursor-pointer`}
                    onClick={() => {
                      setActive(link.id);
                      setToggle(!toggle);
                    }}
                  >
                    {link.title}
                  </a>
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
