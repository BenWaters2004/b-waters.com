import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projectsData } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { EyeIcon } from "@heroicons/react/24/outline";
import { BITSecurityFullPage, BITSecurityFullPage2, BITSecurityFullPage3 } from '../assets/'


const BITSecurityCont = () => {

  const lssProject = projectsData.find((project) => project.title === "BIT Security");

  return (
    <>
      <motion.div variants={textVariant()} className="my-12">
        <div className="flex space-x-4 my-4">
          <a href="/" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"><FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2" /> Back</a>
        </div>
        <p className={styles.sectionSubText}>
          <span className="text-[#13ab88]">{"<"}</span>For BlueScreen IT Ltd<span className="text-[#13ab88]">{"/>"}</span>
        </p>
        <h2 className={styles.sectionHeadText}>Cyber Security Services Website.</h2>
        <p className={styles.sectionSubText}>Project Completed on 14/03/2024</p>
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
      <p>This website was originally developed using WordPress, but the client needed more flexibility, performance, and control. I was tasked with rebuilding the site entirely in PHP Laravel while replicating the existing design. This shift not only streamlined content management but also significantly improved search engine visibility, resulting in a 180% increase in traffic.</p><br />

      <p>Beyond simply displaying the company's cybersecurity services, the site includes a fully functional admin panel built with Laravel’s authentication and role-based access control. This allows authorised users to create, edit, and delete both news articles and static pages with ease, without touching any code. The intuitive interface was designed to keep the site dynamic and up-to-date with minimal technical input from the client.</p><br />

      <p>Other key features include:</p>
      <ul className="list-disc list-inside">
        <li>A newsletter system allowing users to subscribe and receive updates directly via email</li>
        <li>A live chat integration that connects potential customers directly with the sales team</li>
        <li>SEO-friendly routing and metadata handling for improved organic reach</li>
        <li>Fast page loading speeds thanks to Laravel's caching and optimized asset management</li>
        <li>Responsive design that ensures usability across all devices</li>
      </ul><br />

      <p>The migration from WordPress to Laravel also allowed for cleaner, more maintainable code, better security practices, and improved scalability as the company continues to grow.</p><br />

      <p>This website was the first phase of a larger project to modernise all three of the company’s websites by moving them away from WordPress and into a unified Laravel-based ecosystem. My work laid the foundation for a more consistent and robust web presence across all platforms.</p>

      

      <div className="flex justify-between mt-4">
        <div className="w-[30%]">
          <img src={BITSecurityFullPage} alt="BIT Security Home page" className="w-fullobject-cover" />
        </div>
        <div className="w-[30%] mx-2">
          <img src={BITSecurityFullPage2} alt="BIT Security About page" className="w-full object-cover" />
        </div>
        <div className="w-[30%]">
          <img src={BITSecurityFullPage3} alt="BIT Security Packages page" className="w-full object-cover" />
        </div>
      </div>

      <p></p>

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

export default SectionWrapper(BITSecurityCont, "BITSecurityCont");