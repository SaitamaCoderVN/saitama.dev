import FlipAvatar from "@/components/FlipAvatar";

export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="text-center mb-12 animate-pepe-dance">
        <FlipAvatar />
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pepe-green to-pepe-yellow bg-clip-text text-transparent animate-wiggle">
          🐸 SaitamaCoder 🐸
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 animate-pulse">
          ⚡ Overstack Blockchain ⚡
        </p>
      </header>

      <main className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Hello! I'm <span className="font-medium">SaitamaCoder</span>, a passionate blockchain developer from Ho Chi Minh City, Vietnam. I have a strong enthusiasm for Web3 technology and enjoy working on creative projects that combine technical expertise with innovation.
            </p>

            <p>
              I have experience building decentralized applications, particularly in NFT, DeFi, and SocialFi domains. I regularly participate in hackathons and bounties to enhance my skills. Currently, I serve as a Development Ambassador for Klaytn in Vietnam, and I recently received the Solana Summer Fellowship 2024.
            </p>

            <p>
              Alongside my technical work, I'm committed to contributing to the blockchain community through open-source projects like DragonSoulBoundNFT, aimed at enhancing user identity and interaction in the Web3 ecosystem.
            </p>

            <p>
              In my free time, I enjoy reading books and listening to music to recharge and maintain creativity. I'm always excited to collaborate on new ideas and connect with like-minded individuals who share my vision for the future of blockchain technology.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
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
                  <li className="group-hover:translate-x-2 transition-transform duration-300">Solidity</li>
                  <li className="group-hover:translate-x-2 transition-transform duration-300 delay-75">Web3.js</li>
                  <li className="group-hover:translate-x-2 transition-transform duration-300 delay-100">Ethers.js</li>
                  <li className="group-hover:translate-x-2 transition-transform duration-300 delay-150">Hardhat</li>
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
                  <li className="group-hover:translate-x-2 transition-transform duration-300 delay-100">CI/CD</li>
                  <li className="group-hover:translate-x-2 transition-transform duration-300 delay-150">Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-6">

          <div>
              <h3 className="font-bold">Web Security Developer Intern | Sgod Company</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">3 months</p>
              <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              </ul>
            </div>

            <div>
              <h3 className="font-bold">Blockchain Developer Intern | VBI </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">3 months</p>
              <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Contributed to the development of decentralized applications and gained practical experience in integrating blockchain technology into real-world use cases.</li>
                <li>Assisted in designing smart contracts for NFT creation, upgrading, and management.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold">Blockchain Developer | BSCS - Meta fintech company</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">3 months</p>
              <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              </ul>
            </div>

            <div>
              <h3 className="font-bold">Dev Ambassador | Klaytn Vietnam</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Present</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Representing the Klaytn blockchain ecosystem in Vietnam, engaging with the community and promoting blockchain adoption through educational and technical initiatives.</p>
            </div>

            <div>
              <h3 className="font-bold">Open-Source Contributor | DragonSoulBoundNFT Project</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Developed a platform enabling communities to certify user contributions through Soul Bound NFTs, incorporating unique NFT features such as dynamic upgrades and modifications.</p>
            </div>

            <div>
              <h3 className="font-bold">Hackathon Participant</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Participated in various blockchain hackathons, including week-long hackathons organized by Aptos Blockchain and Movement Blockchain, introducing innovative ideas such as ActionX and Social Movement.</p>
            </div>

            <div>
              <h3 className="font-bold">Project Lead | AceXeus Platform</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Designed and implemented a platform allowing users to interact with DeFi and SocialFi elements, adding cross-chain capabilities with Solana and the Kaia network.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div>
            <h3 className="font-bold">Ho Chi Minh City University of Transport</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">2020 - 2024</p>
            <p>Information Technology</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="flex space-x-6 justify-center">
            <a href="mailto:coderhopham@gmail.com" 
               className="px-4 py-2 bg-primary text-white rounded-full hover:scale-110 transition-transform duration-300">
              ✉️ Email
            </a>
            <a href="https://github.com/SaitamaCoderVN" 
               className="px-4 py-2 bg-secondary text-white rounded-full hover:scale-110 transition-transform duration-300">
              🐱 GitHub
            </a>
            <a href="https://linkedin.com/in/anhitshare" 
               className="px-4 py-2 bg-accent text-gray-800 rounded-full hover:scale-110 transition-transform duration-300">
              💼 LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
