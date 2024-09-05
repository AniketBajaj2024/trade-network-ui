// src/components/CargoForm.js
import axios from 'axios';
import React, { useState } from 'react';

const CargoForm = () => {
  const [cargo, setCargo] = useState({
    shipmentId: '',
    origin: '',
    destination: '',
    cargoDetails: '',
    status: 'in transit', // default status
    expectedDelivery: '',
  });

  const handleChange = (e) => {
    setCargo({ ...cargo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tradenetwork-3.onrender.com/api/cargo', cargo);
      alert('Cargo created successfully');
      console.log(response.data);
    } catch (error) {
      console.error('Error creating cargo:', error);
      alert('Failed to create cargo');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="shipmentId" placeholder="Shipment ID" value={cargo.shipmentId} onChange={handleChange} required />
      <input type="text" name="origin" placeholder="Origin" value={cargo.origin} onChange={handleChange} required />
      <input type="text" name="destination" placeholder="Destination" value={cargo.destination} onChange={handleChange} required />
      <input type="text" name="cargoDetails" placeholder="Cargo Details" value={cargo.cargoDetails} onChange={handleChange} required />
      <input type="date" name="expectedDelivery" placeholder="Expected Delivery" value={cargo.expectedDelivery} onChange={handleChange} required />
      <button type="submit">Create Cargo</button>
    </form>
  );
};

export default CargoForm;
