import axios from 'axios';
import React, { useState } from 'react';

const TradeForm = () => {
  const [trade, setTrade] = useState({
    transactionId: '',
    buyer: '',
    seller: '',
    goods: '',
    amount: '',
    status: 'pending',
  });

  const handleChange = (e) => {
    setTrade({ ...trade, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tradenetworklive.onrender.com/api/trades', trade);
      alert('Trade created successfully');
      console.log(response.data);
    } catch (error) {
      console.error('Error creating trade:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="transactionId" placeholder="Transaction ID" onChange={handleChange} required />
      <input type="text" name="buyer" placeholder="Buyer" onChange={handleChange} required />
      <input type="text" name="seller" placeholder="Seller" onChange={handleChange} required />
      <input type="text" name="goods" placeholder="Goods" onChange={handleChange} required />
      <input type="number" name="amount" placeholder="Amount" onChange={handleChange} required />
      <button type="submit">Create Trade</button>
    </form>
  );
};

export default TradeForm;
