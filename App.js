import React from 'react';
import Header from './components/Header';
import GalleryItem from './components/GalleryItem';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const items = [
    {
      title: 'Item 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Item 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="gallery">
        {items.map((item) => (
          <GalleryItem key={item.title} title={item.title} imageUrl={item.imageUrl} />
        ))}
      </div>
      <Modal isOpen={false} onClose={() => console.log('Close modal')}>
        {/* Modal content */}
      </Modal>
    </div>
  );
};

export default App;