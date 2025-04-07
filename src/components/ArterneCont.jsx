import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projectsData } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { LSSdesign1, LSSdesign2, LSSdesign3 } from "../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const ArterneCont = () => {

  const lssProject = projectsData.find((project) => project.title === "Mental Health App");

  return (
    <>
      <motion.div variants={textVariant()} className="my-12">
        <div className="flex space-x-4 my-4">
          <a href="/" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"><FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2" /> Back</a>
        </div>
        <p className={styles.sectionSubText}>
          <span className="text-[#13ab88]">{"<"}</span>For Arterne CIC<span className="text-[#13ab88]">{"/>"}</span>
        </p>
        <h2 className={styles.sectionHeadText}>Mental Health App.</h2>
        <p className={styles.sectionSubText}>Project Completed on 01/05/2024</p>
      </motion.div>

      <img src={lssProject?.image} alt="LSS Website Image" className="w-[full] md:w-[50%] my-12 items-center" />

      {/* Button Links */}
      <div className="flex space-x-4 my-6">
        <a href={lssProject?.gitUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]">
          <FontAwesomeIcon icon={faGithub} className="h-5 w-5 mr-2" /> GitHub
        </a>
      </div>

      {/* Company Description */}
      <p></p><br />
      <p></p><br />

      <p className="mt-12"></p><br />
      <p></p>


      {/* Button Links */}
      <div className="flex space-x-4 my-4">
        <a href="/" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"><FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2" /> Back</a>
        <a href={lssProject?.gitUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]">
          <FontAwesomeIcon icon={faGithub} className="h-5 w-5 mr-2" /> GitHub
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(ArterneCont, "ArterneCont");