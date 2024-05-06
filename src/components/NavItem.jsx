import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function NavItem({ title, link }) {
  console.log(title, link);
  return (
    <Nav.Link>
      <Link key={link} to={link}>
        {title ? title : link}
      </Link>
    </Nav.Link>
  );
}

export default NavItem;
