const { default: GallerySubPart } = require("@/components/ui/GallerySubpart");

const Gallery = () => {
  return (
    <div className="h-auto w-screen">
      <GallerySubPart
        imageLists={["/img3.jpeg", "/img2.jpg", "/img1.jpeg"]}
        heading="Birthday"
      />
      <GallerySubPart
        imageLists={["/img4.jpg", "/img5.jpg"]}
        heading="Teacher's day"
      />
      
    </div>
  );
};

export default Gallery;
