import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, Form, NavDropdown, Button, FormControl} from 'react-bootstrap'
export default function Header() {
    const menu = [{route: '/'}]
    return (
    <div>
 <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img src="https://www.cds.kg/wp-content/uploads/2019/07/logotip-kek.png"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/">Главная</Nav.Link>
        <Nav.Link as={Link} to="/services">Услуги</Nav.Link>
        <Nav.Link as={Link} to="/partners">Партнеры</Nav.Link>
        <Nav.Link as={Link} to="/documents">Документы</Nav.Link>
        <Nav.Link as={Link} to="/news">Новости</Nav.Link>
        <Nav.Link as={Link} to="/contacts">Контакты</Nav.Link>
        <Nav.Link as={Link} to="/rates">Тарифы</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Введите текст"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Поиск</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}


