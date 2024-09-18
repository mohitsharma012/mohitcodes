"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  numStars?: number;  // New prop for multiple stars
  className?: string;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4); // 4 sides of the screen (top, right, bottom, left)
  const offsetX = Math.random() * window.innerWidth;
  const offsetY = Math.random() * window.innerHeight;

  switch (side) {
    case 0: // Top
      return { x: offsetX, y: offsetY, angle: 45 };  // Top-left to bottom-right
    case 1: // Right
      return { x: offsetX, y: offsetY, angle: 50 };  // Top-right to bottom-left
    case 2: // Bottom
      return { x: offsetX, y: offsetY, angle: 40 }; // Bottom-right to top-left
    case 3: // Left
      return { x: offsetX, y: offsetY, angle: 35 }; // Bottom-left to top-right
    default:
      return { x: offsetX, y: offsetY, angle: 55 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 100,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 2,
  numStars = 5,  // Default to 5 stars
  className,
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now() + Math.random(), // Unique ID with randomness
        x,
        y,
        angle,
        scale: 3,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStars((prevStars) => [...prevStars, newStar]);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    // Create initial stars based on the numStars prop
    for (let i = 0; i < numStars; i++) {
      createStar();
    }

    return () => {};
  }, [minSpeed, maxSpeed, minDelay, maxDelay, numStars]);

  useEffect(() => {
    const moveStars = () => {
      setStars((prevStars) =>
        prevStars
          .map((star) => {
            const newX = star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 100;

            if (
              newX < -20 ||
              newX > window.innerWidth + 20 ||
              newY < -20 ||
              newY > window.innerHeight + 20
            ) {
              return null; // Remove star once it goes out of bounds
            }
            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              scale: newScale,
            };
          })
          .filter(Boolean) as ShootingStar[] // Remove null values (stars out of bounds)
      );
    };

    const animationFrame = requestAnimationFrame(moveStars);
    return () => cancelAnimationFrame(animationFrame);
  }, [stars]);

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0", className)}
    >
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
        />
      ))}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
