"use client"

import React, { useRef } from "react";

interface TextProsp {
  children: React.ReactNode;
  className?: string
}

const SmallText: React.FC<TextProsp> = ({ children, className }) => {
  return (
    <div 
        className={`text-sm ${className}`}
    >
        {
            children
        }
    </div>
  );
};

export default SmallText;
