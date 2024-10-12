import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const Tech = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}><span className="text-[#13ab88]">{"<"}</span>Languages and Frameworks <span className="text-[#13ab88]">{"/>"}</span></p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Tech, "Tech");