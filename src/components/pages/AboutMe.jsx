import React from "react";
import { Header, Footer } from "../organisms/index";
import { ArticleContent } from "../moleculs/index";
import logo from "../../images/logo.png";
import { useLoading } from "../hook/index";
import { Spinner } from "../atoms/index";
import mision from "../../images/Mision.png"
import vision from "../../images/vision.png"

export default function AboutMe() {
  const { loading } = useLoading();

  return (
    <>
      {loading ? (
        <>
          <Header
            btn="Inmuebles"
            url="/inmuebles"
            className="header header-aboutMe"
            title="¡Todos conocemos a un "
            keyword="Foráneo!"
            content="Tú lugarcito busca ayudar a los estudiantes o a cualquier persona foránea que busque un sitio en nuestro territorio, ya sea para comer, habitar u otra necesidad habitual de los nicas."
          />
          <ArticleContent
            title="Misión"
            image={mision}
          >
            <p className="article-content__text">
              Contribuir al bienestar de los foráneos durante su estancia en la
              universidad, poniendo a su disposición prestaciones de viviendas,
              alimentación y servicios básicos; considerando las capacidades
              económicas de nuestros usuarios, así mismo, garantizarles
              seguridad y confianza; del mismo modo, asegurar que tu lugarcito
              se encuentra lo más cerca de tu destino.
            </p>
          </ArticleContent>
          <ArticleContent
            title="Visión"
            image={vision}
          >
            <p className="article-content__text">
              Ser una empresa digital reconocida por parte de nuestros usuarios,
              que brinde una excelente calidad de servicio para inmuebles a
              nivel nacional, Brindando así información de distintos lugares,
              tales como; viviendas, apartamentos cuartos Para generar empleos
              en nuestro país, dando lugar a la restaurantes y turismo para un
              mejor desarrollo.
            </p>
          </ArticleContent>
          <ArticleContent
            title="Valores"
            image={logo}
            className="logo-secondary article-image"
          >
            <ol className="article-list__values">
              <li>Puntualidad</li>
              <li>Respeto</li>
              <li>Honradez</li>
              <li>Compañerismo</li>
              <li>Empatia</li>
            </ol>
          </ArticleContent>
          <ArticleContent title="Objetivo">
            <p className="article-content__text">
              <ol>
                <li>
                  Ser el número uno en la ciudad de Matagalpa, en ventas de
                  casas, alquileres de viviendas, apartamentos, y cuartos.
                </li>
                <li>
                  Darnos a conocer por ser la primera app web dentro de la
                  ciudad de Matagalpa que brinde estos servicios para la
                  comodidad, seguridad y confort de los estudiantes foráneos.
                </li>
              </ol>
            </p>
          </ArticleContent>
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
