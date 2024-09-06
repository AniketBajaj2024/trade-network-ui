// src/components/CargoForm.js
import axios from "axios";
import React, { useState } from "react";

const CargoForm = () => {
  const [cargo, setCargo] = useState({
    shipmentId: "",
    origin: "",
    destination: "",
    cargoDetails: "",
    status: "in transit", // default status
    expectedDelivery: "",
  });

  const handleChange = (e) => {
    setCargo({ ...cargo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://tradenetwork-3.onrender.com/api/cargo",
        cargo
      );
      alert("Cargo created successfully");
      console.log(response.data);
      setCargo({
        shipmentId: "",
        origin: "",
        destination: "",
        cargoDetails: "",
        status: "in transit", // Reset to default status
        expectedDelivery: "",
      });
    } catch (error) {
      console.error("Error creating cargo:", error);
      alert("Failed to create cargo");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="shipmentId" className="form-label">
          Shipment ID
        </label>
        <input
          type="text"
          className="form-control"
          id="shipmentId"
          name="shipmentId"
          placeholder="Shipment ID"
          value={cargo.shipmentId}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="origin" className="form-label">
          Origin
        </label>
        <input
          type="text"
          className="form-control"
          id="origin"
          name="origin"
          placeholder="Origin"
          value={cargo.origin}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="destination" className="form-label">
          Destination
        </label>
        <input
          type="text"
          className="form-control"
          id="destination"
          name="destination"
          placeholder="Destination"
          value={cargo.destination}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="cargoDetails" className="form-label">
          Cargo Details
        </label>
        <input
          type="text"
          className="form-control"
          id="cargoDetails"
          name="cargoDetails"
          placeholder="Cargo Details"
          value={cargo.cargoDetails}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="expectedDelivery" className="form-label">
          Expected Delivery
        </label>
        <input
          type="date"
          className="form-control"
          id="expectedDelivery"
          name="expectedDelivery"
          placeholder="Expected Delivery"
          value={cargo.expectedDelivery}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create Cargo
      </button>
    </form>
  );
};

export default CargoForm;
