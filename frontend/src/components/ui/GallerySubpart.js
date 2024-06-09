"use client";
import Image from "next/image";
import { useState } from "react";
const GallerySubPart = ({imageLists, heading}) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <div className="w-full h-fit">
      <div className="relative md:h-[60vh] max-md:h-[40vh] w-full p-4">
        <div className="relative w-full h-full   shadow-2xl rounded-lg bg-gray-800 backdrop-blur-lg ">
          <h2 className="absolute top-0 right-0 mt-4 mr-4 text-gray-200 text-md uppercase underline underline-offset-2">
            {heading}
          </h2>
          <Image
            src={imageLists[currentIndex]}
            fill={true}
            alt="Image not found"
            objectFit="contain"
          />

          <div className="absolute left-0 bottom-0  lg:h-24 md:h-20 max-md:h-16 w-full  rounded-lg px-2 pb-2 flex flex-row gap-4 scroll">
            {imageLists.map((ele, index) => {
              if (index == currentIndex) return <></>;
              return (
                <div
                  className="relative w-full lg:max-w-32 md:max-w-24 max-md:max-w-20 h-full shadow-2xl rounded-lg  bg-white opacity-100"
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={ele}
                    fill={true}
                    alt="Image not found"
                    objectFit="stretch"
                    className="rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySubPart;
