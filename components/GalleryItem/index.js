import React from 'react';

const GalleryItem = ({ title, imageUrl }) => {
  return (
    <div className="gallery-item">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default GalleryItem;