// Gallery.js
import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './Gallery.css'; // and this CSS for styling the grid layout

const Gallery = ({ items }) => (
  <div className="gallery">
    {items.map((item) => (
      <GalleryItem key={item.id} {...item} />
    ))}
  </div>
);

export default Gallery;

