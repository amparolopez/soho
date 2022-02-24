const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  companyName:{ type: String, required: true},
  title:{ type: String, required: true},
  description: {type: String, required: true},
  tag: [{type: String, required: true}],
  img: { type: String, required: true},
  bgColor: {type: String, required:true},
  button: {type:String, required:true}
  

})

const Project = mongoose.model('Project', projectSchema)

module.exports= Project;