import { Link } from 'react-router-dom';
import { BlueprintIcon, StyledHeader, StyledHeaderList, StyledHeaderLink } from './content/json/header-assets';

interface HeaderProps {
  links: string[];
}

const Header = ({ links }: HeaderProps) => {
  return (
    <StyledHeader>
      <BlueprintIcon />
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

export default Header;
