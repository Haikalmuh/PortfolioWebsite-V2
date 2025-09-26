const HeroPhoto = () => {
  return (
    <div className="absolute top-1/2 right-[-40] -translate-y-1/2">
      <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 p-[3px] shadow-[0_0_60px_rgba(139,92,246,0.6)]">
        <img
          src="/assets/profile.png"
          alt="My Profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroPhoto;
