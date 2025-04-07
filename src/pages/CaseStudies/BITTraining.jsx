import { Navbar, Footer, Contact, StarsCanvas, BITTrainingCont } from "../../components";

export default function BITTraining() {
  return (
    <section className="relative z-0 bg-primary">
      <Navbar />
      <BITTrainingCont />
      
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer/>
      </div>
    </section>
  )
}