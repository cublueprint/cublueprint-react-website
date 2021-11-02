//import React from "react";
//import Fade from "react-reveal/Fade";
//import data from "../content/footer";
import "./styles/Footer.css";
import footerImages from "./content/json/footer";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      {/* <div>I'm the 🦶er!</div> */}

      <div className="footer-column main">
          <h3 className="blueprint-title">"image" Blueprint</h3>
          <div>
            <p className="stay-in-the-loop">stay in the loop</p>
            <div className="social-icons">
                {footerImages.social.map((socialLink) => (
                  <a
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={socialLink.key}
                  >
                    <img src={socialLink.img} alt="icons"></img>
                  </a>
                ))}
              </div>
              <a
                className="return-button"
                href="#"
              >
                Return to main site
              </a>
            </div>
        </div>

      <div className="body">

        {/* 
        <div className="footer-column">
            <h4 className="blueprint-title">Home</h4>
            <ul className="stay-in-the-loop">
              <li>item</li> 
              <li>item</li> 
              <li>item</li> 
              <li>item</li> 
            </ul>
        </div> */}

        <div className="footer-column">
            <h4 className="blueprint-title">About</h4>
            <ul className="stay-in-the-loop">
              <li>item</li> 
              <li>item</li> 
              <li>item</li> 
              <li>item</li> 
            </ul>
        </div>

        <div className="footer-column">
            <h4 className="footer-title">Projects</h4>
            <ul className="stay-in-the-loop">
              <li>Current Projects</li> 
              <li>Past Projects</li> 
              <li>Apply</li> 
            </ul>
        </div>

        <div className="footer-column">
            <h4 className="footer-title">Team</h4>
            <ul className="stay-in-the-loop">
              <li>Beneficent</li> 
              <li>Urban Minds</li> 
              <li>Blueprint Website</li> 
              <li>Join Us</li> 
            </ul>
        </div>

        <div className="footer-column">
            <h4 className="footer-title">Contact</h4>
            <ul className="stay-in-the-loop">
              <li>item</li> 
              <li>item</li> 
              <li>item</li> 
              <li>item</li> 
            </ul>
        </div>

        <div className="footer-column">
            <h4 className="footer-title">Apply</h4>
            <ul className="stay-in-the-loop">
              <li>item</li> 
              <li>item</li> 
              <li>item</li> 
              <li>item</li> 
            </ul>
        </div>
        
      </div>
      <div className="made-with-luv">
        Made with ❤️ by The Blueprint Team
      </div>
    </div>
  );
};

export default Footer;

