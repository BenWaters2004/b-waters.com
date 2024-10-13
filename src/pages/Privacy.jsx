import { Navbar, Footer, Contact, StarsCanvas, PrivacyStatement } from "../components";

export default function Privacy() {
  return (
    <section>
      <Navbar />
      <PrivacyStatement />
      
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer/>
      </div>
    </section>
  )
}