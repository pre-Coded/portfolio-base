"use client"

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CardsProps {
  children: React.ReactNode;
}

const Cards: React.FC<CardsProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref}
      className={`cursor-pointer`}
    >
      <motion.div
        initial={{
          opacity : 0,
          y : 100,
        }}
        animate={{
          opacity : isInView ? 1 : 0, 
          y : isInView ? 0 : 100,
        }}
        transition={{
          type : 'tween',
          duration : 0.4,
          scale : {
            duration : 0.2
          }
        }}
      >
        {
            children
        }
      </motion.div>
    </section>
  );
};

export default Cards;
