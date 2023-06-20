import React from "react";
import CarsPage from "./pages/CarsPage";


function ExclusiveOffersCard(props) {
  const handleClick = () => {
    // Add your button click functionality here
    alert("i got clicked");
  };

  return (
    <div className="col-sm-6">
      <div className="card exclusive-offer-card" onClick={handleClick}>
        <div className="card-overlay">
          <h2 className="card-title">{props.name}</h2>
          <p className="card-text">Ksh{props.price}</p>
        </div>
        <img
          src={props.imageLink}
          className="card-img-top"
          alt="exclusive offer image"
        />
      </div>
    </div>
  );
}

export default ExclusiveOffersCard;
