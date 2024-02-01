import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SocialLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className='xs:w-[250px] w-full'>
      <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
          <a href={link} >
              <div
                  options={{
                      max: 45,
                      scale: 1,
                      speed: 450,
                  }}
                  className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
              >
                  <img
                  src={icon}
                  alt='Social link'
                  className='w-16 h-16 object-contain'
                  />
                  <h3 className='text-white text-[20px] font-bold text-center'>
                  {title}
                  </h3>
              </div>
          </a>
      </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a student at the University of Plymouth, studying Cyber Security, 
        however I also have a keen interest in software development. I am experienced in 
        languages like JavaScript, PHP, C#, HTML and CSS and frameworks like React, Node.Js and Three.Js. 
        In the past I have worked several customer service jobs, providing me with skills such as communication, 
        initative and problem solving, Which are all vital in the technology industry.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {SocialLinks.map((SocialLinks, index) => (
          <ServiceCard key={SocialLinks.title} index={index} {...SocialLinks} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");