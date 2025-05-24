import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";
import { motion, useMotionValue } from "framer-motion";



const Navbar = () => {
  const [isActive, setIsActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setIsActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="object-contain cursor-pointer"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Askulo &nbsp;
            <span className="sm:block hidden">|  &nbsp; Threejs Developer</span>
          </p>
        </Link>

        <motion.ul
          className="list-none hidden sm:flex flex-row gap-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              className={`cursor-pointer font-medium text-[18px] ${
                isActive === link.title ? "text-white" : "text-secondary"
              }`}
              whileHover={{ scale: 1.1, x: 5, color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsActive(link.title)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </motion.li>
          ))}
        </motion.ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            width={30}
            height={30}
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer"
          />
          

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  className={`cursor-pointer font-medium text-[18px] ${
                    isActive === link.title ? "text-white" : "text-secondary"
                  }`}
                  whileHover={{ scale: 1.1, x: 5, color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setToggle(!toggle)
                    setIsActive(link.title)}}

                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
