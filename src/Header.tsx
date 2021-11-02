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
  font-size: 16px;
  width: 100%;  
  background-color: cyan;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  position: -webkit-sticky;
	position: sticky;
	top: 0;
`;

const StyledHeaderList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;


const StyledHeaderLink = styled.div`
  display: block;
  margin-left: auto;
  position: relative;
  min-width: 100px;
`;

export default Header;
