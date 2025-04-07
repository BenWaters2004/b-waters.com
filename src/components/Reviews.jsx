import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import React from "react";
import { textVariant } from "../utils/motion";


const Reviews = () => {
  return (
    <section>
      <motion.div variants={textVariant()} className="mt-20">
        <p className={`${styles.sectionSubText} `}><span className="text-[#13ab88]">{"<"}</span>Qualifications <span className="text-[#13ab88]">{"/>"}</span></p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>
      <h2>Section Coming Soon</h2>
    </section>
  );
};

export default SectionWrapper(Reviews, "");
