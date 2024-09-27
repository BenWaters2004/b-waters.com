import { Navbar, Footer, Contact, StarsCanvas } from "../../components";

export default function Classified() {
  return (
    <section className="relative z-0 bg-primary">
      <Navbar />
      <h1>Classified</h1>
      
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer/>
      </div>
    </section>
  )
}