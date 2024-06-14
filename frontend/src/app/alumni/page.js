"use client";

import React, { useEffect, useState, useRef } from "react";

function getAlternateVibrantColorClass() {
  const vibrantColorClasses = [
    "bg-orange-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-pink-200",
    "bg-cyan-200",
  ];

  let index = 0;

  return function () {
    const colorClass = vibrantColorClasses[index];
    index = (index + 2) % vibrantColorClasses.length; // Incrementing by 2 to get alternate colors
    return colorClass;
  };
}

const Alumni = () => {
  const [itemsPerRow, setItemsPerRow] = useState(1);
  const [itemWidth, setItemWidth] = useState(280); // Default to 1 to avoid division by zero
  const alumni = [
    {
      id: 1,
      name: "John Doe",
      role: "Researcher",
      description: "Frontend developer",
      image: "/images/john.jpg",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UX Designer",
      description: "Creative designer",
      image: "/images/jane.jpg",
      linkedin: "https://www.linkedin.com/in/janesmith",
    },
    {
      id: 3,
      name: "Sam Johnson",
      role: "Project Manager",
      description: "Experienced manager",
      image: "/images/sam.jpg",
      linkedin: "https://www.linkedin.com/in/samjohnson",
    },
    {
      id: 4,
      name: "Alice Brown",
      role: "Backend Developer",
      description: "Backend developer",
      image: "/images/alice.jpg",
      linkedin: "https://www.linkedin.com/in/alicebrown",
    },
    {
      id: 5,
      name: "Bob Davis",
      role: "Full Stack Developer",
      description: "Full stack developer",
      image: "/images/bob.jpg",
      linkedin: "https://www.linkedin.com/in/bobdavis",
    },
    {
      id: 6,
      name: "Eve Wilson",
      role: "UI/UX Designer",
      description: "UI/UX designer",
      image: "/images/eve.jpg",
      linkedin: "https://www.linkedin.com/in/evewilson",
    },
    {
      id: 7,
      name: "Chris Green",
      role: "Data Scientist",
      description: "Data scientist",
      image: "/images/chris.jpg",
      linkedin: "https://www.linkedin.com/in/chrisgreen",
    },
    {
      id: 8,
      name: "Nancy White",
      role: "Mobile Developer",
      description: "Mobile developer",
      image: "/images/nancy.jpg",
      linkedin: "https://www.linkedin.com/in/nancywhite",
    },
    {
      id: 9,
      name: "Tom Brown",
      role: "Cloud Specialist",
      description: "Cloud specialist",
      image: "/images/tom.jpg",
      linkedin: "https://www.linkedin.com/in/tombrown",
    },
    {
      id: 10,
      name: "Sara Black",
      role: "Cybersecurity Expert",
      description: "Cybersecurity expert",
      image: "/images/sara.jpg",
      linkedin: "https://www.linkedin.com/in/sarablack",
    },
  ];

  const gridRefs = useRef({});

  useEffect(() => {
    const calculateItemsPerRow = () => {
      const gridWidth = gridRefs.current.offsetWidth;
      console.log("gridWidth" + gridWidth);
      console.log("Width" + gridRefs.current.children[0].offsetWidth);

      setItemWidth(gridRefs.current.children[0].offsetWidth);

      console.log("itemWidth" + itemWidth); // The min-width of each item
      const gap = 8; // The gap between items

      const totalItemWidth = itemWidth + gap;

      const newItemsPerRow = Math.floor(gridWidth / totalItemWidth);
      console.log(newItemsPerRow);
      setItemsPerRow(newItemsPerRow || 0); // Ensure at least 1 item per row
    };

    // Calculate on initial render
    calculateItemsPerRow();

    // Recalculate on window resize
    window.addEventListener("resize", calculateItemsPerRow);
    return () => window.removeEventListener("resize", calculateItemsPerRow);
  }, []);

  const getNextAlternateColorClass = getAlternateVibrantColorClass();

  const totalItems = alumni.length;
  const fullRows = Math.floor(totalItems / itemsPerRow);
  const lastRowIndex = fullRows * itemsPerRow;

  const fullRowItems = alumni.slice(0, lastRowIndex);
  console.log(fullRowItems);
  const lastRowItems = alumni.slice(lastRowIndex);

  return (
    <div className="container mx-auto p-2 ">
      <h2 className="text-3xl font-semibold text-blue-600 text-center mb-10 mt-0">
        Alumni
      </h2>
      <div
        ref={gridRefs}
        className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 justify-items-center"
      >
        {fullRowItems.map((member) => (
          <div
            key={member.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:border-blue-600 border transition-transform duration-300 w-full max-w-xs h-[300px]"
          >
            <div
              className={`${getNextAlternateColorClass()} h-2/6 flex items-center justify-center relative`}
            >
              <a
                href={member.linkedin}
                className="hover:cursor-pointer flex justify-center items-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 hover:border-gray-500 transition-all duration-300 absolute bottom-0 transform translate-y-1/2"
                />
              </a>
            </div>
            <div className="mt-16 p-6">
              <h3 className="text-2xl font-semibold text-blue-700 text-center">
                {member.name}
              </h3>
              <h4 className="text-xl text-blue-600 text-center">
                {member.role}
              </h4>
              <p className="text-gray-600 mt-4 text-center text-sm">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {lastRowItems.length > 0 && (
        <div className="flex flex-wrap gap-8 mt-8 justify-center">
          {lastRowItems.map((member) => (
            <div
              key={member.id}
              className={`relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:border-blue-600 border transition-transform duration-300 w-full h-[300px]`} style={{width:`${itemWidth}px`}}
            >
              <div
                className={`${getNextAlternateColorClass()} h-2/6 flex items-center justify-center relative`}
              >
                <a
                  href={member.linkedin}
                  className="hover:cursor-pointer flex flex-col justify-center items-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 hover:border-gray-500 transition-all duration-300 absolute bottom-0 transform translate-y-1/2"
                  />
                </a>
              </div>
              <div className="mt-16 p-6">
                <h3 className="text-2xl font-semibold text-blue-700 text-center">
                  {member.name}
                </h3>
                <h4 className="text-xl text-blue-600 text-center">
                  {member.role}
                </h4>
                <p className="text-gray-600 mt-4 text-center text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Alumni;
