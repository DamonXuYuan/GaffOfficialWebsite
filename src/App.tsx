import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CompanyProfile from "./pages/CompanyProfile";
import ShopProfile from "./pages/ShopProfile";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companyProfile" element={<CompanyProfile />} />
          <Route path="/shopProfile" element={<ShopProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
