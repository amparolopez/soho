const Project = require ("../models/Project");

const projectController = {
  obtainAllProjects: async (req, res) =>{
    let projects;
    let error = null;
    try{
      projects = await Project.find()
    }catch (error){
      error=error
      console.error(error)
    }
    res.json({
      answer: error ? 'ERROR' : projects,
      success: error ? false : true,
      error : error
    })
  },
  postAProject : (req, res) =>{
    console.log("holajuancalo")

    const {companyName, title, description, tag, img} = req.body;
    new Project ({companyName, title, description, tag, img}).save()
    .then((answer)=>{
      console.log(answer)
      res.json({answer})
    })
    .catch(error=>{
      console.log(error)

    })
  },
  deleteAProject : async (req, res) => {
    let project
    const id = req.params.id
    try{
      project = await Project.findOneAndDelete({_id:id})
    }catch (error){
      console.error(error)
    }
    res.json({answer:project, success:true}) 
  },
  updateAProject : async (resq, res) =>{
    let id = req.params
    let project = req.body
    let updateProject 
    console.log(project);
    
    try{
    updateProject = await Project.findByIdAndUpdate({_id:id}, city, {new:true})
    console.log(updateProject)
    }catch (error){
      console.error(error)
    }
    res.json({answer: updateProject ? true : false})
  }
}

module.exports = projectController 