'use client'

import React, { useState } from 'react';

interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  prize?: string;
  certificate?: string;
  skills?: string[];
}

const achievements: Achievement[] = [
  {
    title: "Top 8 Oraichain Hackathon 2022 National",
    organization: "Oraichain Company & CYTAST",
    date: "06/2022",
    description: "Developed DEPIN solution for healthcare data storage",
    prize: "None",
    certificate: "https://vietnamnet.vn/cuoc-thi-oraichain-hackathon-2022-da-tim-ra-nguoi-chien-thang-2029729.html",
    skills: ["Rust", "React"]
  },
  {
    title: "Top 10 GDSC Hackathon Vietnam 2023",
    organization: "Google Developer Student Clubs",
    date: "08/2023",
    description: "Built smart learning application with AI and personalized learning paths",
    prize: "None",
    certificate: "https://www.youtube.com/watch?v=XFoq0k27yrk",
    skills: ["Flutter", "Bootstrap", "Firebase", "OpenAI"]
  },
  {
    title: "Top 1 Unexpected Code Collision Hackathon 2024",
    organization: "Aptos Foundation",
    date: "09/2024",
    description: "Super app enabling users to interact with Aptos blockchain through X",
    prize: "35,000 USDT",
    certificate: "https://x.com/Aptos/status/1857423486656110976/photo/1",
    skills: ["Nextjs", "Typescript", "Move", "React"]
  },
  {
    title: "Top 2 Social Movement Global Hackathon 2024",
    organization: "Movement Foundation",
    date: "10/2024",
    description: "Super app enabling users to interact with Movement blockchain through X",
    prize: "Grant 45,000 USDT",
    certificate: "",
    skills: ["Nextjs", "Typescript", "Move", "React"]
  },
  {
    title: "Solana Fllewship Consummer 2024",
    organization: "Solana Foundation",
    date: "06/2024 - 09/2024",
    description: "Completed summer training program for 30 talented developers from around the world",
    prize: "2 000 USDT",
    certificate: "https://x.com/SaitamaCoder_VN/status/1847940239475745089",
    skills: ["Nextjs", "Typescript", "Rust", "React", "Anchor"]
  },
  {
    title: "Polkadot Hackathon 2024",
    organization: "Openguild",
    date: "10/2024",
    description: "Track NFT : Dragon Soul Bound NFT Project, Track UX/UI : Dragon Soul Bound NFT Project",
    prize: "1250 USDT",
    certificate: "",
    skills: ["Nextjs", "Typescript", "Solidity", "Unique SDK"]
  },
  {
    title: "Grant Dragon Soul Bound NFT Project",
    organization: "Unique Network",
    date: "08/2024",
    description: "Grant Dragon Soul Bound NFT Project",
    prize: "4000 USDT",
    certificate: "",
    skills: ["Nextjs", "Typescript", "Solidity", "Unique SDK"]
  },
  {
    title: "Polkadot Hackathon 2025",
    organization: "Openguild",
    date: "01/2025",
    description: "Track NFT : Marketplace NFT Bridge",
    prize: "1000 USDT",
    certificate: "",
    skills: ["Nextjs", "Typescript", "Solidity", "Unique SDK"]
  }
];

export default function Achievements() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative">
      <h2 className="text-2xl font-bold mb-4">Achievements & Awards</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="bg-gradient-to-r from-transparent to-pepe-green/5 rounded-xl p-4 border-2 border-pepe-green transition-all duration-300"
          >
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg text-pepe-green">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.date}
                </p>
              </div>
              
              <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                {achievement.organization}
              </p>
              
              <button
                onClick={() => toggleExpand(index)}
                className="text-pepe-green hover:underline text-sm mb-2"
              >
                {expandedIndex === index ? 'Show less ↑' : 'Show more ↓'}
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                expandedIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="mb-4">{achievement.description}</p>
                
                {achievement.prize && (
                  <div className="mb-3">
                    <span className="inline-block bg-pepe-green/10 text-pepe-green px-3 py-1 rounded-full text-sm">
                      🏆 Prize: {achievement.prize}
                    </span>
                  </div>
                )}
                
                {achievement.skills && (
                  <div className="mb-4">
                    <p className="font-semibold mb-2 text-sm">Skills used:</p>
                    <div className="flex flex-wrap gap-2">
                      {achievement.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="bg-pepe-green/20 px-2 py-0.5 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {achievement.certificate && (
                  <a 
                    href={achievement.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-pepe-green hover:underline text-sm"
                  >
                    View certificate →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 