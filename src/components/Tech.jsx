import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          <span className="text-[#13ab88]">{"<"}</span>Languages and Frameworks
          <span className="text-[#13ab88]">{"/>"}</span>
        </p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="techWrap text-[50px] leading-[100px] mt-12">
        <div className="scrolling-text">
          <h4 className="scroll-text">
            <span className="text-[#13ab88]">{"<"}</span>PHP <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>JavaScript <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>HTML <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>CSS <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>Tailwind CSS <span className="text-[#13ab88]">{"/>"}</span>
            {/* Duplicate the content */} <span className="text-[#13ab88]">{"<"}</span>PHP <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>JavaScript <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>HTML <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>CSS <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>Tailwind CSS <span className="text-[#13ab88]">{"/>"}</span>
          </h4>
        </div>
        <div className="scrolling-text">
          <h4 className="reverse-scroll">
            <span className="text-[#13ab88]">{"<"}</span>ReactJs <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>MySQL <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>Laravel <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>Android Studio <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>Figma <span className="text-[#13ab88]">{"/>"}</span>
            {/* Duplicate the content */} <span className="text-[#13ab88]">{"<"}</span>ReactJs <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>MySQL <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>Laravel <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>Android Studio <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>Figma <span className="text-[#13ab88]">{"/>"}</span>
          </h4>
        </div>
        <div className="scrolling-text">
          <h4 className="scroll-text2">
            <span className="text-[#13ab88]">{"<"}</span>Web Design <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>Prototyping <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>Full Stack Development <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>SEO management <span className="text-[#13ab88]">{"/>"}</span>
            {/* Duplicate the content */} <span className="text-[#13ab88]">{"<"}</span>Web Design <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>Prototyping <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>Full Stack Development <span className="text-[#13ab88]">{"/>"}</span> <span className="text-[#13ab88]">{"<"}</span>SEO management <span className="text-[#13ab88]">{"/>"}</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "Tech");
