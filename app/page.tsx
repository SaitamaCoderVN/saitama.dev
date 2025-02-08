import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
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

        <Contact />
      </main>
    </div>
  );
}
