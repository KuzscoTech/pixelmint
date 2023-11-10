// GalleryItem.js
import React from 'react';
// import './GalleryItem.css'; // make sure to create a corresponding CSS file

const GalleryItem = ({ id, title, imageSrc }) => (
  <div className="gallery-item">
    <img src={imageSrc} alt={title} />
    <div className="title">{title}</div>
    {/* Add more overlay items like buttons or icons as needed */}
  </div>
);

export default GalleryItem;