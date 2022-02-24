import React from "react"
import { MdAddLocation } from 'react-icons/md';


const Footer = () => {
  return (   
    <>
    <div className="footerCont">
      <footer>
      <div className="icon">
        <MdAddLocation />
      </div>
        <div className="copyright">
          <p> &copy; 2017 <span className="spanFooter">SOHO internet+humana</span> </p> 
        </div>  
        <div className="linksfooter">
          <p> Visítanos</p> 
          <p> Escríbenos</p> 
          <p> Llámanos </p> 
        </div> 
        <div className="social">
          <p className="facebook">Facebook</p> 
          <p className="twitter">Twitter</p> 
          <p className="linkedin">LinkedIn </p> 
          <p className="youtube">YouTube </p> 
        </div>  
      </footer>
    </div>
    </>
)
}
export default Footer