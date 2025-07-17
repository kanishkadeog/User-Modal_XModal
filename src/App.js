import React, { useState } from 'react';
import './App.css';
import XModal from './XModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="app-container">
      <h1 className="title">User Details Modal</h1>
      <button className="open-form-btn" onClick={openModal}>
        Open Form
      </button>

      {showModal && <XModal closeModal={closeModal} />}
    </div>
  );
}

export default App;
