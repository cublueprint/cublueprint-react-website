//import React from "react";
//import Fade from "react-reveal/Fade";
//import data from "../content/footer";
import styled from 'styled-components';
import "./styles/Footer.css";
import footerImages from "./content/json/footer";

const Footer = () => {
  return (
    <FooterBody>

      <FooterGrid>
        <FooterBody>
            <BlueprintLogo src={footerImages.blueprintIcon} alt="blueprint"/> 
            <div>
              <p>Stay in the loop</p>
              <div>
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
            </div>
        </FooterBody>

        <FooterNested>
          {footerImages.columns.map((socialLink) => (
              <FooterColumn>
                  <FooterTitle>{socialLink.title}</FooterTitle>
                  <FooterUL>
                    {socialLink.lis.map((li) => (
                      <li>{li}</li> 
                    ))}
                  </FooterUL>
              </FooterColumn>
          ))}
        </FooterNested>

        {/* <FooterNested>
          <FooterColumn>
              <FooterTitle>About</FooterTitle>
              <FooterUL>
                <li>item</li> 
                <li>item</li> 
                <li>item</li> 
                <li>item</li> 
              </FooterUL>
          </FooterColumn>

          <FooterColumn>
              <FooterTitle>Projects</FooterTitle>
              <FooterUL>
                <li>Current Projects</li> 
                <li>Past Projects</li> 
                <li>Apply</li> 
              </FooterUL>
          </FooterColumn>

          <FooterColumn>
              <FooterTitle>Team</FooterTitle>
              <FooterUL>
                <li>Beneficent</li> 
                <li>Urban Minds</li> 
                <li>Blueprint Website</li> 
                <li>Join Us</li> 
              </FooterUL>
          </FooterColumn>

          <FooterColumn>
              <FooterTitle>Contact</FooterTitle>
              <FooterUL>
                <li>item</li> 
                <li>item</li> 
                <li>item</li> 
                <li>item</li> 
              </FooterUL>
          </FooterColumn>

          <FooterColumn>
              <FooterTitle>About</FooterTitle>
              <FooterUL>
                <li>item</li> 
                <li>item</li> 
                <li>item</li> 
                <li>item</li> 
              </FooterUL>
          </FooterColumn>
        </FooterNested> */}
      </FooterGrid>

      <MadeWithLove>
        Made with ❤️ by The Blueprint Team
      </MadeWithLove>
    </FooterBody>
  );
};

const FooterBody = styled.div`
  /* width: 100%; */
  background-color: #333;
  color: white;
  font-family: "source sans pro";
  font-weight: 300;

  @media (max-width: 300px) {
      display: grid; 
      grid-template-columns: 1fr ;
  }
`;

const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    /* grid-auto-rows: minmax(100px, auto); */
    grid-column-gap: 20px; 
    margin: 20px; 
    padding-top: 25px;
    padding: 25px; 
`;

const FooterNested = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    /* grid-row-gap: 20px;  */
    grid-gap: 20px; 
    grid-auto-columns: minmax(200px, auto);

    @media (max-width: 800px) {
        display: grid; 
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 300px) {
        padding-top: 30px;
        display: grid; 
        grid-template-columns: 1fr;
    }
`;

const FooterColumn = styled.div`
    margin: 0;
    font-size: 16px;
`;

const FooterTitle = styled.div`
  height: 35px;
`;

const BlueprintLogo = styled.img`
  height: 35px;
`;

const FooterUL = styled.div`
    list-style: none;
    list-style-position: inside;
    padding-left: 0;
`;

const MadeWithLove = styled.div`
  background-color: #2F80ED;
  text-align: center;
`;

export default Footer;

