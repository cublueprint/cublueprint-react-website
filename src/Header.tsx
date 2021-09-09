import { Link } from 'react-router-dom';

interface HeaderProps {
  links: string[];
}

const Header = ({ links }: HeaderProps) => {
  return (
    <div>
      <>I'm the 🗣!</>
      {links.map((link) => (
        <li key={`l-${link}`}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </div>
  );
};

export default Header;
