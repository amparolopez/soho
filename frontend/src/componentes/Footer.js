import { isTrivialHref } from "@restart/ui/esm/Anchor"
import React from "react"


const Footer = () => {
  return (   
    <>
    <div>
      <footer>
        <div className="copyright">
          <p> &copy; 2017 <span>SOHO internet+humana</span> </p> 
        </div>  
        <div className="linksfooter">
          <a> Visítanos</a> 
          <a> Escríbenos</a> 
          <a> Llámanos </a> 
        </div> 
        <div className="social">
          <p>Facebook</p> 
          <p>Twitter</p> 
          <p>LinkedIn </p> 
          <p> ouTube </p> 
        </div>  
      </footer>
    </div>
    </>
)
}
export default Footer