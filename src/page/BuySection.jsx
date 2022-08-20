import React from "react";
import whiteAirpods from "../Components/img/white_airpods_overview.png";
import ProductList from "../Components/ProductList";
const BuySection = () => {

  return (
    <div className="airpods_cards_conatiner">
      {ProductList.map((buyProductItem) => (
        <>
          <div className="buy_container">
            <img
              className="white_airpods"
              src={whiteAirpods}
              alt="white airpods"
            />
            <h4 className="buy_name">{buyProductItem.name}</h4>
            <p className="buy_description">{buyProductItem.description}</p>
            <p className="buy_price">{buyProductItem.price}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default BuySection;
