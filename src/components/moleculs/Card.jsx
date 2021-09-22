import React, { useRef } from "react";
import { IoMdBed } from "react-icons/io";
import { GiShower, GiHomeGarage, GiHotMeal } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { ImPacman } from "react-icons/im";
import { useHistory } from "react-router";
import { useLazyLoading } from "../hook/index";

export default function Card({
  img,
  price,
  location,
  room,
  bathroom,
  garage,
  id,
  type,
}) {
  const history = useHistory();
  const cardRef = useRef();
  const {show} = useLazyLoading(cardRef);

  return (
    <div
      className="card"
      onClick={
        type !== "restaurant"
          ? () => history.push(`/site/${id}`)
          : () => history.push(`/restaurantSite/${id}`)
      }
      ref={cardRef}
    >
      {show ? (
        <>
          <img src={img} alt="casa" className="card-image" />
          <div className="card-footer">
            <div className="card-footer__item">
              <p className="card-footer__price">{price}</p>
              <span className="card-footer__location">{location}</span>
            </div>
            <div className="card-footer__item card-footer__icons">
              {type === "restaurant" ? (
                <>
                  <div
                    className="card-footer__room card-footer__room-restaurant"
                    title="Platillos"
                  >
                    <span className="card-footer__span card-footer__span-restaurant">
                      {room}
                    </span>
                    <GiHotMeal />
                  </div>
                  <div
                    className="card-footer__room card-footer__room-restaurant"
                    title="Bebidas"
                  >
                    <span className="card-footer__span card-footer__span-restaurant">
                      {bathroom}
                    </span>
                    <BiDrink />
                  </div>
                  <div
                    className="card-footer__room card-footer__room-restaurant"
                    title="Comida rapida"
                  >
                    <span className="card-footer__span card-footer__span-restaurant">
                      {garage}
                    </span>
                    <ImPacman />
                  </div>
                </>
              ) : (
                <>
                  <div className="card-footer__room" title="Cuarto/s">
                    <span className="card-footer__span">{room}</span>
                    <IoMdBed />
                  </div>
                  <div className="card-footer__room" title="Baño/s">
                    <span className="card-footer__span">{bathroom}</span>
                    <GiShower />
                  </div>
                  <div className="card-footer__room" title="Garage">
                    <span className="card-footer__span">{garage}</span>
                    <GiHomeGarage />
                  </div>
                </>
              )}
            </div>
            <button
              className={
                type === "restaurant"
                  ? "card-footer__item card-footer__button card-footer__button-restaurant"
                  : "card-footer__item card-footer__button"
              }
            >
              Ver Mas
              <img
                className="footer-button__icon"
                src="https://i.postimg.cc/2jh0DBYy/next.png"
                alt="ver-mas"
              />
            </button>
          </div>
        </>
      ) : (
        <h1>Cargando....</h1>
      )}
    </div>
  );
}
