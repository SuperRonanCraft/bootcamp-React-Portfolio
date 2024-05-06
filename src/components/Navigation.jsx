import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import NavItem from './NavItem';

const navlinks = [
  { title: 'About Me', link: '/' },
  { link: 'Porfolio' },
  { link: 'Contact' },
  { link: 'Resume' },
];

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <h1>My React Portfolio</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">{navlinks.map((item) => NavItem(item))}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
