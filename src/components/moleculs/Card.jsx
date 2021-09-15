import React from "react";
import { IoMdBed } from 'react-icons/io'
import { GiShower, GiHomeGarage } from 'react-icons/gi'
import { useHistory } from "react-router";

export default function Card({
  img,
  price,
  location,
  room,
  bathroom,
  garage,
  id,
}) {
  const history = useHistory()

  return (
    <div className="card" onClick={() => history.push(`/site/${id}`)}>
      <img src={img} alt="casa" className="card-image" />
      <div className="card-footer">
        <div className="card-footer__item">
          <p className="card-footer__price">{price}</p>
          <span className="card-footer__location">{location}</span>
        </div>
        <div className="card-footer__item card-footer__icons">
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
        </div>
        <button className="card-footer__item card-footer__button">
          Ver Mas
          <img
            className="footer-button__icon"
            src="https://i.postimg.cc/2jh0DBYy/next.png"
            alt="ver-mas"
          />
        </button>
      </div>
    </div>
  );
}
