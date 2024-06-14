"use client";
import ImageLoader from "@/components/ui/ImageLoader";
import Modal from "@/components/ui/modal";
import React, { useState } from "react";
const { default: GallerySubPart } = require("@/components/ui/GallerySubpart");

const Gallery = () => {
  const images = [];
  const imageCount = 32; // Number of images
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    document.body.classList.add("overflow-hidden");
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    document.body.classList.remove("overflow-hidden");
    setModalVisible(false);
  };

  // Use a for loop to populate the images array
  for (let i = 1; i <= imageCount; i++) {
    images.push(`/images/img${i}.jpeg`);
  }
  const [currentImageNumber, setCurrentImageNumber] = useState(1);



  return (
    <div className="h-auto w-screen  px-8 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 3xl:columns-6 5xl:columns-7 6xl:columns-8 overflow-hidden">
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        currentImageNumber={currentImageNumber}
        setCurrentImageNumber = {setCurrentImageNumber}
        images = {images}
      >
      </Modal>
      {images.map((imageName, index) => (
        <div
          key={index}
          onClick={() => {
            setCurrentImageNumber(index);
            handleOpenModal();
          }}
        >
          <img
            src={`${images[index]}`}
            className="rounded-md my-5 hover:scale-105 cursor-pointer duration-500 transition-all"
            alt={imageName}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
