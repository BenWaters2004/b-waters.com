import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projectsData } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { BITTrainingHome, BITTrainingAbout, BITTrainingBootcamp } from "../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { EyeIcon } from "@heroicons/react/24/outline";


const BITTrainingCont = () => {

  const lssProject = projectsData.find((project) => project.title === "BIT Training");

  return (
    <>
      <motion.div variants={textVariant()} className="my-12">
        <div className="flex space-x-4 my-4">
          <a href="/" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"><FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2" /> Back</a>
        </div>
        <p className={styles.sectionSubText}>
          <span className="text-[#13ab88]">{"<"}</span>For BlueScreen IT Ltd<span className="text-[#13ab88]">{"/>"}</span>
        </p>
        <h2 className={styles.sectionHeadText}>Cyber Security Training Website.</h2>
        <p className={styles.sectionSubText}>Project Ongoing</p>
      </motion.div>

      <img src={lssProject?.image} alt="LSS Website Image" className="w-[full] md:w-[50%] my-12 items-center" />

      {/* Button Links */}
      <div className="flex space-x-4 my-6">
        <a
          href={lssProject?.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"
        >
          <EyeIcon className="h-5 w-5 mr-2" /> View
        </a>
      </div>

      {/* Company Description */}
      <p>BIT Training provides cyber security training to indivduals and organisations. This includes Apprenticeships, Skill Bootcamps and certifications with promanant partnerships like: the National Cyber Security Center, Crown Commercial Services, Cyber Hub, ISC2, ISACA, CompTIA and ITIL. BIT Training also has strong roots with Ministry of Defence, taking on several security contracts and providing ELCAS funded courses for MoD leavers, as a result winning a Silver Armed Forces Covenants Employer Recognition Award.</p><br />
      <p>This website was built with WordPress, to allow the use of the Arlo plugin which is used to provide a portal to training courses. This was esspessially important to allow the courses to be instantly updated internationaly with out partners like CyberNordic. The design matches with BIT Group's other websites in order to keep a uniform and consistant look throughout the company.</p><br />
      <p></p><br />
      <div className="flex justify-between mt-4">
        <div className="w-[30%]">
          <img src={BITTrainingHome} alt="BIT Security Home page" className="w-fullobject-cover" />
        </div>
        <div className="w-[30%] mx-2">
          <img src={BITTrainingAbout} alt="BIT Security About page" className="w-full object-cover" />
        </div>
        <div className="w-[30%]">
          <img src={BITTrainingBootcamp} alt="BIT Security Packages page" className="w-full object-cover" />
        </div>
      </div>


      {/* Button Links */}
      <div className="flex space-x-4 my-4">
        <a href="/" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"><FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2" /> Back</a>
        <a
          href={lssProject?.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"
        >
          <EyeIcon className="h-5 w-5 mr-2" /> View
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(BITTrainingCont, "BITTrainingCont");