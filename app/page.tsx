import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import FlipAvatar from "@/components/FlipAvatar";
import PastimeAndActivities from "@/components/Partime-and-activitice";
import PersonalProject from "@/components/Personal-project";
import ProfessionalExperience from "@/components/Professional-experience";
import Summary from "@/components/Summary";
import TechnicalSkill from "@/components/Technical-skill";

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
        <Summary />

        <TechnicalSkill />

        <ProfessionalExperience />

        <PersonalProject />

        <Achievements />

        <Education />

        <PastimeAndActivities />

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
