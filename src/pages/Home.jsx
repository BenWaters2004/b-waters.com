import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas, Footer } from "../components";

export default function Home() {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Works />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer/>
    </div>
  )
}


