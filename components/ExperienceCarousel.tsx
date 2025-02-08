'use client'

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "Sgod Company",
    position: "Web Security Developer Intern",
    duration: "06/2023-11/2023",
    description: "Learned and researched about backend service design, encryption and security systems, content and image encryption",
    technologies: [
      "Developed backend service using NestJS with MongoDB for data storage",
      "Implemented AES256, RSA and SHA256 encryption",
      "Built both React frontend and NestJS backend for authentication system using OAuth 2.0 and JWT",
    ],
    responsibilities: [
      "Completed tasks according to company deadlines and requirements",
      "Collaborated with team members to accomplish project goals",
      "Self-learned and researched new technologies to complete assignments",
      "Reported work progress at each project phase"
    ]
  },
  {
    company: "BSCS - Meta fintech company",
    position: "Blockchain Developer Intern",
    duration: "02/2024 - 06/2024",
    description: "Learned and researched development based on the company's existing Solana program launchpad token, participated in the development process of trading bot products using Solidity language on the Avalanche blockchain network",
    technologies: [
      "Developed Solana programs using Anchor Framework version 29+",
      "Programmed in Solidity using Remix IDE and Hardhat to interact with Joe Router for swapping and liquidity pool interactions in the Avalanche ecosystem",
      "Learned and explored frontend interactions with Solana Programs using ReactJS and NextJS frameworks"
    ],
    responsibilities: [
      "Completed tasks according to company deadlines and requirements",
      "Collaborated with team members to accomplish project goals",
      "Self-learned and researched new technologies to complete assignments",
      "Reported work progress at each project phase"
    ]
  },
  {
    company: "VBI Academy",
    position: "Developer Community",
    duration: "07/2024 - 11/2024",
    description: "Researched and learned about blockchain technologies, developed puzzle web games for students, shared knowledge about blockchain and related technologies",
    technologies: [
      "Developed puzzle web game UX/UI using ReactJS and Figma",
      "Developed security mechanisms and handled security risks on the puzzle web game",
      "Researched and shared articles about blockchain and related technologies",
    ],
    responsibilities: [
      "Collaborated with team members to accomplish project goals",
      "Responsible for security risks and hack incidents on designed puzzle game projects",
      "Self-learned and researched new technologies to complete assignments",
      "Developed and built personal branding through articles on blockchain and related technology websites"
    ]
  }
];

export default function ExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Chuyển slide mỗi 5 giây
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false); // Tạm dừng tự động chuyển khi người dùng tương tác
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false); // Tạm dừng tự động chuyển khi người dùng tương tác
  };

  // Thêm handler cho hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const currentExperience = experiences[currentIndex];

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden rounded-xl p-6 backdrop-blur-sm border-2 border-pepe-green">
        <div 
          className="transition-all duration-500 ease-in-out transform"
          style={{
            opacity: 1,
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          <div className="flex flex-nowrap">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 transition-opacity duration-500"
                style={{ opacity: index === currentIndex ? 1 : 0 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-xl">{experience.position} | {experience.company}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{experience.duration}</p>
                </div>

                <div className="space-y-4">
                    <ul className="list-disc list-inside">
                        <li>
                            <strong>Descriptions: </strong>
                            <p>{experience.description}</p>
                        </li>
                    </ul>

                  <div>
                    <ul className="list-disc list-inside">
                        <li>
                            <strong>Technologies: </strong>
                            <ul className="list-[circle] list-inside ml-6 mt-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <li 
                          key={techIndex} 
                          className="transform transition-transform duration-300 hover:translate-x-2"
                        >
                          {tech}
                            </li>
                        ))}
                    </ul>
                    </li>
                  </ul>
                  </div>

                  <div>
                    <ul className="list-disc list-inside">
                        <li>
                            <strong>Responsibilities: </strong>
                            <ul className="list-[circle] list-inside ml-6 mt-2">
                      {experience.responsibilities.map((resp, respIndex) => (
                        <li 
                          key={respIndex} 
                          className="transform transition-transform duration-300 hover:translate-x-2"
                        >
                          {resp}
                        </li>
                      ))}
                    </ul>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-pepe-green text-white p-2 rounded-full hover:scale-110 transition-transform duration-300"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-pepe-green text-white p-2 rounded-full hover:scale-110 transition-transform duration-300"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {experiences.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-pepe-green w-4' 
                : 'bg-gray-300 hover:bg-pepe-green/50'
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
          />
        ))}
      </div>
    </div>
  );
} 