import React from "react"
import "../App.css"
import {Navbar, Nav, Container} from "react-bootstrap"
import { FiRadio } from 'react-icons/fi';
import logo from "../assets/logo-soho.png"

const Hero = () => {
  return (
    <>
      <Container fluid className="maintext">
        <header>
          <Navbar color="white" expand="md" fixed="top">
            <Container>
              <img className="logo" src={require("../assets/logo-soho.png")} />
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link color="white" href="#home" className="active">
                    <span>inicio</span>
                  </Nav.Link>
                  <Nav.Link href="#nosotos">
                    <span>nosotros</span>
                  </Nav.Link>
                  <Nav.Link href="#servicios">
                    <span>servicios</span>
                  </Nav.Link>
                  <Nav.Link href="#casosdexito">
                    <span>casos de éxito</span>
                  </Nav.Link>
                  <Nav.Link href="#unete">
                    <span>únete al equipo</span>
                  </Nav.Link>
                  <Nav.Link href="#contacto">
                    <span>contacto</span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <Container className="Hero">
          <h1 className="title">Nos especializamos en</h1>
          <h2 className="title2">interfaces digitales que los usuarios aman</h2>
          <button className="calltoa">HABLEMOS DE TU PROYECTO</button>
        </Container>
      </Container>
      <div className="event" dark>
        <p className="iconhero"><FiRadio /></p>
        <p className="event-text">
          EN DIRECTO · <span>SOHO está presente en el </span>
          <span>DIGITALBANK MONTEVIDEO.</span>{" "}
          <span>"Experiencia de Usuario" por Alvaro Añón (SEO de Soho).</span>
        </p>
        <button className="btn1">VER EVENTO</button>
        <button className="btn2">PRÓXIMOS EVENTOS</button>
      </div>
    </>
  )
}
export default Hero