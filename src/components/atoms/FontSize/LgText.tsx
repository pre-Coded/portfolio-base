"use client"

import React, { useRef } from "react";

interface TextProsp {
  children: React.ReactNode;
  className?: string
}

const LgText: React.FC<TextProsp> = ({ children, className }) => {
  return (
    <div 
        className={`text-2xl ${className}`}
    >
        {
            children
        }
    </div>
  );
};

export default LgText;
