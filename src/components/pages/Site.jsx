import React from "react";
import { useLoading } from "../hook/index";
import { Spinner } from "../atoms/index";
import { Carrousel } from "../moleculs";
import { Footer } from "../organisms/index";
import { data } from "../../data";

export default function Site({ match }) {
  const { loading } = useLoading();

  const dt = data.find((d) => d.id === match.params.id);

  return (
    <>
      {loading ? (
        <>
          <main className="site">
            <Carrousel images={dt.images} />
            <div className="site-section site-section__two">
              <h3 className="site-section__title">VENTA</h3>
              <p className="site-section__price">{dt.price}</p>
              <button className="site-section__button">Enviar Mensaje</button>
              <div className="site-section__description">
                <h4 className="site_subtitle site-description__title">
                  Detalles
                </h4>
                <p className="site-description__content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis expedita natus rerum, sapiente dignissimos nobis
                  adipisci recusandae ad ratione culpa minus voluptatibus quam,
                  numquam vero deleniti magnam ullam error. Ab!
                </p>
              </div>
              <div className="site-section__otherDetails">
                <h4 className="site_subtitle section-otherDetails__title">
                  Otros Detalles
                </h4>
                <div>
                  <div>{dt.room} Cuartos</div>
                  <div>{dt.bathroom} duchas</div>
                  <div>{dt.garage} Garage</div>
                </div>
              </div>
              <div className="site-send__message">
                <textarea
                  type="text"
                  placeholder="Hola, ¿Aún esta disponible?"
                />
                <button className="header-content__button nav-collapse__button">
                  Enviar
                </button>
              </div>
            </div>
          </main>
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
