import React, { useState } from 'react';

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  // Project data
  const projects = [
    {
      id: 1,
      year: "2024",
      title: "Furniture 1 🏎️",
      image: "/Photos/2024.png",
      description: "This semester, we undertook an innovative engineering project where we repurposed everyday furniture into fully functional racing vehicles.",
      details: "The challenge involved selecting and modifying furniture pieces to incorporate wheels, steering mechanisms, and propulsion systems while optimizing for stability and speed. Each team approached the project with creativity, transforming items like office chairs, couches, and tables into competitive vehicles. We focused on problem-solving and design, navigating issues such as weight distribution, aerodynamics, and control. The project culminated in a timed obstacle course race, combining engineering skills with unconventional materials to create unique, functional racing furniture."
    },
    {
      id: 2,
      year: "2023",
      title: "Shirley Bot 🍒",
      image: "/Photos/2023.jpg",
      description: "This semester project involved designing and building an autonomous robot capable of creating Shirley Temple mocktails.",
      details: ""
    },
    {
      id: 3,
      year: "2022",
      title: "Pong Bot 🏓",
      image: "/Photos/2022.jpg",
      description: "Our 2022 project focused on...",
      details: ""
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 px-4">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Projects
          </h2>
          <h3 className="mt-20 text-xl text-gray-600 sm:text-2xl">
            Welcome! Here, you'll find a comprehensive archive of all of our projects.
          </h3>
          <h3 className="mt-8 text-xl text-gray-600 sm:text-2xl">
            Click on each to learn more.
          </h3>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-20">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => toggleExpand(project.id)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  <span className={`text-${project.year === "2024" ? "red" : project.year === "2023" ? "blue" : "green"}-500`}>
                    {project.year}
                  </span> - {project.title}
                </h2>
                <p className="mt-2 text-gray-600">
                  {project.description}
                </p>
                {/* Show more details if the project is expanded */}
                {expandedProject === project.id && (
                  <div className="mt-4 text-gray-700">
                    <p>{project.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;