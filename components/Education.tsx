import React from 'react';

const Education = () => {
  const educationData = [
    {
      school: "Ho Chi Minh City University of Transport",
      degree: "Bachelor of Science",
      field: "Information Technology",
      duration: "2020 - 2024",
      description: "I'm a student at Ho Chi Minh City University of Transport, majoring in Information Technology. I'm a passionate developer and I'm always looking for new challenges to tackle.",
      gpa: "3.0/4.0"
    },
  ];

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="border-l-4 border-gray-300 pl-4">
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p className="text-gray-600">{edu.degree} - {edu.field}</p>
            <p className="text-gray-500">{edu.duration}</p>
            <p className="text-gray-700 mt-2">{edu.description}</p>
            <p className="text-gray-600 mt-1">GPA: {edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
