import React from "react";

export default function CardMenu({ data }) {
  return (
    <>
      {data.map((dt) => (
        <div className="card__menu" key={dt.id}>
          <div className="card-container__image">
            <img className="card-image" src={dt.photo} alt="food" />
          </div>
          <div className="card-info">
            <div className="card-info__food">{dt.name}</div>
            <div className="card-info__price">C$ {dt.price}</div>
          </div>
          <div className="card-description">
            <div className="card-info__description">{dt.description}</div>
          </div>
        </div>
      ))}
    </>
  );
}
