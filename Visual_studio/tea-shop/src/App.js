cd import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";


const App = () => {
  const [cartTotal, setCartTotal] = useState(0);
  return (
    <div>
     <Navbar cartTotal={cartTotal} />
      <Home />
     <Menu cartTotal={cartTotal} setCartTotal={setCartTotal} />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default App