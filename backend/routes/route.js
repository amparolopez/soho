const Router = require('express').Router()
const projectController = require('../controllers/projectController')

const {obtainAllProjects, postAProject, deleteAProject, updateAProject}= projectController


// project 
Router 
.route('/projects')
.get(obtainAllProjects)
.post(postAProject)
.delete(deleteAProject)
.put(updateAProject)


module.exports = Router