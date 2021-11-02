import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderProps {
  links: string[];
}

const Header = ({ links }: HeaderProps) => {
  return (
    <StyledHeader>
      <>I'm the 🗣!</>
      <StyledHeaderList> 
        {links.map((link) => (
          <StyledHeaderLink key={`l-${link}`}>
            <Link to={link}>{link}</Link>
          </StyledHeaderLink>
        ))}
      </StyledHeaderList>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background-color: #3988FF;
  color: #DFEFFF;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  
  width: 100%;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  min-height: 8vh;
`;

const StyledHeaderList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 3vw;
`;


const StyledHeaderLink = styled.div`
  display: block;
  margin-left: auto;
  position: relative;
  min-width: auto;
  a {
    text-decoration: none;
    color: #DFEFFF;
  }
  a:hover {
    color: #FFFFFF;
  }
`;

export default Header;
