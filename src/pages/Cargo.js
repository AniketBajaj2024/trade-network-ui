import React from "react";
import CargoForm from "../components/CaegoForm";
import Layout from "../components/Layout";

const Cargo = () => {
  return (
      <Layout>
        <h2>Cargo Management</h2>
        {/* UI for managing cargo will go here */}
        <CargoForm />
      </Layout>
  );
};

export default Cargo;
