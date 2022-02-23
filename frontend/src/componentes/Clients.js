import React from "react"


const Clients = () => {
  return (   
    <>
    <div className="containerClients">
      <div className="clientTitle">
        <h2>Lo que dicen nuestros clientes</h2>
      </div>
      <div className="clientsimg">
      <img className="imgClients" src={require('../assets/clientsimg.jpg')} />
      </div>
      <div className="btncontact">
        <button className="btn3">HABLEMOS DE TU PROYECTO</button>
      </div>
    </div>
    </>
)
}
export default Clients