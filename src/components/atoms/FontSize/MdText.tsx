"use client"

import React, { useRef } from "react";

interface TextProsp {
  children: React.ReactNode;
  className?: string;
}

const MdText: React.FC<TextProsp> = ({ children, className }) => {
  return (
    <div 
        className={`text-md ${className}`}
    >
        {
            children
        }
    </div>
  );
};

export default MdText;
