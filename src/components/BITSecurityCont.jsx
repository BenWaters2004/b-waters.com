import React, { useEffect, useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SocialLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { BITSecurityFullPage } from "../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { EyeIcon } from "@heroicons/react/24/outline";




const BITSecurityCont = () => {
  const maxNum = Math.max(...SocialLinks.map((link) => parseInt(link.num, 10)));

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}><span className="text-[#13ab88]">{"<"}</span>For BluescreenIT <span className="text-[#13ab88]">{"/>"}</span></p>
        <h2 className={styles.sectionHeadText}>BIT Security.</h2>
      </motion.div>
      <div className="inline-block w-full md:w-[50%]">
        <a href="https://github.com/BenWaters2004/BIT-Group/tree/main/BIT%20Security" target="_blank" rel="noopener noreferrer" className="icon-hover" alt="GitHub">
          GitHub <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href="">View <EyeIcon alt="View link" className="h-10"/></a><br></ br>
        <p>Made for BluescreenIT, sdhd sdsah shduishdihsiah duidhuiashduashduihsudhaiudhsaiu hhd u haisu hdiuhsiud hiasudhiushsiuadh saudhis hd dh</p>
      </div>
      <img src={BITSecurityFullPage} alt="BIT Security Home Page" className="w-full md:w-[50%] inline-block"/>
    </>
  );
};

export default SectionWrapper(BITSecurityCont, "BITSecurityCont");
