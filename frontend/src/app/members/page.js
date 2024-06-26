'use client'

import React, { useEffect, useState, useRef } from 'react';

 // Adjust the import according to your file structure
function getAlternateVibrantColorClass() {
  const vibrantColorClasses = [
    "bg-orange-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-pink-200",
    "bg-cyan-200"
  ];

  let index = 0;

  return function () {
    const colorClass = vibrantColorClasses[index];
    index = (index + 2) % vibrantColorClasses.length; // Incrementing by 2 to get alternate colors
    return colorClass;
  };
}
const Members = () => {
  
  const [itemsPerRow, setItemsPerRow] = useState(1); // Default to 1 to avoid division by zero
  const members = [
    { id: 2, name: 'John Doe', type: 'Graduate', role: 'Researcher', description: 'Frontend developer with 5 years of experience, specializing in creating interactive and dynamic user interfaces.', image: '/images/john.jpg', linkedin: 'https://www.linkedin.com/in/johndoe' },
    { id: 1, name: 'John Doe', type: 'Graduate', role: 'Researcher', description: 'Frontend developer with 5 years of experience, specializing in creating interactive and dynamic user interfaces.', image: '/images/john.jpg', linkedin: 'https://www.linkedin.com/in/johndoe' },
    { id: 2, name: 'Jane Smith', type: 'Graduate', role: 'UX Designer', description: 'Creative designer focusing on UX/UI, with a passion for crafting intuitive and visually appealing user experiences.', image: '/images/jane.jpg', linkedin: 'https://www.linkedin.com/in/janesmith' },
    { id: 3, name: 'Sam Johnson', type: 'Graduate', role: 'Project Manager', description: 'Experienced in managing cross-functional teams, ensuring projects are completed on time and within budget.', image: '/images/sam.jpg', linkedin: 'https://www.linkedin.com/in/samjohnson' },
    { id: 4, name: 'Alice Brown', type: 'Graduate', role: 'Backend Developer', description: 'Backend developer with expertise in databases and server-side logic, ensuring smooth and efficient application performance.', image: '/images/alice.jpg', linkedin: 'https://www.linkedin.com/in/alicebrown' },
    { id: 5, name: 'Bob Davis', type: 'Graduate', role: 'Full Stack Developer', description: 'Full stack developer specializing in the MERN stack, with a focus on building scalable and maintainable applications.', image: '/images/bob.jpg', linkedin: 'https://www.linkedin.com/in/bobdavis' },
    { id: 6, name: 'Eve Wilson', type: 'Graduate', role: 'UI/UX Designer', description: 'UI/UX designer with a passion for user-centered design, creating engaging and accessible interfaces.', image: '/images/eve.jpg', linkedin: 'https://www.linkedin.com/in/evewilson' },
    { id: 7, name: 'Chris Green', type: 'Graduate', role: 'Data Scientist', description: 'Data scientist with expertise in machine learning, leveraging data to drive business insights and decisions.', image: '/images/chris.jpg', linkedin: 'https://www.linkedin.com/in/chrisgreen' },
    { id: 8, name: 'Nancy White', type: 'Graduate', role: 'Mobile Developer', description: 'Software engineer with a focus on mobile development, creating user-friendly and high-performance mobile applications.', image: '/images/nancy.jpg', linkedin: 'https://www.linkedin.com/in/nancywhite' },
    { id: 9, name: 'Tom Brown', type: 'Graduate', role: 'Cloud Specialist', description: 'Cloud computing specialist with experience in designing and managing scalable and secure cloud infrastructure.', image: '/images/tom.jpg', linkedin: 'https://www.linkedin.com/in/tombrown' },
    { id: 10, name: 'Sara Black', type: 'Graduate', role: 'Cybersecurity Expert', description: 'Cybersecurity expert dedicated to protecting systems and data from cyber threats through proactive security measures.', image: '/images/sara.jpg', linkedin: 'https://www.linkedin.com/in/sarablack' },
    { id: 11, name: 'Mike Blue', type: 'Faculty', role: 'Professor of Computer Science', description: 'Professor with over 20 years of experience in computer science, specializing in artificial intelligence and machine learning.', image: '/images/mike.jpg', linkedin: 'https://www.linkedin.com/in/mikeblue' },
    { id: 12, name: 'Linda Grey', type: 'Faculty', role: 'Assistant Professor', description: 'Assistant professor focusing on software engineering and development methodologies, with numerous published research papers.', image: '/images/linda.jpg', linkedin: 'https://www.linkedin.com/in/lindagrey' },
    { id: 13, name: 'Emily Green', type: 'Graduate', role: 'Data Analyst', description: 'Data analyst with a strong background in statistical analysis and data visualization techniques.', image: '/images/emily.jpg', linkedin: 'https://www.linkedin.com/in/emilygreen' },
    { id: 14, name: 'Michael Brown', type: 'Graduate', role: 'AI Specialist', description: 'AI specialist focusing on developing intelligent systems and integrating machine learning algorithms.', image: '/images/michael.jpg', linkedin: 'https://www.linkedin.com/in/michaelbrown' },
    { id: 15, name: 'Laura White', type: 'Faculty', role: 'Senior Lecturer', description: 'Senior lecturer with a deep understanding of software engineering principles and practices.', image: '/images/laura.jpg', linkedin: 'https://www.linkedin.com/in/laurawhite' },
  ];
  const gridRefs = useRef({});
  useEffect(() => {
    const calculateItemsPerRow = () => {
      Object.keys(gridRefs.current).forEach((type) => {
        console.log(gridRefs.current);
        if (gridRefs.current[type]) {
          const gridWidth = gridRefs.current[type].offsetWidth;
          const itemWidth = gridRefs.current[type].children[0].offsetWidth;
          console.log(itemWidth); // The min-width of each item
          const gap = 8; // The gap between items

          const totalItemWidth = itemWidth + gap;
          const newItemsPerRow = Math.floor(gridWidth / totalItemWidth);

          setItemsPerRow(newItemsPerRow || 0); // Ensure at least 1 item per row
        }
      });
    };

    // Calculate on initial render
    calculateItemsPerRow();

    // Recalculate on window resize
    window.addEventListener('resize', calculateItemsPerRow);
    return () => window.removeEventListener('resize', calculateItemsPerRow);
  }, []);

  const groupedMembers = members.reduce((acc, member) => {
    (acc[member.type] = acc[member.type] || []).push(member);
    return acc;
  }, {});

  const getNextAlternateColorClass = getAlternateVibrantColorClass();

  return (
    <div className="container mx-auto p-4">
      {Object.keys(groupedMembers).map((type) => {
        const totalItems = groupedMembers[type].length;
        const fullRows = Math.floor(totalItems / itemsPerRow);
        const lastRowIndex = fullRows * itemsPerRow;

        const fullRowItems = groupedMembers[type].slice(0, lastRowIndex);
        const lastRowItems = groupedMembers[type].slice(lastRowIndex);

        return (
          <div key={type} className="mb-8">
            <h2 className="text-3xl font-semibold text-blue-600 text-center my-20">{type}</h2>
            <div ref={(el) => (gridRefs.current[type] = el)} className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 justify-items-center">
              {fullRowItems.map((member) => (
                <div
                  key={member.id}
                  className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:border-blue-600 border transition-transform duration-300 w-full max-w-xs h-[420px]"
                >
                  <div className={`${getNextAlternateColorClass()} h-2/6 flex items-center justify-center relative`}>
                    <a href={member.linkedin} className="hover:cursor-pointer flex justify-center items-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 hover:border-gray-500 transition-all duration-300 absolute bottom-0 transform translate-y-1/2"
                      />
                    </a>
                  </div>
                  <div className="mt-16 p-6">
                    <h3 className="text-2xl font-semibold text-blue-700 text-center">{member.name}</h3>
                    <h4 className="text-xl text-blue-600 text-center">{member.role}</h4>
                    <p className="text-gray-600 mt-4 text-center text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {lastRowItems.length > 0 && (
              <div className="flex flex-wrap gap-8 mt-8 justify-center">
                {lastRowItems.map((member) => (
                  <div
                    key={member.id}
                    className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:border-blue-600 border transition-transform duration-300 w-full max-w-xs h-[420px]"
                  >
                    <div className={`${getNextAlternateColorClass()} h-2/6 flex items-center justify-center relative`}>
                      <a href={member.linkedin} className="hover:cursor-pointer flex justify-center items-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 hover:border-gray-500 transition-all duration-300 absolute bottom-0 transform translate-y-1/2"
                        />
                      </a>
                    </div>
                    <div className="mt-16 p-6">
                      <h3 className="text-2xl font-semibold text-blue-700 text-center">{member.name}</h3>
                      <h4 className="text-xl text-blue-600 text-center">{member.role}</h4>
                      <p className="text-gray-600 mt-4 text-center text-sm">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Members;
