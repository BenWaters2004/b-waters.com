import React, { useEffect, useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SocialLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, num, maxNum }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.3 } // Start the animation when 30% of the element is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const totalDuration = 1900; // Total animation duration in milliseconds
      const steps = 40; // Total number of steps (adjust this for smoothness)
      const globalIncrement = maxNum / steps; // Global step increment based on max number

      const interval = setInterval(() => {
        setCount((prevCount) => {
          // Increment each number relative to its size, so they finish at the same time
          const localIncrement = (num / maxNum) * globalIncrement;
          if (prevCount + localIncrement >= num) {
            clearInterval(interval);
            return num; // Ensure the number reaches its target exactly
          }
          return prevCount + localIncrement;
        });
      }, totalDuration / steps); // Smooth update every (totalDuration / steps) milliseconds
    }
  }, [inView, num, maxNum]);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        ref={cardRef}
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div>
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <p className="text-white text-[50px] font-bold text-center">
              <span className="flex items-center justify-center">
                {Math.floor(count)}
                {index === 1 && <span className="text-[40px] ml-1">+</span>}
                {index === 3 && <span className="text-[40px] ml-1">+</span>}
              </span>
            </p>
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const maxNum = Math.max(...SocialLinks.map((link) => parseInt(link.num, 10)));

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}><span className="text-[#13ab88]">{"<"}</span>Introduction <span className="text-[#13ab88]">{"/>"}</span></p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a student at the University of Plymouth, studying Cyber Security and a DevSecOps Analyst at BIT Security. With experience in languages: PHP, JavaScript, C#, HTML,
        and CSS, and frameworks like Laravel, React, and Three.Js. In my spare time I also work as a freelance full stack web developer.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {SocialLinks.map((link, index) => (
          <ServiceCard
            key={link.title}
            index={index}
            title={link.title}
            num={parseInt(link.num, 10)}
            maxNum={maxNum} // Pass the largest number as a prop
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
