
import React from 'react';

interface GiftBoxProps {
  onOpen: () => void;
}

const GiftBox: React.FC<GiftBoxProps> = ({ onOpen }) => {
  return (
    <div 
      onClick={onOpen}
      className="relative w-64 h-64 cursor-pointer group transition-transform hover:scale-105 active:scale-90"
    >
      {/* Lid Shadow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-black opacity-10 blur-xl rounded-full"></div>

      {/* The Box */}
      <div className="absolute inset-0 bg-red-600 border-4 border-red-700 rounded-lg shadow-2xl flex items-center justify-center">
        {/* Ribbon Horizontal */}
        <div className="absolute left-0 right-0 h-10 bg-yellow-400"></div>
        {/* Ribbon Vertical */}
        <div className="absolute top-0 bottom-0 w-10 bg-yellow-400"></div>
      </div>

      {/* Box Lid */}
      <div className="absolute -top-4 -left-4 w-[112%] h-16 bg-red-500 border-4 border-red-700 rounded-md shadow-lg transition-transform group-hover:-translate-y-2">
         {/* Bow Decoration */}
         <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20">
            <div className="absolute top-2 left-0 w-12 h-12 border-4 border-yellow-400 rounded-full rotate-45"></div>
            <div className="absolute top-2 right-0 w-12 h-12 border-4 border-yellow-400 rounded-full -rotate-45"></div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full"></div>
         </div>
         {/* Lid Ribbon Horizontal */}
         <div className="absolute top-4 left-0 right-0 h-6 bg-yellow-400"></div>
         {/* Lid Ribbon Vertical */}
         <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 bg-yellow-400"></div>
      </div>

      <p className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white font-bold text-lg animate-bounce whitespace-nowrap">
        Tap to Unbox! 🎁
      </p>
    </div>
  );
};

export default GiftBox;
