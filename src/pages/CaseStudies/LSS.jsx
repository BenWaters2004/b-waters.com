import { Navbar, Footer, Contact, StarsCanvas, LSSCont } from "../../components";

export default function LSS() {
  return (
    <section className="relative z-0 bg-primary">
      <Navbar />
      <LSSCont />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer/>
      </div>
    </section>
  )
}