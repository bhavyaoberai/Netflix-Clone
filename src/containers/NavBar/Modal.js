import React from 'react';
import ReactModal from 'react-modal';
import './Modal.css'

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <div className='Modal'>
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Welcome Modal"
    >
      {children}
      <button onClick={onRequestClose}>Close</button>
    </ReactModal>
    </div>
  );
};

export default Modal;
