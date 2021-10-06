import React from "react";
import { Card } from "../moleculs/index";

export default function ContainerCards({ type, data, cls, rute, options }) {
  return (
    <main className={"main-sites " + cls}>
      <form className="main-sites__header">
        <label className="sites-header__lbl">Resultados encontrados: {data.length}</label>
        <select defaultValue="none" className="sites-header__select">
          {
            options.map((option, index) => <option key={index} value={option.name}>{option.value}</option>)
          }
        </select>
      </form>
      <div className="main-cards">
        {data && type === "restaurant"
          ? data.map((dt) => (
              <Card
                img={dt.img}
                price={dt.name.substring(0, 15) + "..."}
                location={dt.days}
                bathroom={dt.schedule.open + "-" + dt.schedule.close}
                id={dt.id}
                key={dt.id}
                type={type}
                rute="restaurants"
              />
            ))
          : data.map((dt) => (
              <Card
                img={dt.img}
                price={dt.price}
                location={dt.location}
                room={dt.room}
                bathroom={dt.bathroom}
                garage={dt.garage}
                id={dt.id}
                key={dt.id}
                type={type}
                rute={rute}
              />
            ))}
      </div>
    </main>
  );
}
