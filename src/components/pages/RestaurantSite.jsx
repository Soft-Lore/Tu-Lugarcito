import React from "react";
import { useTabs } from "../hook/index";
import { Carrousel, MenuType } from "../moleculs/index";
import { Footer, BarNavegationRestaurant } from "../organisms/index";
import { data } from "../../dataRestaurants";

export default function Site({ match }) {
  const { tabs, toggleTab } = useTabs();
  const dataRestaurant = data.find((d) => d.id === match.params.id);

  return (
    <main className="restaurant-site">
      <Carrousel
        images={dataRestaurant.images}
        className="restaurant-slider__item"
      />
      <h3>{dataRestaurant.name}</h3>
      <div className="site-section__menu">
        <BarNavegationRestaurant tabs={tabs} toggleTab={toggleTab} />
        <div className="menu-container">
          {tabs === 0
            ? dataRestaurant.platillos.map((dt) => <MenuType data={dt} />)
            : tabs === 1
            ? dataRestaurant.almuerzo.map((dt) => <MenuType data={dt} />)
            : tabs === 2
            ? dataRestaurant.bebidas.map((dt) => <MenuType data={dt} />)
            : tabs === 3 &&
              dataRestaurant.postre.map((dt) => <MenuType data={dt} />)}
        </div>
      </div>
      <Footer />
    </main>
  );
}
