import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import HeroPhoto from "../components/HeroPhoto";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6 text-center md:flex-row md:justify-between md:text-left md:px-16 lg:px-24" id="home">
      <ParallaxBackground />

      {/* Photo (mobile atas, desktop kanan) */}
      <div className="z-10 flex justify-center w-full mt-6 -translate-y-4 md:translate-y-0 md:mt-[-40] md:w-1/2 lg:w-2/5 md:order-2 md:justify-end order-1">
        <HeroPhoto />
      </div>

      {/* Text (mobile bawah, desktop kiri agak naik) */}
      <div className="z-10 flex flex-col items-center mt-6 md:mt-[-60px] md:items-start max-w-xl md:order-1 order-2">
        <HeroText />
      </div>
    </section>
  );
};

export default Hero;
