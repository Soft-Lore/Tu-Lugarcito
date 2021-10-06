import React from "react";
import { useLoading, useGetData } from "../hook/index";
import { Spinner } from "../atoms/index";
import { Carrousel } from "../moleculs";
import { Footer } from "../organisms/index";
// import { data } from "../../data";
import { GiShower, GiHomeGarage } from "react-icons/gi";
import { IoMdBed } from "react-icons/io";

export default function Site({ match }) {
  const { loading } = useLoading();
  const { data } = useGetData(`/api/one_business/${match.params.id}`)

  console.log(data)
  
  return (
    <>
      {data && loading ? (
        <>
          <main className="site">
            <Carrousel images={data.images.filter(e => e != null)} />
            <div className="site-section site-section__two">
              <h3 className="site-section__title">VENTA</h3>
              <p className="site-section__price">{data.price}</p>
              <button className="site-section__button">Enviar Mensaje</button>
              <div className="site-section__description">
                <h4 className="site_subtitle site-description__title">
                  Detalles
                </h4>
                <p className="site-description__content">
                  {
                    data.description
                  }
                </p>
              </div>
              <div className="site-section__otherDetails">
                <h4 className="site_subtitle section-otherDetails__title">
                  Otros Detalles
                </h4>
                <div className="site-section__items">
                  <div title="cuartos">
                    <IoMdBed />  
                    {data.bedrooms}
                  </div>
                  <div title="duchas">
                    <GiShower />
                    {data.bathrooms} 
                  </div>
                  <div title="garage">
                    <GiHomeGarage />
                    {data.garage ? "Sí" : "No"}
                  </div>
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
