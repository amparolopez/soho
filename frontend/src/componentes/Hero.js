import React from "react"
import {Navbar, Nav, Container, Dropdown} from 'react-bootstrap';
import hero from "../assets/hero.jpg"
import logo from "../assets/logo-soho.png"


const Hero = () => {
  return (   
<div className="container">
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <img className="logo" src={require('../assets/logo-soho.png')} />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-6">
      <Nav.Link href="#features">inicio</Nav.Link>
      <Nav.Link href="#pricing">nosotros</Nav.Link>
      <Nav.Link href="#pricing">servicios</Nav.Link>
      <Nav.Link href="#pricing">casos de éxito</Nav.Link>
      <Nav.Link href="#pricing">únete al equipo</Nav.Link>
      <Nav.Link href="#pricing">contacto</Nav.Link>
    </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>
    <div className="containerHero">
      <img className="hero" src={require('../assets/hero.jpg')} />
        <div class="box-1">
            <h1>Nos especializamos en</h1>
            <h2>interfaces digitales que los usuarios aman</h2>
            <button>HABLEMOS DE TU PROYECTO</button>
        </div>
      </div>
      <div class="event">
        <h3>EN DIRECTO</h3>
        <h3> SOHO está presente en el  </h3>
        <h3>DIGITALBANK MONTEVIDEO.</h3>
        <h3>"Experiencia de Usuario" por Alvaro Añón (SEO de Soho).</h3>
      </div>
      <div>
      <button>VER EVENTO</button>
      <button>PRÓXIMOS EVENTOS</button>
      </div>
</div>
)
}
export default Hero