import React, { useState } from "react";
import "./Gallery.css";
import img1 from "../../assets/sli1.jpg";
import img2 from "../../assets/sli2.jpg";

// Sample image data
const imageData = [
  { id: 1, src: img1, title: "Image 1" },
  { id: 2, src: img2, title: "Image 2" },
  { id: 3, src: img1, title: "Image 3" },
  // Add more image data as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="ga-container">
      <h1 className="heading">Gallery</h1>
      <div className="gallery">
        {imageData.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.title}
            className="gallery-image"
            onClick={() => handleClick(image)}
          />
        ))}
        {selectedImage && (
          <div className="overlay" onClick={handleClose}>
            <div className="modal">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="modal-image"
              />
              <p>{selectedImage.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
