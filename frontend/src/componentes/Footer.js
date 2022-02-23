import { isTrivialHref } from "@restart/ui/esm/Anchor"
import React from "react"


const Footer = () => {
  return (   
    <>
    <div className="footerCont">
      <footer>
        <div className="copyright">
          <p> &copy; 2017 <span>SOHO internet+humana</span> </p> 
        </div>  
        <div className="linksfooter">
          <p> Visítanos</p> 
          <p> Escríbenos</p> 
          <p> Llámanos </p> 
        </div> 
        <div className="social">
          <p>Facebook</p> 
          <p>Twitter</p> 
          <p>LinkedIn </p> 
          <p>YouTube </p> 
        </div>  
      </footer>
    </div>
    </>
)
}
export default Footer