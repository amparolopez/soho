import React, { useState, useEffect } from "react";
import { getAllProjects } from "../service/queries";
import Project from "./Project.js"

const Projects = (props) => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    getAllProjects()
      .then((response) => {
        setProject(response);
      })
      .catch((error) => console.log(error));
  },[]);
console.log(projects)

  return (
    <>
    {projects.map(project=> <Project data={project}/>)}
    </>
  );
};


export default Projects