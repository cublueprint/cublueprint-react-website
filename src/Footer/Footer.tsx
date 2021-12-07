import styled from 'styled-components';
import footerImages from "../content/json/footer";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <LogoDiv>
            <BlueprintLogo src={footerImages.blueprintIcon} alt="blueprint"/> 
            <Line/>
            <p>Stay in the loop</p>
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
          <Line/>
        </LogoDiv>

        {footerImages.columns.map((socialLink) => (
            <FooterBox>
                <FooterTitle>{socialLink.title}</FooterTitle>
                <FooterUL>
                  {socialLink.lis.map((li) => (
                    <li> 
                      <FooterAnchors href={li.link}>
                        {li.text}
                      </FooterAnchors>
                    </li> 
                  ))}
                </FooterUL>
            </FooterBox>
        ))}
      </FooterGrid>

      <MadeWithLove>
        Made with ❤️ by The Blueprint Team
      </MadeWithLove>
    </FooterContainer>
  );
};

const FooterContainer = styled.div` 
  background-color: #333;
  color: white;
  font-family: "source sans pro";
  font-weight: 400; 
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 40px; 
  margin: 20px; 
  padding: 25px; 
  grid-template-areas:
      "logoDiv"
      ; 

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "logoDiv logoDiv"
      ; 
  }

  @media (max-width: 425px) {
    display: block; 
  } 
`;

const LogoDiv = styled.div`
  grid-area: logoDiv; 

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`; 

const FooterBox = styled.div`
  margin: 0;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const FooterTitle = styled.div`
  height: 35px;
`;

const BlueprintLogo = styled.img`
  height: 35px;
`;

const Line = styled.hr``; 

const FooterUL = styled.ul`
  list-style: none;
  list-style-position: inside;
  margin: 0;
  padding-left: 0;
  font-weight: 300; 
`;

const FooterAnchors = styled.a`
  font-size: 14px;
  font-weight: 300; 
  color: white;
  text-decoration: inherit;
`;

const MadeWithLove = styled.div` 
  background-color: #2F80ED;
  text-align: center;
  padding: 5px 0;
`;

export default Footer;

