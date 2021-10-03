import React from "react";
import {
  Header,
  ContainerCards,
  FormContact,
  Footer
} from "../organisms/index";
import { data } from "../../dataRestaurants";
import { useLoading } from "../hook/index";
import { Spinner } from '../atoms/index'
import { generalOptions } from '../../optionsSelect'

export default function Home() {
  const { loading } = useLoading();

  return (
    <div className="home">
      {loading ? (
        <>
          <Header
            className="header header-restaurants"
            title="¡Si un día sientes un vacio come es "
            keyword="hambre!"
            content="Un buen vino es como una buena película: dura un instante y te deja en la boca un sabor a gloria; es nuevo en cada sorbo y, como ocurre con las películas, nace y renace en cada saboreador"
          />
          <ContainerCards type="restaurant" data={data} options={generalOptions} />
          <FormContact />
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
