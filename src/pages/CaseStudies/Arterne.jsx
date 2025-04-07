import { Navbar, Footer, Contact, StarsCanvas, ArterneCont } from "../../components";

export default function Arterne() {
  return (
    <section className="relative z-0 bg-primary">
      <Navbar />
      <ArterneCont />
      
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer/>
      </div>
    </section>
  )
}