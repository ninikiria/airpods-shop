import React from "react";
import logo from "../Components/img/Apple_logo_white.svg.png";
import { AiOutlineShopping } from "@react-icons/all-files/ai/AiOutlineShopping";
import ShopList from "../Components/ShopList";
const Header = () => {
  return (
    <>
      <nav className="header_product">
        <ul className="list_product">
          <img className="logo" src={logo} alt="logo" />
          {ShopList.map((productItem) => (
            <li className="list">{productItem.productname}</li>
          ))}
          <div className="icon">
            <AiOutlineShopping />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Header;
