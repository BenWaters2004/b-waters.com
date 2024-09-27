import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Ben &nbsp;
            <span className='sm:block hidden'> Waters</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {nav.id === "about" ? (
                <a href="/About">
                  {nav.title}
                </a>
              ) : nav.id === "contact" ? (
                <a href="#contact" className="contactNav">
                  {nav.title}
                </a>
              ) : nav.id === "GitHub" ? (
                <a href="https://github.com/BenWaters2004" target="_blank" rel="noopener noreferrer" className="icon-hover">
                  <FontAwesomeIcon icon={faGithub} style={{height: "32px",}}/>
                </a>
              ) : nav.id === "Linkedin" ? (
                <a href="https://www.linkedin.com/in/benwaters2004/" target="_blank" rel="noopener noreferrer" className="icon-hover">
                  <FontAwesomeIcon icon={faLinkedinIn} style={{height: "32px",}} />
                </a>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>



        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Toggle button for the mobile menu */}
          <img
            id="menuIcon"
            src={toggle ? close : menu}
            alt='menu'
            className={`w-[28px] h-[28px] object-contain cursor-pointer transform transition-transform duration-300 ease-in-out ${
              toggle ? "rotate-90" : "rotate-0"
            }`}
            onClick={() => setToggle(!toggle)}
          />


          {/* Mobile menu content with smooth animation */}
          <div
            className={`${
              toggle ? "menu-open" : "menu-closed"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all duration-300 ease-in-out`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);  // Close the menu when an item is clicked
                    setActive(nav.title);
                  }}
                >
                  {nav.id === "about" ? (
                    <a href="/About">{nav.title}</a>
                  ) : nav.id === "work" ? (
                    <a href="/Projects">{nav.title}</a>
                  ) : nav.id === "contact" ? (
                    <a href="#contact">{nav.title}</a>
                  ) : nav.id === "GitHub" ? (
                    <a href="https://github.com/BenWaters2004" target="_blank" rel="noopener noreferrer" className="icon-hover">
                      {nav.title}
                    </a>
                  ) : nav.id === "Linkedin" ? (
                    <a href="https://www.linkedin.com/in/benwaters2004/" target="_blank" rel="noopener noreferrer" className="icon-hover">
                      {nav.title}
                    </a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;