import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import CarsPage from "./pages/CarsPage";


function App() {
  return (
    
      <div className="body-width">
        <Navigation />
        <CarsPage />
        {/* <HomePage /> */}
        <Footer />
      </div>
   
  );
}

export default App;
