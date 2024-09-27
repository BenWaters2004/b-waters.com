import { Navbar, Footer, Contact, StarsCanvas } from "../../components";

export default function BITTraining() {
  return (
    <section className="relative z-0 bg-primary">
      <Navbar />
      <h1>BITTraining</h1>
      
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer/>
      </div>
    </section>
  )
}