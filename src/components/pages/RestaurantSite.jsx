import React from "react";
import { Spinner } from "../atoms/index";
import { useTabs, useGetData } from "../hook/index";
import { Carrousel, CardMenu } from "../moleculs/index";
import { Footer, BarNavegationRestaurant } from "../organisms/index";

export default function Site({ match }) {
  const { tabs, toggleTab } = useTabs();
  const { data } = useGetData(`/api/get_one_restaurant/${match.params.id}`);

  return (
    <>
      {data ? (
        <main className="restaurant-site">
          <Carrousel
            images={data.images.filter((e) => e != null)}
            cls="restaurant-site__slider"
          />
          <h1 className="restaurant-site__title">{data.name}</h1>
          <div className="site-section__menu">
            <h3 className="restaurant-site__title restaurant-site__menu">
              Menu
            </h3>
            {data.Menus.length > 0 ? (
              <>
                <BarNavegationRestaurant tabs={tabs} toggleTab={toggleTab} />
                <div className="menu-container">
                  {tabs === 0 ? (
                    <CardMenu
                      data={data.Menus.filter(
                        (m) => m.Menus_Type.menu_type === "comida"
                      )}
                    />
                  ) : tabs === 1 ? (
                    <CardMenu
                      data={data.Menus.filter(
                        (m) => m.Menus_Type.menu_type === "bebida"
                      )}
                    />
                  ) : (
                    <CardMenu
                      data={data.Menus.filter(
                        (m) => m.Menus_Type.menu_type === "postre"
                      )}
                    />
                  )}
                </div>
              </>
            ) : (
              <h3>Aun no añadimos menu en este sitio</h3>
            )}
          </div>
          <Footer />
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
}
