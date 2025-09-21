import { motion } from "motion/react";

const ProjectDetails = ({ project, closeModal }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-sm bg-black/50">
      <motion.div
        className="relative w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto border shadow-md rounded-2xl bg-gradient-to-br from-midnight to-navy border-white/10"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-md top-4 right-4 bg-midnight/80 hover:bg-gray-600 transition"
        >
          <img src="assets/close.svg" className="w-5 h-5" alt="close" />
        </button>

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full rounded-t-2xl max-h-[250px] md:max-h-[300px]"
        />

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h5 className="mb-2 text-2xl font-bold text-white">
            {project.title}
          </h5>
          {/* Short description */}
          <p className="mb-4 text-neutral-300 leading-relaxed">
            {project.description}
          </p>

          {/* Footer */}
          <div className="flex flex-col items-start gap-4 mt-6 md:flex-row md:items-center md:justify-between">
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <div
                  key={tag.id}
                  className="flex items-center justify-center p-1.5 rounded-md bg-white/10"
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="w-7 h-7"
                  />
                </div>
              ))}
            </div>

            {/* View project button */}
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
