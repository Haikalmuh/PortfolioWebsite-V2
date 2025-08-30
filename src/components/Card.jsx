import { motion } from "motion/react";

const sizeMap = {
  sm: "w-12", // kecil (48px)
  md: "w-16", // sedang (64px)
  lg: "w-24", // besar (96px)
  xl: "w-32", // ekstra besar (128px)
};

const Card = ({ style, text, image, containerRef, size = "md" }) => {
  const sizeClass = sizeMap[size] || sizeMap["md"];

  return image && !text ? (
    <motion.img
      className={`absolute ${sizeClass} cursor-grab`}
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
