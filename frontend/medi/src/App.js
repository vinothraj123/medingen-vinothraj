// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import FAQSection from "./components/FAQSection";
import CompareSection from "./components/CompareSection";
import ReviewSection from "./components/ReviewSection";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token") || "dummy-token";
    axios
      .get("http://localhost:5000/api/products", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="container">
      <Header />
      <InfoSection />
      <CompareSection products={products} />
      <FAQSection />
      <ReviewSection />
      <Footer />
    </div>
  );
}

export default App;
