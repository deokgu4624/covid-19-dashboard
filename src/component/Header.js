import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './Header.module.css';

export default function Header(){
    const country = ['미국', '인도', '브라질', '러시아', '프랑스', '영국', '터키'];
    const url = ['us', 'in', 'br', 'ru', 'fr', 'uk', 'tr'];
    return (
      <>
      <Navbar bg="primary" variant="dark" fixed="top" expand="md">
        <Container className={styles.nav}>
          <Navbar.Brand className={styles.logo}>COVID-19 <span className={styles.logo2}>Dashboard</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to={process.env.PUBLIC_URL+"/kr"}>
                <Nav.Link className={'li'}>국내</Nav.Link>
              </LinkContainer>
              <LinkContainer to={process.env.PUBLIC_URL+"/global"}>
                <Nav.Link className={'li'}>전 세계</Nav.Link>
              </LinkContainer>
              <NavDropdown title="국가별" id="basic-nav-dropdown" menuVariant="primary">
                {country.map(function(item, index, array){
                  return(
                  <LinkContainer key={item} to={process.env.PUBLIC_URL+'/'+url[index]}>
                    <NavDropdown.Item className={styles.countryList}>{item}</NavDropdown.Item>
                  </LinkContainer>
                  )
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr></hr>
      </>
)}