import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projectsData } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { EyeIcon } from "@heroicons/react/24/outline";
import { LSSdesign1, LSSdesign2, LSSdesign3 } from "../assets";



const ClassifiedCont = () => {

  const lssProject = projectsData.find((project) => project.title === "Get Classified");

  return (
    <>
      <motion.div variants={textVariant()} className="my-12">
        <div className="flex space-x-4 my-4">
          <a href="/" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"><FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2" /> Back</a>
        </div>
        <p className={styles.sectionSubText}>
          <span className="text-[#13ab88]">{"<"}</span>For BlueScreen IT Ltd<span className="text-[#13ab88]">{"/>"}</span>
        </p>
        <h2 className={styles.sectionHeadText}>Security Clearance Application.</h2>
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
        <p className="text-[darkRed] mt-2">*NOTE: Project's Repository is private for security</p>
      </div>

      {/* Company Description */}
      <p>This project was started by a 3rd party developer but when I joined BIT Security, I took over this project as the lead developer. This is a complex PHP Laravel application that provides users with a DBS security clearance as well as the option for a BPSS Clearance. Currently processing 100 - 200 DBS clearances per month!</p><br />
      <p>There are 3 user roles within the application - Site User, Site Admin and Super Admin:</p>
      <p><strong>Site User</strong></p>
      <p className="ml-6">Site Users also known as candidates, will recieve a registeration email once their employer adds them to the system. From there they will fill out the required forms for their clearance type. This can include using Yoti to scan ID's and their face to verify their identity however this is optional some organisations choose to verify ID's in person instead. At this point unless the have lived abroad in the last 5 years they are done! If they have lived abroad, this will require an overseas criminal record check and further details.</p>
      <p><strong>Site Admin</strong></p>
      <p className="ml-6">These are individuals slected by the organisation to manage/monitor their candidates, usually HR or Security Controllers. They can only view the candidates for their organisation however a super admin can give them access to anouther organisation if that organisation has consented to it. From these accounts they can add new candidates, track the progress of existing candidates and view the final report also known as a virtual record for a candidates clearance. Site admins can only be added by a super admin.</p>
      <p><strong>Super Admin</strong></p>
      <p className="ml-6">These users are only Bluescreen IT employees - me as the devloper and the full time admin team. </p>


      {/* Design Concepts */}
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

      
      <p className="mt-12">The project is hosted on a cloud linux virtual private server unfortunately I cannot provide any further details for security.</p><br />
      <p></p>


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
        <p className="text-[darkRed] mt-2">*NOTE: Project's Repository is private for security</p>
      </div>
    </>
  );
};
export default SectionWrapper(ClassifiedCont, "ClassifiedCont");