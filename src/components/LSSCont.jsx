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
import { EyeIcon } from "@heroicons/react/24/outline";


const LSSCont = () => {

  const lssProject = projectsData.find((project) => project.title === "LSS - Lewis Scaffold Solutions");

  return (
    <>
      <motion.div variants={textVariant()} className="my-12">
        <div className="flex space-x-4 my-4">
          <a href="/" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"><FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2" /> Back</a>
        </div>
        <p className={styles.sectionSubText}>
          <span className="text-[#13ab88]">{"<"}</span>For Lewis Scaffold Solutions<span className="text-[#13ab88]">{"/>"}</span>
        </p>
        <h2 className={styles.sectionHeadText}>Scaffolding Website.</h2>
        <p className={styles.sectionSubText}>Project Completed on ??/??/20??</p>
      </motion.div>

      <img src={lssProject?.image} alt="LSS Website Image" className="w-[full] md:w-[50%] my-12 items-center" />

      {/* Button Links */}
      <div className="flex space-x-4 my-6">
        <a href={lssProject?.gitUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]">
          <FontAwesomeIcon icon={faGithub} className="h-5 w-5 mr-2" /> GitHub
        </a>
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
      <p>Lewis Scaffold Solutions is a scaffolding company based in the south west of England. Prior to this website, they procured all of their clients from a partnership with a local roofing comapny. This website would be their first online appearance and allow them to obtain clients on their own.</p><br />
      <p>Lewis wanted a simple one page website that outlined who they were, showed off their work and allowed clients to get in contact. I descided to use the logo colour as the main accent colour, in each of the designs, to make the website more personal. I created three initial designs for the client to have a look at, from these the client can provide feedback on what they like or dont for the final product.</p><br />

      {/* Design Concepts */}
      <h3 className="text-xl font-bold">Design Concepts</h3>
      <div className="flex justify-between mt-4">
        <div className="w-[30%]">
          <img src={LSSdesign1} alt="Design 1" className="w-fullobject-cover" />
        </div>
        <div className="w-[30%] mx-2">
          <img src={LSSdesign2} alt="Design 2" className="w-full object-cover" />
        </div>
        <div className="w-[30%]">
          <img src={LSSdesign3} alt="Design 3" className="w-full object-cover" />
        </div>
      </div>

      <p className="mt-12">After the Client looked over the designs, his favorite was the second design shown above. He didn't want to make any changes to this design other than some of the wording and so I got straight to work on developing it.</p><br />
      <p>Project not yet complete</p>
      {/* Button Links */}
      <div className="flex space-x-4 my-4">
        <a href="/" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"><FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2" /> Back</a>
        <a href={lssProject?.gitUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]">
          <FontAwesomeIcon icon={faGithub} className="h-5 w-5 mr-2" /> GitHub
        </a>
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

export default SectionWrapper(LSSCont, "LSSCont");