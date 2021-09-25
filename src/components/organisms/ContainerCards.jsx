import React from "react";
import { Card } from "../moleculs/index";

export default function ContainerCards({ type, data, cls }) {
  return (
    <main className={"main-sites " + cls}>
      <form className="main-sites__header">
        <label className="sites-header__lbl">Resultados: 12/12</label>
        <select defaultValue="none" className="sites-header__select">
          <option value="none" disabled>Filtrar Busqueda</option>
          <option value="new">Lo mas nuevo</option>
          <option value="low">Lo de menor costo</option>
          <option value="high">Lo de mayor costo</option>
        </select>
      </form>
      <div className="main-cards">
        {data && type === "restaurant"
          ? data.map((dt) => (
              <Card
                img={dt.img}
                price={dt.location}
                location={dt.name}
                room={dt.foots}
                bathroom={dt.drinks}
                garage={dt.rapid}
                id={dt.id}
                key={dt.id}
                type={type}
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
              />
            ))}
      </div>
    </main>
  );
}
