import React, { useState, useEffect } from 'react';
import './XModal.css';

function XModal({ closeModal }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
  });

  useEffect(() => {
    // Close modal when clicking outside the modal
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        closeModal();
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [closeModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);
  const validateDOB = (dob) => {
    const inputDate = new Date(dob);
    const today = new Date();
    return inputDate < today;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;

   

    if (!validateEmail(email)) {
      alert('Invalid email');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Invalid phone number');
      return;
    }

    if (!validateDOB(dob)) {
      alert('Invalid date of birth');
      return;
    }

     if (!username || !email || !phone || !dob) {
      alert('All fields are mandatory');
      return;
    }

    alert('Form submitted successfully!');
    closeModal();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal modal-content">
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />

          <label htmlFor="email">Email Address:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="dob">Date of Birth:</label>
          <input
            id="dob"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
          />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default XModal;
