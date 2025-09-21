const Project = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:scale-[1.02] transition-transform duration-300"
    >
      {/* Project preview image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
      />

      {/* Overlay hover effect */}
      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
        <p className="text-lg font-semibold text-white">View Details</p>
      </div>
    </div>
  );
};

export default Project;
