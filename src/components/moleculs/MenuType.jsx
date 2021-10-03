import React from "react";

export default function MenuType({data}) {
  return (
    <div className="card__menu" key={data.id}>
      <div className="card-container__image">
        <img className="card-image" src={data.img} alt="food" />
      </div>
      <div className="card-info">
        <div className="card-info__food">{data.name}</div>
        <div className="card-info__price">{data.price}</div>
      </div>
      <div className="card-description">
        <div className="card-info__description">{data.description}</div>
      </div>
    </div>
  );
}
