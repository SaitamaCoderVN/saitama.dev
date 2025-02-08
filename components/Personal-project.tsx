'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  name: string;
  duration: string;
  description: string;
  technologies: string[];
  features: string[];
  githubLink?: string;
  websiteLink?: string;
}

const projects: Project[] = [
  {
    name: "Dragon Soul Bound NFT",
    duration: "01/2024 - Present",
    description: "Dragon Soul Bound NFT is a project that allows users to create and manage their own NFTs on the blockchain.",
    technologies: [
      "NextJS 14",
      "TailwindCSS",
      "TypeScript",
      "Solidity",
      "Unique SDK"
    ],
    features: [
      "Allow Discord login for wallet address identification",
      "Create and manage Dynamic NFTs",
      "NFTs can level up and change based on their attributes",
      "Used to manage and provide NFTs to community members",
      "People can prove their contributions through NFTs",
      "Admin can reward community members through NFTs",
    ],
    githubLink: "https://github.com/SaitamaCoderVN/DragoNFT",
    websiteLink: "https://dragonft.org"
  },
  {
    name: "AceXeus - Super App for Web3",
    duration: "09/2024 - Present",
    description: "AceXeus is a super app for Web3 that allows users to manage their finances, track their expenses, and create reports and goals.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS"
    ],
    features: [
      "Allows users to easily interact with Blockchain services directly on X",
      "Use services like: Staking, mint NFT, Transfer token, Swap token, etc.",
    ],
    githubLink: "https://github.com/Weminal-labs/ActionX-Frontend",
    websiteLink: "https://acexeus.vercel.app"
  },
  {
    name: "AI Puzzler - Yumiara",
    duration: "11/2024 - Present",
    description: "An AI Agent platform trained to challenge users when they try to earn money from it",
    technologies: [
      "Nextjs",
      "MongoDB",
      "OpenAI",
      "Vercel"
    ],
    features: [
      "Chat with AI to earn money",
      "Multi-sig wallet for reward fund management",
      "Interact with Kyper Swap's liquidity pool",
    ],
    githubLink: "https://github.com/Lou1sVuong/athena-ai",
    websiteLink: "https://athena-ai-beryl.vercel.app"
  }
];

export default function PersonalProject() {
  return (
    <section className="relative">
      <h2 className="text-2xl font-bold mb-4">Founder of:</h2>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group relative flex gap-4 rounded-xl p-6 backdrop-blur-sm border-2 border-pepe-green hover:shadow-lg transition-all duration-300"
          >
            {/* Thanh bên trái khi hover */}
            <div className="absolute left-0 top-0 h-full w-1 bg-pepe-green transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
            
            {/* Nội dung chính luôn hiển thị */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-xl group-hover:text-pepe-green transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.duration}
                </p>
              </div>
              
              <p className="mb-4">{project.description}</p>
              
              {/* Phần thông tin chi tiết - hiện khi hover */}
              <div className="grid grid-cols-1 gap-4 overflow-hidden max-h-0 group-hover:max-h-[500px] transition-all duration-500">
                <div>
                  <strong>Technologies used: </strong>
                  <ul className="list-[circle] list-inside ml-6 mt-2">
                    {project.technologies.map((tech, idx) => (
                      <li key={idx}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <strong>Main features: </strong>
                  <ul className="list-[circle] list-inside ml-6 mt-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {project.githubLink && (
                  <div className="flex gap-4">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pepe-green hover:underline"
                    >
                      View on GitHub →
                    </a>
                    {project.websiteLink && (
                      <a 
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pepe-green hover:underline"
                      >
                        View Website →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}