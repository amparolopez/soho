import React from "react"
import '../App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from "../assets/logo-soho.png"


const Hero = () => {
  return (   
<>
<div className="container-fluid">
  <header>
  <Navbar bg="transparent" color="white">
    <Container>
    <img className="logo" src={require('../assets/logo-soho.png')} />
    <Nav className="me-auto">
      <Nav.Link color="white" href="#home"><span>inicio</span></Nav.Link>
      <Nav.Link href="#nosotos"><span>nosotros</span></Nav.Link>
      <Nav.Link href="#servicios"><span>servicios</span></Nav.Link>
      <Nav.Link href="#casosdexito"><span>casos de éxito</span></Nav.Link>
      <Nav.Link href="#unete"><span>únete al equipo</span></Nav.Link>
      <Nav.Link href="#contacto"><span>contacto</span></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    <div className="containerHero">
        <div class="maintext">
            <h1 className="title">Nos especializamos en</h1>
            <h2 className="title2">interfaces digitales que los usuarios aman</h2>
            <button className="calltoa">HABLEMOS DE TU PROYECTO</button>
        </div>
      </div>
  </header>
</div>
      <div class="event">
        <h4>EN DIRECTO · <span>SOHO está presente en el </span><span>DIGITALBANK MONTEVIDEO.</span> <span>"Experiencia de Usuario" por Alvaro Añón (SEO de Soho).</span></h4>
        <button className="btn1">VER EVENTO</button>
        <button className="btn2">PRÓXIMOS EVENTOS</button>
      </div>
</>
)
}
export default Hero