import React, { useEffect, useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SocialLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, num }) => {
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
      const duration = 3000; // Total animation duration in milliseconds
      const increment = Math.ceil(num / (duration / 50)); // Update 50 times per second

      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + increment >= num) {
            clearInterval(interval); // Stop when the target number is reached
            return num;
          }
          return prevCount + increment;
        });
      }, 50); // Updates every 50ms (smooth animation)
    }
  }, [inView, num]);

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
              {/* Wrap the number and plus sign in flex */}
              <span className="flex items-center justify-center">
                {count}
                {/* Add the plus sign only to the second card */}
                {index === 1 && (
                  <span className="text-[40px] ml-1">+</span>
                )}
                {/* Add the plus sign only to the second card */}
                {index === 3 && (
                  <span className="text-[40px] ml-1">+</span>
                )}
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
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a student at the University of Plymouth, studying Cyber Security, I
        am also a Jr DevSec Ops. I am experienced in languages: PHP, C#, HTML
        and CSS and frameworks like Laravel, Node.Js and Three.Js. In the past I
        have worked several customer service jobs, providing me with skills such
        as communication, initative and problem solving, Which are all vital in
        the technology industry.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {SocialLinks.map((SocialLinks, index) => (
          <ServiceCard key={SocialLinks.title} index={index} {...SocialLinks} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
