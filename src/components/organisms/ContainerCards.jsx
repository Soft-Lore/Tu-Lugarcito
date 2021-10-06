import React from "react";
import { Card } from "../moleculs/index";
import { Spinner } from '../atoms/index'

export default function ContainerCards({ type, data, cls, rute, options, ...rest }) {

  return (
    <main className={"main-sites " + cls}>
      {
        data ? (
          <>
          <form className="main-sites__header">
        <label className="sites-header__lbl">Resultados encontrados: {data.estate_result.count}</label>
        <select defaultValue="none" className="sites-header__select">
          {
            options.map((option, index) => <option key={index} value={option.name}>{option.value}</option>)
          }
        </select>
      </form>
      <div className="main-cards">
        {data && type === "restaurant"
          ? data.estate_result.rows.map((dt) => (
              <Card
                img={dt.Photos_Menus[0].cover_page}
                price={dt.name.substring(0, 15) + "..."}
                location={dt.Time.start_day + dt.Time.last_day}
                bathroom={dt.Time.start_time + "-" + dt.Time.last_time}
                id={dt.id}
                key={dt.id}
                type={type}
                rute="restaurants"
              />
            ))
          : data.estate_result.rows.map((dt) => (
              <Card
                img={dt.Photos[0].cover_page}
                price={dt.price}
                location={dt.Business_Type.type_offer}
                room={dt.bedrooms}
                bathroom={dt.bathrooms}
                garage={dt.garage ? "Sí" : "No"}
                id={dt.id}
                key={dt.id}
                type={type}
                rute={rute}
              />
            ))}
      </div>
          </>
        ) : <Spinner />
      }
    </main>
  );
}
