import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { ParticlesBackground } from "../utils/particles.jsx"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <ParticlesBackground />
      <div
        className={`absolute inset-0 top-[300px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ben Waters</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a full stack website developer and a cyber security student.
          </p>

          <div className="cta">
            <a className="HireMeButton" href="#contact">Work with me</a><a className="CVButton" href="/CV.pdf" target="_blank" rel="noopener noreferrer"><span className="text">Download CV</span></a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;