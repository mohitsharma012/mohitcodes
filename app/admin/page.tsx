'use client';
import React, { useEffect, useState } from 'react';
import { LogIn, Mail, Lock } from 'lucide-react';
import { Plus, Briefcase, LogOut, ChevronRight, Trash2 } from 'lucide-react';

import { TECHNOLOGIES } from '@/lib/constants';
import Project from '@/models/Project';
import { a } from 'framer-motion/client';


interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  livelink : string;
  gitlink : string;
  technologies: string[];
}

const page = () => {


  const [email, setEmail] = useState('stayer.mohit@gmail.com');
  const [password, setPassword] = useState('1234');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [user, setUser] = useState(null);
  
  const [projects, setProjects] = useState<Project[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState<{ title: string; description: string; imageUrl: string; livelink: string; gitlink: string; technologies: string[] }>({
    title: '',
    description: '',
    imageUrl: '',
    livelink: '',
    gitlink: '',
    technologies: [] as string[],


  });

  const userClone = async () => {
    try {
      const response = await fetch('/api/user/user-clone', {
        method: 'GET',
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        console.log('User clone:', data.user);
      } else {
        console.error('User clone failed');
      }
    } catch (err) {
      console.error('Error during user clone:', err);
    }
  };

  const onLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/project', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      } else {
        console.error('Fetching projects failed');
      }
    } catch (err) {
      console.error('Error during projects fetch:', err);
    }
  };


  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    const project: Project = {
      _id: '',
      title: newProject.title,
      description: newProject.description,
      imageUrl: newProject.imageUrl,
      livelink: newProject.livelink,
      gitlink: newProject.gitlink,
      technologies: newProject.technologies, // Ensure this is passed correctly
    };

    const response = await fetch('/api/project', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });

    if (response.ok) {
      setProjects([...projects, project]);
      setShowAddForm(false);
    }
    
  };

  const handleEditProject = async (id: string) => {
    const project = projects.find((project) => project._id === id);
    if (!project) {
      console.error('Project not found');
      return;
    }

    const updatedProject = {
      id: project._id,
      title: 'Updated Title',
      description: 'Updated Description',
      imageUrl: 'Updated Image Url',
      livelink: 'Updated Live Url',
      gitlink: 'Updated Git Url',
      technologies: ['Updated Technology'],
    };

    const response = await fetch(`/api/project/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProject),
    });

    if (!response.ok) {
      alert('Error updating project');
    }
    fetchProjects();
  };
      

  const handleDeleteProject = async (id: number) => {
    const response = await fetch(`/api/project/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('Error deleting project');
    }
    fetchProjects();

  };





      




  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const url = `/api/user/login`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('Login successful!');
        // Save the token in localStorage or cookies
        localStorage.setItem('token', data.token);
        userClone();
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };




  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      userClone();
      
    }
    fetchProjects();

    console.log(user)
    
  }, []);

  return (
    <>
    {user ? (
      <div className="min-h-screen  bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b z-50 flex w-full h-24 fixed border-gray-700">
        <div className="w-full mx-auto px-6 h-auto  my-auto sm:px-6 lg:px-16">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-purple-400" />
              <h1 className="ml-3 text-2xl font-bold text-white">Project Dashboard</h1>
            </div>
            <div className='flex items-center space-x-4'>
            <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg 
                     hover:bg-purple-700 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Project
          </button>

            <button
              onClick={onLogout}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
              >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
              </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl pt-36 mx-auto py-6 sm:px-6 lg:px-8">
        

        {/* Add Project Form */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-75 mt-16 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md border border-gray-700">
              <h2 className="text-xl font-bold mb-4 text-white">Add New Project</h2>
              <form onSubmit={handleAddProject} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300">Title</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white
                             shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 p-1
                             focus:ring-opacity-50"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Description</label>
                  <textarea
                    required
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white
                             shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 
                             focus:ring-opacity-50"
                    rows={3}
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Image Url</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white
                             shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 p-1
                             focus:ring-opacity-50"
                    value={newProject.imageUrl}
                    onChange={(e) => setNewProject({...newProject, imageUrl: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Live Url</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white
                             shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 p-1
                             focus:ring-opacity-50"
                    value={newProject.livelink}
                    onChange={(e) => setNewProject({...newProject, livelink: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Git Url</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white
                             shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 p-1
                             focus:ring-opacity-50"
                    value={newProject.gitlink}
                    onChange={(e) => setNewProject({...newProject, gitlink: e.target.value})}
                  />
                </div>


                <div>
                  <label className="block text-sm font-medium text-gray-300">Technologies Used</label>
                  <div className="space-y-2 h-36 overflow-scroll overflow-x-hidden">
                    {TECHNOLOGIES.map((tech) => (
                      <div key={tech} className="flex items-center">
                        <input
                          type="checkbox"
                          id={tech}
                          value={tech}
                          checked={newProject.technologies.includes(tech)}
                          onChange={(e) => {
                            const selectedTechnologies = e.target.checked
                              ? [...newProject.technologies, tech] // Add the technology if checked
                              : newProject.technologies.filter((item) => item !== tech); // Remove it if unchecked
                            setNewProject({ ...newProject, technologies: selectedTechnologies });
                          }}
                          className="h-4 w-4 rounded text-purple-500 border-gray-600 bg-gray-700 "
                        />
                        <label htmlFor={tech} className="ml-2 text-white">{tech}</label>
                      </div>
                    ))}
                  </div>
                </div>


                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                  >
                    Add Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Projects List */}
        <div className="mt-6">
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <Briefcase className="mx-auto h-12 w-12 text-gray-600" />
              <h3 className="mt-2 text-sm font-medium text-gray-300">No projects</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
            </div>
          ) : (
            <div className="bg-gray-800 shadow overflow-hidden sm:rounded-lg border border-gray-700">
              <ul className="divide-y divide-gray-700">
                {projects.map((project) => (
                  <li key={project._id}>
                    <div className="px-4 py-4 sm:px-6 hover:bg-gray-700">
                      <div className="flex items-center justify-between gap-8">
                        <img src={project.imageUrl} alt="img" className='w-36' />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-purple-400 truncate">{project.title}</p>
                            
                          </div>
                          <p className="mt-2 text-sm text-gray-400">{project.description}</p>
                        </div>
                        {/* <div className="ml-4 flex items-center space-x-4">
                          <button
                            onClick={() => handleDeleteProject(project._id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => setShowAddForm(true)}
                            className="text-red-400 hover:text-red-300"
                          >
                            < className="h-5 w-5" /> 
                            edit
                          </button>
                          <ChevronRight className="h-5 w-5 text-gray-600" />
                        </div> */}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
    ) : (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-8 border border-gray-700">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-gray-700 rounded-full flex items-center justify-center">
              <LogIn className="h-6 w-6 text-purple-400" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-white">Admin Login</h2>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg 
                          bg-gray-700 text-white placeholder-gray-400
                          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg 
                          bg-gray-700 text-white placeholder-gray-400
                          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm 
                      text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 
                      focus:ring-offset-gray-800 transition-colors"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      
    )}
    </>

  );
};

export default page;