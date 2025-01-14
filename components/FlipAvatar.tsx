'use client'

import Image from "next/image";

export default function FlipAvatar() {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    element.style.animation = 'none';
    element.offsetHeight; // trigger reflow
    element.style.animation = 'coinFlip 1s ease-in-out';
  };

  return (
    <div className="relative w-40 h-40 mx-auto mb-4 group perspective-1000">
      <div 
        className="relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d cursor-pointer hover:animate-coin-flip"
        onClick={handleClick}
      >
        <Image
          src="/avatar.jpg"
          alt="Avatar"
          fill
          className="rounded-full object-cover border-4 border-pepe-green shadow-lg absolute backface-hidden"
          priority
        />
        <div className="absolute inset-0 rounded-full border-4 border-pepe-green bg-pepe-green backface-hidden transform rotateY-180 flex items-center justify-center text-6xl">
          🐸
        </div>
      </div>
    </div>
  );
} 