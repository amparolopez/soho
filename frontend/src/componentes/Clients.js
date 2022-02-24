import React from "react";

const Clients = () => {
  return (
<>
<div className="contenedor-principal">
        <h2 className="text-white">Lo que dicen nuestros clientes</h2>
        <h2 className="text-sub">_________</h2>
        <div className="contenedor-img "> 
            <div className="bg-blue text-img">
                <span className="clientText">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ab dignissimos, consequatur temporibus culpa aliquam unde"</span>
                <h4 className="clientName">Cristobal Fernandez- CEO Copec</h4>
            </div>
            <div className="bg-red text-img">
                <span className="clientText">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ab dignissimos, consequatur temporibus culpa aliquam unde"</span>
                <h4  className="clientName" >Maria Paz Segers - Lead Digital BBVA</h4>
            </div>
            <div className="bg-green text-img">
                <span className="clientText">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ab dignissimos, consequatur temporibus culpa aliquam unde"</span>
                <h4 className="clientName" >Renato Bascuñán - Lead Digital Chilena</h4>
            </div>

        </div>
        <button className="btn1" >HABLEMOS DE TU PROYECTO</button>
    </div>
</>
  );
};
export default Clients;
