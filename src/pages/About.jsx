import { Footer, Contact, Navbar, StarsCanvas } from "../components";



export default function About() {
  return (
    <section>
      <Navbar />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer/>
      </div>
  </section>
  )
}