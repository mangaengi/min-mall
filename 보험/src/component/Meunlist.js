import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Meunlist = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">국가문화유산포털</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#Gyeongbok">경복궁</Nav.Link>
                    <Nav.Link href="#Changdeok">창덕궁</Nav.Link>
                    <Nav.Link href="#Deoksu">덕수궁</Nav.Link>
                    <Nav.Link href="#Changgyeong ">창경궁</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    </>
  )
}

export default Meunlist
