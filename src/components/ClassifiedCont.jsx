import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projectsData } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { EyeIcon } from "@heroicons/react/24/outline";
import { ClassifiedPic1, ClassifiedPic2, ClassifiedPic3 } from "../assets";



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
      <p>This project was started by a 3rd party developer but when I joined BIT Security, I took over this project as the lead developer. This is a complex PHP Laravel application that provides employers with pre-employment screening/security vetting. Currently processing 100 - 200 DBS clearances per month!</p><br />
      <p>This project at the time of writing is capable of the following checks:</p>
      <ul className="list-disc list-inside">
        <li>Disclosure and Barring service (DBS) Basic criminal record check</li>
        <li>Digital Identity Verification check</li>
        <li>Right to Work check</li>
        <li>Employment History verification check</li>
        <li>Academic History verification check</li>
        <li>Personal refrences</li>
        <li>Baseline Personel Security Screening (BPSS)</li>
      </ul><br />

      <p>There are 3 user roles within the application - Site User, Site Admin and Super Admin:</p>
      <p><strong>Site User</strong></p>
      <p className="ml-6">Site Users also known as candidates, will recieve a registeration email once their employer adds them to the system. From there they will fill out the required forms for their clearance type. This can include using Yoti to scan ID's and their face to verify their identity however this is optional some organisations choose to verify ID's in person instead. At this point unless the have lived abroad in the last 5 years they are done! If they have lived abroad, this will require an overseas criminal record check and further details.</p>
      <p><strong>Site Admin</strong></p>
      <p className="ml-6">These are individuals slected by the client organisation to manage/monitor their candidates, usually HR or Security Controllers. They can only view the candidates for their organisation however a super admin can give them access to anouther organisation if that organisation has consented to it. From these accounts they can add new candidates, track the progress of existing candidates and view the final report also known as a virtual record for a candidates clearance. Site admins can only be added by a super admin.</p>
      <p><strong>Super Admin</strong></p>
      <p className="ml-6">These users are only Bluescreen IT employees - me as the devloper and the security vetting admin team. They have access to all candidates and can manage site admins. Super admins check through candidates infomation to ensure the automated checks are performed correctly, chase candidates for missing information and give the finalk sign off when the candidate is complete.</p>


      {/* Design Concepts */}
      <div className="flex justify-between mt-4">
        <div className="w-[30%]">
          <img src={ClassifiedPic1} alt="Design 1" className="w-fullobject-cover" />
        </div>
        <div className="w-[30%] mx-2">
          <img src={ClassifiedPic2} alt="Design 2" className="w-full object-cover" />
        </div>
        <div className="w-[30%]">
          <img src={ClassifiedPic3} alt="Design 3" className="w-full object-cover" />
        </div>
      </div>

      
      <p className="mt-12">All users require a 14 character password and MFA. The project is heavily encrypted due to containing personal infomation, the project is hosted on a cloud linux virtual private server, unfortunately I cannot provide any further details for security.</p><br />
      <p>At the end of the process, each candidate is issued a Final Report also known as a verification record to act as evidence the checks have been performed for the client organisation as well as highlight any areas of concern.</p>
      
      <div className="py-5 w-full">
        <h2 className="text-center font-bold text-xl mb-4">Interactive Demo</h2>
        <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
        <div className="sl-embed w-full">
            <iframe loading="lazy" className="sl-demo w-full h-[600px]" id="demoFrame" src="https://getclassified.storylane.io/demo/k7ulia3eklut?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen ></iframe>
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
        <p className="text-[darkRed] mt-2">*NOTE: Project's Repository is private for security</p>
      </div>
    </>
  );
};
export default SectionWrapper(ClassifiedCont, "ClassifiedCont");