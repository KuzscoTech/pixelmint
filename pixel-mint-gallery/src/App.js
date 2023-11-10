// App.js
import React from 'react';
import Navbar from './Navbar/Navbar';
import Gallery from './Gallery/Gallery';
import './App.css';

function App() {
  const galleryItems = [
    { id: 1, title: 'Image 1', imageSrc: 'path/to/your/image1.jpg' },
    { id: 2, title: 'Image 2', imageSrc: 'path/to/your/image2.jpg' },
    // ...more items
  ];

  return (
    <div className="App">
      <Navbar />
      <Gallery items={galleryItems} />
    </div>
  );
}

export default App;