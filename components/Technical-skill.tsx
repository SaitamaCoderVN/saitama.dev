import React from 'react';

export default function TechnicalSkill() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Technical Skills</h2>
      
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400">
          <strong>Programming Languages</strong>: JavaScript, TypeScript, Rust, Solidity
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="group p-4 border-2 border-transparent hover:border-pepe-green rounded-lg transition-all duration-300 cursor-pointer backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-pepe-green/20">
            <div className="relative overflow-hidden">
              <h3 className="font-bold mb-2 group-hover:text-pepe-green">Frontend</h3>
              <span className="absolute -right-2 -bottom-2 text-4xl opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                🎨
              </span>
              <ul className="list-disc list-inside">
                <li className="group-hover:translate-x-2 transition-transform duration-300">React</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-75">Next.js</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-100">TypeScript</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-150">Tailwind CSS</li>
              </ul>
            </div>
          </div>

          <div className="group p-4 border-2 border-transparent hover:border-pepe-green rounded-lg transition-all duration-300 cursor-pointer backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-pepe-green/20">
            <div className="relative overflow-hidden">
              <h3 className="font-bold mb-2 group-hover:text-pepe-green">Blockchain</h3>
              <span className="absolute -right-2 -bottom-2 text-4xl opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                ⛓️
              </span>
              <ul className="list-disc list-inside">
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-75">Web3.js</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-100">Ethers.js</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-150">Hardhat</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-150">Foundry</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-150">Anchor</li>
              </ul>
            </div>
          </div>

          <div className="group p-4 border-2 border-transparent hover:border-pepe-green rounded-lg transition-all duration-300 cursor-pointer backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-pepe-green/20">
            <div className="relative overflow-hidden">
              <h3 className="font-bold mb-2 group-hover:text-pepe-green">Other</h3>
              <span className="absolute -right-2 -bottom-2 text-4xl opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                🛠️
              </span>
              <ul className="list-disc list-inside">
                <li className="group-hover:translate-x-2 transition-transform duration-300">Git</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-75">Docker</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-100">Vercel</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-150">Google Cloud</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-gray-600 dark:text-gray-400"><strong>Database</strong>: PostgreSQL, MySQL, MongoDB</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Tools</strong>: Swagger, Figma, Jira, Notion</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Foreign Languages</strong>: English - VSTEP B1</p>
          
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-400"><strong>Other</strong>:</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Good understanding of system architecture and OOP methodology, SOLID principles, design patterns</li>
              <li>Good teamwork and project management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}