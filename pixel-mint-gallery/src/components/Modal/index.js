import React from 'react';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <button onClick={onClose}>Close</button>
      {children}
    </div>
  );
};

export default Modal;