import React from "react";

export default function Card({
  img,
  price,
  location,
  room,
  bathroom,
  garage,
  id,
}) {
  return (
    <div className="card" onClick={() => alert("Chacabummmmm")}>
      <img src={img} alt="casa" className="card-image" />
      <div className="card-footer">
        <div className="card-footer__item">
          <p className="card-footer__price">{price}</p>
          <span className="card-footer__location">{location}</span>
        </div>
        <div className="card-footer__item card-footer__icons">
          <div className="card-footer__room" title="Cuarto/s">
            <span className="card-footer__span">{room}</span>
            <img
              className="card-footer__icon"
              src="https://i.postimg.cc/mDn8gbnL/habitacion-vip.png"
              alt="cuarto"
            />
          </div>
          <div className="card-footer__room" title="Baño/s">
            <span className="card-footer__span">{bathroom}</span>
            <img
              className="card-footer__icon"
              src="https://i.postimg.cc/Jn0p8yPY/ducha.png"
              alt="baño"
            />
          </div>
          <div className="card-footer__room" title="Garage">
            <span className="card-footer__span">{garage}</span>
            <img
              className="card-footer__icon"
              src="https://i.postimg.cc/rstgdB6S/garage.png"
              alt="garage"
            />
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
