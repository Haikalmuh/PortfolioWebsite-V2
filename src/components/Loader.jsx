import { useState, useEffect } from "react";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          if (onFinish) onFinish();
          return 100;
        }
        return old + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen relative text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/sky.jpg')" }}
    >
      {/* Overlay gelap supaya teks/bar tetap terbaca */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Progress Bar */}
      <div className="relative w-3/4 max-w-lg h-6 bg-neutral-800 rounded-full overflow-hidden shadow-md z-10">
        {/* Progress Isi */}
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-200 ease-linear"
          style={{ width: `${progress}%` }}
        />

        {/* Rocket */}
        <img
          src="/assets/rocket.svg"
          alt="Rocket"
          className="absolute -top-12 w-12 h-12 transition-all duration-200 ease-linear"
          style={{
            left: `${progress}%`,
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Persen */}
      <p className="mt-6 text-lg font-mono tracking-wide z-10">
        {progress}% Loading...
      </p>
    </div>
  );
};

export default Loader;
