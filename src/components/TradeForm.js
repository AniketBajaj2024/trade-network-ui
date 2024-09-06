// import axios from 'axios';
// import React, { useState } from 'react';

// const TradeForm = () => {
//   const [trade, setTrade] = useState({
//     transactionId: '',
//     buyer: '',
//     seller: '',
//     goods: '',
//     amount: '',
//     status: 'pending',
//   });

//   const handleChange = (e) => {
//     setTrade({ ...trade, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://tradenetwork-3.onrender.com/api/trades', trade);
//       alert('Trade created successfully');
//       console.log(response.data);
//       setTrade({
//         transactionId: '',
//         buyer: '',
//         seller: '',
//         goods: '',
//         amount: '',
//         status: 'pending', // Reset to default status
//       });
//     } catch (error) {
//       console.error('Error creating trade:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="transactionId" placeholder="Transaction ID" onChange={handleChange} required />
//       <input type="text" name="buyer" placeholder="Buyer" onChange={handleChange} required />
//       <input type="text" name="seller" placeholder="Seller" onChange={handleChange} required />
//       <input type="text" name="goods" placeholder="Goods" onChange={handleChange} required />
//       <input type="number" name="amount" placeholder="Amount" onChange={handleChange} required />
//       <button type="submit">Create Trade</button>
//     </form>
//   );
// };

// export default TradeForm;

// with css
import axios from "axios";
import React, { useState } from "react";

const TradeForm = () => {
  const [trade, setTrade] = useState({
    transactionId: "",
    buyer: "",
    seller: "",
    goods: "",
    amount: "",
    status: "pending",
  });

  const handleChange = (e) => {
    setTrade({ ...trade, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://tradenetwork-3.onrender.com/api/trades",
        trade
      );
      alert("Trade created successfully");
      console.log(response.data);
      setTrade({
        transactionId: "",
        buyer: "",
        seller: "",
        goods: "",
        amount: "",
        status: "pending", // Reset to default status
      });
    } catch (error) {
      console.error("Error creating trade:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="transactionId" className="form-label">
          Transaction ID
        </label>
        <input
          type="text"
          className="form-control"
          id="transactionId"
          name="transactionId"
          placeholder="Transaction ID"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="buyer" className="form-label">
          Buyer
        </label>
        <input
          type="text"
          className="form-control"
          id="buyer"
          name="buyer"
          placeholder="Buyer"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="seller" className="form-label">
          Seller
        </label>
        <input
          type="text"
          className="form-control"
          id="seller"
          name="seller"
          placeholder="Seller"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="goods" className="form-label">
          Goods
        </label>
        <input
          type="text"
          className="form-control"
          id="goods"
          name="goods"
          placeholder="Goods"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          className="form-control"
          id="amount"
          name="amount"
          placeholder="Amount"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create Trade
      </button>
    </form>
  );
};

export default TradeForm;
