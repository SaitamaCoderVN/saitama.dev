import React from 'react';

const PastimeAndActivities: React.FC = () => {
  return (
    <section className="relative">
      <h2 className="text-2xl font-bold mb-6">Hobbies & Activities</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Leadership Roles */}
        <div 
          className="group relative flex gap-4 rounded-xl p-6 backdrop-blur-sm border-2 border-pepe-green hover:shadow-lg transition-all duration-300"
        >
          {/* Thanh bên trái khi hover */}
          <div className="absolute left-0 top-0 h-full w-1 bg-pepe-green transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-pepe-green transition-colors">Leadership Roles</h3>
            <ul className="space-y-4">
              <li className="transform transition-transform duration-300 group-hover:translate-x-2">
                <div className="font-medium text-pepe-green">Head of Developer at GDSC HCM-UTH</div>
                <p className="text-gray-600 dark:text-gray-400">- Leading and developing student developer community</p>
                <p className="text-gray-600 dark:text-gray-400">- Organizing knowledge sharing events and workshops</p>
                <p className="text-gray-600 dark:text-gray-400">- Building networks between students and businesses</p>
              </li>
              <li className="transform transition-transform duration-300 group-hover:translate-x-2 delay-100">
                <div className="font-medium text-pepe-green">Founder of Academy Land</div>
                <p className="text-gray-600 dark:text-gray-400">- Building a community of passionate student learners</p>
                <p className="text-gray-600 dark:text-gray-400">- Organizing study and work experience sharing sessions</p>
                <p className="text-gray-600 dark:text-gray-400">- Connecting and supporting students in skill development</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div 
          className="group relative flex gap-4 rounded-xl p-6 backdrop-blur-sm border-2 border-pepe-green hover:shadow-lg transition-all duration-300"
        >
          {/* Thanh bên trái khi hover */}
          <div className="absolute left-0 top-0 h-full w-1 bg-pepe-green transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-pepe-green transition-colors">Extracurricular Activities</h3>
            <ul className="space-y-4">
              <li className="transform transition-transform duration-300 group-hover:translate-x-2">
                <div className="font-medium text-pepe-green">Student Union Member</div>
                <p className="text-gray-600 dark:text-gray-400">- Joined since freshman year</p>
                <p className="text-gray-600 dark:text-gray-400">- Organizing donation activities for the underprivileged</p>
                <p className="text-gray-600 dark:text-gray-400">- Participating in charity house building projects</p>
              </li>
              <li className="transform transition-transform duration-300 group-hover:translate-x-2 delay-100">
                <div className="font-medium text-pepe-green">Volunteer Campaigns</div>
                <p className="text-gray-600 dark:text-gray-400">- Participating in Green Summer and Spring Volunteer programs</p>
                <p className="text-gray-600 dark:text-gray-400">- Painting murals for social awareness campaigns</p>
                <p className="text-gray-600 dark:text-gray-400">- Street decoration and organizing community activities</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Hobbies */}
        <div 
          className="group relative flex gap-4 rounded-xl p-6 backdrop-blur-sm border-2 border-pepe-green hover:shadow-lg transition-all duration-300 md:col-span-2"
        >
          {/* Thanh bên trái khi hover */}
          <div className="absolute left-0 top-0 h-full w-1 bg-pepe-green transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-pepe-green transition-colors">Hobbies</h3>
            <ul className="space-y-2">
              <li className="transform transition-transform duration-300 group-hover:translate-x-2">
                • Reading books about technology and personal development
              </li>
              <li className="transform transition-transform duration-300 group-hover:translate-x-2 delay-75">
                • Taking online courses to improve skills
              </li>
              <li className="transform transition-transform duration-300 group-hover:translate-x-2 delay-100">
                • Writing blog posts sharing technology knowledge
              </li>
              <li className="transform transition-transform duration-300 group-hover:translate-x-2 delay-150">
                • Participating in tech events and hackathons
              </li>
              <li className="transform transition-transform duration-300 group-hover:translate-x-2 delay-200">
                • Participating in chess tournaments and ranking competitions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastimeAndActivities;
