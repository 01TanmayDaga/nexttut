import React, { useState, useEffect } from 'react';

const ImageLoader = ({ imageUrl,classes }) => {
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(() => {
    // Check if the image has already been loaded
    if (!loadedImage) {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        setLoadedImage(imageUrl);
      };
    }
  }, [loadedImage, imageUrl]);

  return (
    <div>
      {loadedImage ? (
        <img src={loadedImage} alt="Loaded content" classes  = {classes} />
      ) : (
      <></>
      )}
    </div>
  );
};

export default ImageLoader;
