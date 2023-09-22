import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'


const Meunlist = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="gnb">
            <Container>
                <Navbar.Brand href="#home"><img src={require('../img/logo.png')} alt="검색" /></Navbar.Brand>
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
            <div className="search">
                <img src={require('../img/search-ico.png')} alt="검색" />
                <input type="text" placeholder='검색' />
            </div>
        </Navbar>   
    </>
  )
}

export default Meunlist
