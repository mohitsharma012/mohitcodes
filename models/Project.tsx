import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },  
  imageUrl: { type: String }, 
  imageUrl_2: { type: String }, 
  imageUrl_3: { type: String }, 
  livelink: { type: String },
});

// Check if the model is already compiled to prevent overwrite errors
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
