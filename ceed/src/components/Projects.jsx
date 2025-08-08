import React from "react";

function Projects() {
  // Project data
  const projects = [
    {
      id: 1,
      year: "2025",
      title: "Lotl  ꒰(˶• ᴗ •˶)꒱",
      image: "/Photos/lotl.jpg",
      description: "Lotl Bot is an in-progress animatronic project designed to respond to human interaction through computer vision. ",
      details: "Using onboard cameras, it will detect specific hand gestures and trigger servo-controlled facial and body expressions. Planned features include audio playback for vocal responses, an RFID scanner for personalized interactions, and additional modules to expand its interactive capabilities."
    },
    {
      id: 2,
      year: "2024",
      title: "Furniture1 🏎️",
      image: "/Photos/furniture1.jpg",
      description:
        "This project involved innovative engineering where we repurposed everyday furniture into fully functional racing vehicles.",
      details:
        "The challenge involved selecting and modifying furniture pieces to incorporate wheels, steering mechanisms, and propulsion systems while optimizing for stability and speed. Each team approached the project with creativity, transforming items like office chairs, couches, and tables into competitive vehicles. We focused on problem-solving and design, navigating issues such as weight distribution, aerodynamics, and control."
    },
    {
      id: 3,
      year: "2023",
      title: "Shirley Bot 🍒",
      image: "/Photos/shirley.jpg",
      description:
        "This project involved designing and building an autonomous robot capable of creating Shirley Temple mocktails.",
      details: "Shirley Bot combined mechanical, electrical, and software systems to autonomously mix Shirley Temple mocktails. A custom frame held sensors to ensure proper cup placement, and a microcontroller coordinated pump timing and cup movement. The result was a compact, automated drink-maker that delivered consistent and tasty results."
    }
  ];

  // Sort by most recent year first
  const sortedProjects = [...projects].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 px-4">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-12">
          Projects
        </h2>
        <div className="space-y-12">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  <span
                    className={`text-${
                      project.year === "2025"
                        ? "green"
                        : project.year === "2024"
                        ? "red"
                        : "blue"
                    }-500`}
                  >
                    {project.year}
                  </span>{" "}
                  - {project.title}
                </h3>
                <p className="mt-2 text-gray-700">{project.description}</p>
                <p className="mt-4 text-gray-700">{project.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
