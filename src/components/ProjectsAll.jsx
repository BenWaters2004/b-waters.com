import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";


const ProjectsAll = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-20">
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>All Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here you can view all my projects in more detail. Learn how I designed and developed them. You can also experience the project for yourself by clicking on the view link or view the code repository by clicking the GitHub icon.
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(ProjectsAll, "");
