import { useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import listIcon from './list.svg';
import listCloseIcon from './listClose.svg';

interface MobileMenuProps {
  links: string[];
}

interface MenuButtonProps {
  getOpen: () => boolean;
  handleToggle: () => void;
}

interface MenuListProps {
  links: string[];
  getOpen: () => boolean;
  closeList: () => void;
}

interface StyledListProps {
  isOpen: boolean;
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  const getOpen = () => open;
  const handleToggle = () => {
    console.log(open);
    setOpen(!open);
  }
  return (
    <div>
      <MenuButton getOpen={getOpen} handleToggle={handleToggle}/>
      <MenuList links={links} getOpen={getOpen} closeList={handleToggle} />
    </div>
  );
};

const MenuButton = ({getOpen, handleToggle}: MenuButtonProps) => {
  return (
    <StyledMenuButton >
      <button onClick={handleToggle}>
        <img src={getOpen()? listCloseIcon : listIcon} />
      </button>
    </StyledMenuButton>
  );
}

const MenuList = ({ links, getOpen, closeList }: MenuListProps) => {
  return (
    <div>
      <StyledHeaderList isOpen={getOpen()}>
        <>
        {links.map((link) => (
          <StyledHeaderLink key={`l-${link}`} onClick={closeList}>
            <Link to={link}>{link}</Link>
          </StyledHeaderLink>
        ))}
        </>
      </StyledHeaderList>
    </div>
  );
}


const StyledMenuButton = styled.div`
  button {
    background: transparent;
    border: none;
    color: white;
    height: 50px;
  }
  text-align: end;
  padding-right: 1vw;
`

const StyledHeaderList = styled.div<StyledListProps>`
  display: ${(props) => (props.isOpen? 'flex': 'none') };
  flex-direction: column;
  justify-content: space-evenly;
  gap: 4vh;
  background-color: ${(props) => props.theme.colors.cloudBlue};
  padding: 10px 10px 10px 10px;
  text-align: end;
  border-bottom-left-radius: 5px;
  box-shadow: -2px 2px 5px 0px lightgrey;
`;

const StyledHeaderLink = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryBlue};
  }
  a:hover {
    color: ${(props) => props.theme.colors.skyBlue};
  }
`;

export default MobileMenu;