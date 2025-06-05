import React, { useState } from 'react';
import img1 from '../img1.jpg';
import img2 from '../img2.jpg';
import img3 from '../img3.png';
import img4 from '../img4.jpg';
import img5 from '../img-5.jpg';
import img6 from '../img-6.jpg';

const ProductGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="max-w-xl mx-auto">
      {/* Main Image */}
      <div className="w-full  rounded-lg overflow-hidden mb-4">
        <img src={mainImage} alt="Main Product" className="w-full h-auto object-contain duration-700" />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 justify-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onMouseEnter={() => setMainImage(img)} // or onClick for mobile friendly
            className={`h-20 w-20 rounded-md object-cover border-2 cursor-pointer  transition 
              ${mainImage === img ? 'border-blue-500' : 'border-transparent'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
