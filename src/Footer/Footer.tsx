import footerImages from "../content/json/footer";

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
      </FooterGrid>

      <MadeWithLove>
        Made with ❤️ by The Blueprint Team
      </MadeWithLove>
    </FooterBody>
  );
};

export default Footer;

