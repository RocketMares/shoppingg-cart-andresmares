
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';

export const Menu_dinamico = ()=> {
    
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
          <Container>
            <Navbar.Brand href="#CaruselBanner">
                <img
                  src="src/img/liverpool.ico"
                  width="30"
                  height="30"
                  className="d-inline-block align-center"
                  alt="Liverpool"
                />
                Liverpool
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#root">Productos</Nav.Link>
                <Nav.Link href="#Menu_tallas">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
    );
    
    }