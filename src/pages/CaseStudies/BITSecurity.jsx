import { Navbar, Footer, Contact, StarsCanvas, BITSecurityCont } from "../../components";

export default function BITSecurity() {
  return (
    <section className="relative z-0 bg-primary">
      <Navbar />
      <BITSecurityCont />
      
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer/>
      </div>
    </section>
  )
}