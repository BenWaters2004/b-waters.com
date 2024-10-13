import { styles } from "../styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { logo } from "../assets";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterContainer">
        <div className="logoAndLinks">
          <Link
              to='/'
              className='flex items-center gap-2'
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
              <h3>Ben Waters</h3>
            </ Link>
          <div className="footerSocials">
            <a href="https://github.com/BenWaters2004" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} alt="GitHub" style={{height: "32px", marginRight: "25px",}}/>
            </a>
            <a href="https://www.linkedin.com/in/benwaters2004/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} alt="LinkedIn" style={{height: "32px",}} />
            </a>
          </div>
        </div>
        <div className="footerNav">
          <p><a href="mailto:contact@b-waters.com">contact@b-waters.com</a></p><br />
          <p><a href="/">Home</a> | <a href="/About">About Me</a> | <a href="#contact">Contact Me</a> | <a href="/PrivacyPolicy">Privacy Policy</a></p>
        </div>
        <div className="Copyright">
          <p>Copyright © 2024 Ben Waters. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;