import React from "react";
import Layout from "../components/Layout";
import TradeForm from "../components/TradeForm";

const Trade = () => {
  return (
    <Layout>
      <h2>Trade Management</h2>
      {/* UI for managing trades will go here */}
      <TradeForm />
    </Layout>
  );
};

export default Trade;
