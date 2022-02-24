import React from 'react'
import { BsTagFill } from 'react-icons/bs';

export default function Project({data, index}) {
  const direction = index %2===0 ? "row" : "row-reverse"
  const colorBlue = {
    color: 'blue',
    backgroundColor: 'white',
    border: 'none'
  }
  const colorRed = {
    color: 'red',
    backgroundColor: 'white',
    border: 'none'
  }
  const colorWhite = {
    color: 'white',
    backgroundColor: 'red',
    border: 'none'
  }
  const colorButtons = (title) => {
    if(title === 'Sitio publico y privado') {
      return colorBlue
    } else if (title === 'Sitios web 2017') {
      return colorRed
    } else {
      return colorWhite
    }
  }
  return (
  <>
  <div className="containerCard" style={{backgroundColor:data.bgColor, display: "flex", flexDirection: direction}}>
    <div className="project-photo">
      <img src={data.img} alt="img" className="projectImg" />
    </div>
    <div className="info-project">
      <img src={data.companyName} alt="img" className="projectInf" />
      <h2 className="projectInf-1">{data.title}</h2>
      <p className="projectInf-2">{data.description}</p>
      <p className="tag"> <span className="tagIcon"> <BsTagFill /></span>  {data.tag}</p>
      <button className='button-det' style={colorButtons(data.title)}>{data.button}</button>
    </div>
    <div>
    </div>
  </div>
  </>
  )
}
