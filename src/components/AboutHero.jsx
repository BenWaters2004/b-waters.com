import { styles } from "../styles";


const AboutHero = () => {
  return (
    <section className={`relative w-full h-auto mx-auto`}>

      <div
        className={`absolute inset-0 top-[300px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div id="heroText">
          
          <h1 className={`${styles.heroHeadText} text-white`}>
            Who am I?
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

export default AboutHero;