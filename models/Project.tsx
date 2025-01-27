import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },  
  imageUrl: { type: String }, 
  livelink: { type: String, required: true },
  gitlink: { type: String, required: true },
  technologies: {
    type: [String],  
    required: true
  },
});

// Check if the model is already compiled to prevent overwrite errors
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
