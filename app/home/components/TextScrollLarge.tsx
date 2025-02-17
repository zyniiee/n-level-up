"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const TextScrollLarge = () => {
  // Track scroll progress
  const { scrollYProgress } = useScroll();
  const leftTextX = useTransform(scrollYProgress, [0, 1], ["-20vw", "15vw"]);
  const rightTextX = useTransform(scrollYProgress, [0, 1], ["15vw", "-15vw"]);

  return (
    <section className="pt-32 flex flex-col items-center space-y-4">
      <motion.p
        style={{ x: leftTextX }}
        className="text_scroll_large xl:text-[8vw] text-[8vw]  font-extralight uppercase"
      >
        Details create
      </motion.p>

      <motion.p
        style={{ x: rightTextX }}
        className="text_scroll_large  xl:text-[8vw] text-[8vw] font-extralight uppercase"
      >
        a good designer
      </motion.p>
    </section>
  );
};

export default TextScrollLarge;
