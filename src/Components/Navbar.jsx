import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  Row, Col } from 'react-bootstrap';


function NavbarComponent() {

    const categories = ['Education', 'Medical', 'Women & Girls' , 'Animals' , 'Creative' , 'Food & Hunger' , 'Enviroment' , 'Children', 'Memorial' , 'Comunity Development' , "Other"];

    const imageUrl = "https://img.freepik.com/free-vector/hands-connecting-logo_23-2147507857.jpg?size=626&ext=jpg&uid=R111453237&ga=GA1.2.207086054.1690826502&semt=sph"

  return (
    <div>

    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      {/* <Navbar.Brand href="#" className=''>Massom Icon</Navbar.Brand> */}
      <img src={imageUrl} style={{width:"80px", height:"80px"}} alt='icon' />
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Browser Fundraiser</Nav.Link>
          
          <NavDropdown title="Fundraiser For" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" >
           How It Works
          </Nav.Link>
        </Nav>
        <div className=''>
        <Form className="d-flex gap-3">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="warning" className='mr-3' style={{width:"275px"}}>Start Fundraiser</Button>
          <Button variant="outline-success" size='sm' style={{width:"150px"}}>sign in</Button>
        </Form>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <div style={{border:"1px black solid"}}>
    <div>
        <h2 className="text-center " style={{ textDecoration: 'underline' }}> Categories</h2>
    </div>

    <Container className='d-flex'>
    <Row>
    {categories.map((category, index) => (
          <Col key={index} className="d-flex justify-content-center align-items-center flex-column my-2">
            <a href='/' style={{ textDecoration: 'underline', fontSize: '14px' }}>
              {category}
            </a>
          </Col>
        ))}
    </Row>

    </Container>

  </div>
      
    </div>
  )
}

export default NavbarComponent
