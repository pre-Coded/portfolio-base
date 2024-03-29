"use client"

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CardsProps {
  children: React.ReactNode;
}

const Cards: React.FC<CardsProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({ once: true });

  return (
    <section 
        ref={inViewRef}
    >
      <div>
        {
            children
        }
      </div>
    </section>
  );
};

export default Cards;
