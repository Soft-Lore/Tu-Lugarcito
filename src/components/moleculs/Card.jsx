import React, { useRef } from "react";
import { IoMdBed } from "react-icons/io";
import { GiShower, GiHomeGarage } from "react-icons/gi";
import { BiEdit } from "react-icons/bi";
import { MdSchedule } from "react-icons/md";
import { useHistory } from "react-router";
import { useLazyLoading } from "../hook/index";
import { RiDeleteBin5Line } from 'react-icons/ri'

export default function Card({
  img,
  price,
  location,
  room,
  bathroom,
  garage,
  id,
  type,
  rute,
  ...rest
}) {
  const history = useHistory();
  const cardRef = useRef();
  const {show} = useLazyLoading(cardRef);

  return (
    <div
      className="card"
      onClick={() => rute && history.push(`/${rute}/${id}`)}
      ref={cardRef}
      {...rest}
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
                    title="Bebidas"
                  >
                    <span className="card-footer__restaurant">
                      {bathroom}
                    </span>
                    <MdSchedule />
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
            </div>{
              type  !== "estate-site" ? (
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
              ) : <div className="card-actions">
                <span className="card-actions__edit" onClick={() => console.log("Editado")}>
                  <BiEdit />
                </span>
                <span className="card-actions__delete" onClick={() => console.log("Eliminado")}>
                  <RiDeleteBin5Line />
                </span>
              </div>
            }
          </div>
        </>
      ) : (
        <h1>Cargando....</h1>
      )}
    </div>
  );
}
