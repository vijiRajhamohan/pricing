import React from "react";
import Pricing from "./Pricing";
import "./App.css";
import pricing from"./Pricing.json"

function App() {
 
  return (

    <section className="pricing py-5">
    <div className="container">
      <div className="row">
        {pricing.map(price => <Pricing {...price}/>)}
    
      </div>
    </div>
  </section>

  );
}

export default App;


   
    