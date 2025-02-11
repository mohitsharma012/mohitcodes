"use client";
import React, { useEffect, useState } from "react";
import { Plus, Briefcase } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageUrl_2: string;
  imageUrl_3: string;
  livelink: string;
}

const Page = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formProject, setFormProject] = useState<Project>({
    _id: "",
    title: "",
    description: "",
    imageUrl: "",
    imageUrl_2: "",
    imageUrl_3: "",
    livelink: "",
  });

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/project");
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const requestMethod = editingProject ? "PUT" : "POST";
    const endpoint = editingProject
      ? `/api/project/${formProject._id}`
      : "/api/project";

    const response = await fetch(endpoint, {
      method: requestMethod,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formProject),
    });

    if (response.ok) {
      fetchProjects();
      setShowForm(false);
      setEditingProject(null);
    } else {
      console.error(`Error ${editingProject ? "updating" : "adding"} project`);
    }
  };

  const handleEditClick = (project: Project) => {
    setFormProject(project);
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDeleteClick = async (id: string) => {
    const response = await fetch(`/api/project/${id}`, { method: "DELETE" });
    if (response.ok) {
      fetchProjects();
    } else {
      console.error("Error deleting project");
    }
  };

  const handleAddClick = () => {
    setFormProject({
      _id: "",
      title: "",
      description: "",
      imageUrl: "",
      imageUrl_2: "",
      imageUrl_3: "",
      livelink: "",
    });
    setEditingProject(null);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 border-b border-gray-700 fixed w-full h-28 z-50 flex items-center justify-between px-6">
        <div className="flex items-center">
          <Briefcase className="text-purple-400 w-6 h-6" />
          <h1 className="ml-3 font-bold text-lg">Project Dashboard</h1>
        </div>
        <button
          onClick={handleAddClick}
          className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </button>
      </header>

      <main className="max-w-7xl mx-auto pt-44 px-4">
        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-gray-800 flex p-4 rounded-lg border border-gray-700"
            >
              <img src={project.imageUrl} alt="img" className="w-60 rounded" />
              <div className="px-10">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>
              </div>
              <div className=" flex gap-4 flex-col">
                <button
                  onClick={() => handleEditClick(project)}
                  className="text-sm text-white hover:bg-blue-900 bg-blue-800 px-6 rounded py-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(project._id)}
                  className="text-sm text-white hover:bg-red-900 bg-red-700 px-6 rounded py-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showForm && (
        <div className="fixed inset-0 pt-16 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-full  max-w-2xl">
            <h2 className="text-xl font-bold mb-4">
              {editingProject ? "Edit Project" : "Add Project"}
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm">Title</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={formProject.title}
                  onChange={(e) =>
                    setFormProject({ ...formProject, title: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm">Description</label>
                <textarea
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  rows={3}
                  value={formProject.description}
                  onChange={(e) =>
                    setFormProject({
                      ...formProject,
                      description: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm">Image URL</label>
                <input
                  type="url"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={formProject.imageUrl}
                  onChange={(e) =>
                    setFormProject({ ...formProject, imageUrl: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm">Image URL 2</label>
                <input
                  type="url"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={formProject.imageUrl_2}
                  onChange={(e) =>
                    setFormProject({
                      ...formProject,
                      imageUrl_2: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm">Image URL 3</label>
                <input
                  type="url"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={formProject.imageUrl_3}
                  onChange={(e) =>
                    setFormProject({
                      ...formProject,
                      imageUrl_3: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm">Live Link</label>
                <input
                  type="url"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={formProject.livelink}
                  onChange={(e) =>
                    setFormProject({ ...formProject, livelink: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded"
                >
                  {editingProject ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
