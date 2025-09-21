import { useState } from "react";
import { myProjects } from "../constants";
import Project from "../components/Project";
import ProjectDetails from "../components/ProjectDetails";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="c-space section-spacing" id="projects">
      <h2 className="text-heading">My Selected Projects</h2>

      {/* Grid layout 2 baris × 3 kolom */}
      <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {myProjects.map((project) => (
          <Project
            key={project.id}
            project={project}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>

      {/* Modal detail */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          closeModal={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Projects;
