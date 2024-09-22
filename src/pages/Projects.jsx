import { Footer, Contact, Navbar, StarsCanvas, ProjectsAll } from "../components";



export default function Projects() {
  return (
    <section className="bg-primary">
      <Navbar />
      <ProjectsAll />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer/>
      </div>
  </section>
  )
}