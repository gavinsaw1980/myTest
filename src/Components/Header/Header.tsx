'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './style.css';
import Image from 'next/image';

export default function Header() {
    return (
    <Navbar collapseOnSelect expand="xl" className="px-1 py-4">
      <Container>
        <Navbar.Brand href="#">
            <Image src='/logo.png' alt='company logo' className='space img-fluid' width={243} height={16} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* For Jobseekers */}
            <NavDropdown title="For Jobseekers" id="collasible-nav-dropdown" className='mt-1 space small' >
              <NavDropdown.Item href="#" className='small'>Sub Nav 1</NavDropdown.Item>
              <NavDropdown.Item href="#" className='small'>Sub Nav 2</NavDropdown.Item>
              <NavDropdown.Item href="#" className='small'>Sub Nav 3</NavDropdown.Item>
            </NavDropdown>
            {/* For Clients */}
            <NavDropdown title="For clients" id="collasible-nav-dropdown" className='mt-1 space small' >
              <NavDropdown.Item href="#" className='small'>Sub Nav 1</NavDropdown.Item>
              <NavDropdown.Item href="#" className='small'>Sub Nav 2</NavDropdown.Item>
            </NavDropdown>
             {/* For Sectors */}
            <NavDropdown title="Sectors" id="collasible-nav-dropdown" className='mt-1 space small'>
              <NavDropdown.Item href="#" className='small'>Sub Nav 1</NavDropdown.Item>
              <NavDropdown.Item href="#" className='small'>Sub Nav 2</NavDropdown.Item>
              <NavDropdown.Item href="#" className='small'>Sub Nav 3</NavDropdown.Item>
              <NavDropdown.Item href="#" className='small'>Sub Nav 4</NavDropdown.Item>
            </NavDropdown>
            {/* For Resources*/}
            <NavDropdown title="Resources" id="collasible-nav-dropdown" className='mt-1 space small'>
              <NavDropdown.Item href="#" className='small'>Sub Nav 1</NavDropdown.Item>
              <NavDropdown.Item href="#" className='small'>Sub Nav 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button type="button" className="py-2 px-4 upload-btn">Upload CV</Button> &nbsp; 
            <Button type="button" className="py-2 px-4 contact-btn">Contact us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )   
  }