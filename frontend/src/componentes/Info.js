import React from "react"
import {Col, Container} from "react-bootstrap"

const Info = () => {
  return (
    <>
      <div className="containerInfo">
        <Container className="mainInfo ">
          <h1 className="mainInfo__title">
            17 años de experiencia en pos de tu proyecto
          </h1>
          <p>
            Especializados desde 1996 en usabilidad, experiencia del usuario
            (UX) y diseño de experiencias de proyectos digitales. Aportamos
            estrategia e innovación centrada en el usuario y los objetivos de
            negocio de tu proyecto. Cotrabajando mejoraremos tu tasa de
            conversión, KPI's, ROI y los resultados de tu actual publicidad PPC
            (pay per click)
          </p>
        </Container>
        <div className="cardsInfo">
          <Col
            className="cardInfo"
            style={{
              backgroundColor: "#40444c",
            }}
          >
            <h2 className="titleInfo">Estrategia, usabilidad & ux </h2>
            <p className="infoText">
              Te ofrecemos excelente usabilidad y experiencia del usuario en tu
              proyecto, junto a una visión innovadora
            </p>
          </Col>
          <Col className="cardInfo" style={{backgroundColor: "#181c24"}}>
            <h2 className="titleInfo">Mejoramos la experiencia</h2>
            <p className="infoText">
              Tangibilizamos tu proyecto digital a través de un diseño centrado
              en el usuario y técnicas avanzadas
            </p>
          </Col>
          <Col className="cardInfo" style={{backgroundColor: "#202a36"}}>
            <h2 className="titleInfo">Medición continua de objetivos</h2>
            <p className="infoText">
              Implementación, testing con usuarios y medición continua son
              necesarias para garantizar el éxito de tu proyecto
            </p>
          </Col>
        </div>
        <div className="projects">
          <h1 className="mainProjects__title">
            Proyectos destacados
          </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis
            non sem elementum tempor in at urna. Suspendisse auctor libero ut
            nibh consequat sed sagittis dolor iaculis.
          </p>
        </div>
      </div>
    </>
  )
}
export default Info