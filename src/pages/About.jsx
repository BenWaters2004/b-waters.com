import { Experience, Contact, Navbar, StarsCanvas } from "../components";

export default function About() {
  return (
    <section>
      <Navbar />
      <h1>About</h1>
      <Experience />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
  </section>
  )
}