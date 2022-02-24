const Project = require ("../models/Project");

const projectController = {
  obtainAllProjects: async (req, res) =>{
    let projects;
    let error = null;
    try{
      // projects = await Project.find()
      Project.find().then((response)=>
      res.json({
        answer: error ? 'ERROR' : response,
        success: error ? false : true,
        error : error
      })
      )
      console.log(projects)
    }catch (error){
      error=error
      console.error(error)
    }
  },
  postAProject : (req, res) =>{

    const {companyName, title, description, tag, img, bgColor, button} = req.body;
    new Project ({companyName, title, description, tag, img, bgColor, button}).save()
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
    updateProject = await Project.findByIdAndUpdate({_id:id}, project, {new:true})
    console.log(updateProject)
    }catch (error){
      console.error(error)
    }
    res.json({answer: updateProject ? true : false})
  }
}

module.exports = projectController 