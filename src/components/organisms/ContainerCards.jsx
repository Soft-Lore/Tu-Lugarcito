import React from "react";
import { Card } from "../moleculs/index";
import { data } from "../../data";

export default function ContainerCards() {
  return (
    <main className="main-sites">
      <form className="main-sites__header">
        <label className="sites-header__lbl">Resultados: 12/12</label>
        <select className="sites-header__select">
          <option>Filtrar Busqueda</option>
          <option value="new">Lo mas nuevo</option>
          <option value="low">Lo de menor costo</option>
          <option value="high">Lo de mayor costo</option>
        </select>
      </form>
      <div className="main-cards">
        {data &&
          data.map((dt) => (
            <Card
              img={dt.img}
              price={dt.price}
              location={dt.location}
              room={dt.room}
              bathroom={dt.bathroom}
              garage={dt.garage}
              id={dt.id}
              key={dt.id}
            />
          ))}
      </div>
    </main>
  );
}
