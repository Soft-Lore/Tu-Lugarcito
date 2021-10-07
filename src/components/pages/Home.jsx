import React from 'react'
import { Header, ContainerCards, FormContact, Footer } from '../organisms/index'
import { useLoading, useGetData } from '../hook/index'
import { Spinner } from '../atoms/index'
import { generalOptions } from '../../utils/const/sitesFormOpcions'
 
export default function Home() {
    const { loading } = useLoading()
    const { data} = useGetData('/api/all_business')

    return (
        <div className="home">
         {
             loading ? (
                 <>
                <Header btn="Restaurantes" url="/restaurants" title="¡Encuentra el lugar idoneo para " keyword="hospedarte!" content="La misión empresarial es el conjunto de objetivos generales y principios de trabajos para avanzar en una organización"/>
                <ContainerCards type="estate" url={`/api/all_business/`} data={data} rute={"inmuebles"} options={generalOptions} />
                <FormContact />
                <Footer />
                </>
             ) : <Spinner />
         }
        </div>
    )
}
