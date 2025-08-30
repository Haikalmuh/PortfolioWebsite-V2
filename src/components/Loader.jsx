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
    }, 50);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen relative bg-gradient-to-b from-black via-purple-900 to-black text-white overflow-hidden">
      {/* Background bintang */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:30px_30px] opacity-40 animate-pulse"></div>

      {/* Progress Bar */}
      <div className="relative w-3/4 max-w-lg h-6 bg-neutral-800 rounded-full overflow-hidden shadow-md">
        {/* Progress Isi */}
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-200 ease-linear"
          style={{ width: `${progress}%` }}
        />

        {/* Rocket */}
        <img
          src="/assets/rocket.svg" // kalau png: "/assets/rocket.png"
          alt="Rocket"
          className="absolute -top-12 w-12 h-12 transition-all duration-200 ease-linear"
          style={{
            left: `${progress}%`,
            transform: "translateX(-50%)", // biar posisi tengah
            background: "rgba(255,0,0,0.2)", // DEBUG: kasih warna biar ketahuan posisinya
          }}
        />
      </div>

      {/* Persen */}
      <p className="mt-6 text-lg font-mono tracking-wide">
        {progress}% Loading...
      </p>
    </div>
  );
};

export default Loader;
