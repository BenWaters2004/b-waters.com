import { Footer, Contact, Navbar, StarsCanvas, Experience, AboutHero } from "../components";



export default function About() {
  return (
    <section className=" relative bg-primary">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Experience />
      </div>
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer/>
      </div>
  </section>
  )
}