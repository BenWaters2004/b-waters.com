import { Footer, Navbar } from "../components";
import "../404.css";

export default function NoPage() {
  return (
    <section>
      <div className="navBack">
        <Navbar />
      </div>
      
      <div className="relative z-0 N404Page">
        <div className="noise"></div>
        <div className="overlay"></div>
        <div className="terminal">
          <h1>Error <span className="errorcode">404</span></h1>
          <p className="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
          <p className="output">Please try to <a href="/">return to the homepage</a>.</p>
          <p className="output">Good luck.</p>
        </div>
      </div>
      <Footer />
    </section>
  )
}