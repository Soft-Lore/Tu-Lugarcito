import React from "react";
import { useTabs } from "../hook/index";
import { Carrousel, CardMenu } from "../moleculs/index";
import { Footer, BarNavegationRestaurant } from "../organisms/index";
import { data } from "../../dataRestaurants";

export default function Site({ match }) {
  const { tabs, toggleTab } = useTabs();
  const dataRestaurant = data.find((d) => d.id === match.params.id);

  return (
    <main className="restaurant-site">
      <Carrousel
        images={dataRestaurant.images}
        cls="restaurant-site__slider"
      />
      <h1 className="restaurant-site__title">{dataRestaurant.name}</h1>
      <div className="site-section__menu">
        <h3 className="restaurant-site__title restaurant-site__menu">Menu</h3>
        <BarNavegationRestaurant tabs={tabs} toggleTab={toggleTab} />
        <div className="menu-container">
          {tabs === 0
            ? dataRestaurant.platillos.map((dt) => <CardMenu data={dt} />)
            : tabs === 1
            ? dataRestaurant.almuerzo.map((dt) => <CardMenu data={dt} />)
            : tabs === 2
            ? dataRestaurant.bebidas.map((dt) => <CardMenu data={dt} />)
            : tabs === 3 &&
              dataRestaurant.postre.map((dt) => <CardMenu data={dt} />)}
        </div>
      </div>
      <Footer />
    </main>
  );
}
