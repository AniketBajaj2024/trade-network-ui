// src/pages/Inventory.js
import React, { useEffect, useState } from 'react';

const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    // Connect to WebSocket
    const websocket = new WebSocket('wss://tradenetwork-3.onrender.com');

    websocket.onopen = ()=>{
      console.log('Websocket connection established');
    }

    websocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.event === 'inventoryUpdated') {
        setInventoryItems((prevItems) => [...prevItems, message.data]);
      } else if (message.event === 'inventoryDeleted') {
        setInventoryItems((prevItems) => prevItems.filter(item => item._id !== message.id));
      }
    };

    websocket.onclose = () => console.log('WebSocket connection closed.');
    websocket.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };


    return () => {
      websocket.close();
    };
  }, []);

  return (
    <div>
      <h2>Inventory Management</h2>
      <ul>
        {inventoryItems.map((item) => (
          <li key={item._id}>{item.item}: {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
