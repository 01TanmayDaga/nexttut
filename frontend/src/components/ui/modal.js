// ./src/components/Modal.js
"use client";
import React, { useState } from "react";

const Modal = ({ isVisible, onClose, images, currentImageNumber, setCurrentImageNumber }) => {
  

  
  
  

  const onNext = () => {
    if (currentImageNumber == images.length-1) {
      setCurrentImageNumber(0);
     
    } else setCurrentImageNumber(currentImageNumber + 1);

    console.log("next Called");
  };

  const onPrev = () => {
    if (currentImageNumber == 0) {
      setCurrentImageNumber(images.length - 1);
    } else setCurrentImageNumber(currentImageNumber - 1);
  };
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center flex-col justify-center   z-50 bg-black bg-opacity-70 "
      onClick={onClose}
    >
      <div className="  max-w-screen-7xl  h-2/3 relative flex items-center justify-center flex-row">
        <i
          class="fa-solid fa-chevron-left text-2xl text-white cursor-pointer mx-2"
          onClick={(e) => {e.stopPropagation() ;onPrev()}}
        ></i>
        <img
          src={images[currentImageNumber]}
          alt="Image Not found"
          className="h-full aspect-auto rounded-xl border-2 border-blue-400 shadow-gray-100 "
        />
        <div className="absolute top-2 right-10 cursor-pointer">
          <i class="fa-solid fa-xmark text-3xl text-white text-end block shadow-2xl shadow-gray-900"></i>
        </div>

        <i
        class="fa-solid fa-chevron-right text-2xl text-white cursor-pointer mx-2"
        onClick={ 
          (e)=> {e.stopPropagation();onNext()}}
      ></i>
      </div>
 
    </div>
  );
};

export default Modal;
