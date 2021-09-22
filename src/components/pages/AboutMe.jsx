import React from "react";
import { NavBar, Header, Footer } from "../organisms/index";
import { ArticleContent } from "../moleculs/index";
import logo from "../../images/logo.png";
import { useLoading } from "../hook/index";
import { Spinner } from '../atoms/index'

export default function AboutMe() {
  const { loading } = useLoading();

  return (
    <>
      {loading ? (
        <>
          <NavBar />
          <Header
            className="header header-aboutMe"
            title="¡Todos conocemos a un "
            keyword="Foráneo!"
            content="Tú lugarcito busca ayudar a los estudiantes o a cualquier persona foránea que busque un sitio en nuestro territorio, ya sea para comer, habitar u otra necesidad habitual de los nicas."
          />
          <ArticleContent
            title="Misión"
            image="https://www.destinoscreativos.com/wp-content/uploads/2020/07/misio%CC%81n-visio%CC%81ny-objetivos-de-una-empresa-1024x682.jpg"
          >
            <p className="article-content__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </ArticleContent>
          <ArticleContent
            title="Visión"
            image="https://st.depositphotos.com/1005844/3526/i/600/depositphotos_35261859-stock-photo-compass-vision.jpg"
          >
            <p className="article-content__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </ArticleContent>
          <ArticleContent
            title="Valores"
            image={logo}
            className="logo-secondary article-image"
          >
            <ol className="article-list__values">
              <li>Salud</li>
              <li>Vida</li>
              <li>fdsafdsfsd</li>
              <li>fdsafdsf</li>
              <li>rweqrwqre</li>
            </ol>
          </ArticleContent>
          <ArticleContent title="Objetivo">
            <p className="article-content__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
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
