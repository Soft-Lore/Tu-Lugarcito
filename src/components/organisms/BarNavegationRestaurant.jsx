import React from "react";
import { GiCupcake } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";

export default function BarNavegationRestaurant({ tabs, toggleTab }) {
  return (
    <div className="tabs-container">
      <div
        onClick={() => toggleTab(0)}
        className={
          tabs === 0 ? "tab-menu icon tab-menu__active" : "tab-menu icon"
        }
      >
        <IoFastFoodOutline />
        <span className="tab-title">Comidas</span>
      </div>
      <div
        onClick={() => toggleTab(1)}
        className={
          tabs === 1 ? "tab-menu icon tab-menu__active" : "tab-menu icon"
        }
      >
        <BiDrink />
        <span className="tab-title">Bebidas</span>
      </div>
      <div
        onClick={() => toggleTab(2)}
        className={
          tabs === 2 ? "tab-menu icon tab-menu__active" : "tab-menu icon"
        }
      >
        <GiCupcake />
        <span className="tab-title">Postres</span>
      </div>
    </div>
  );
}
