import React from 'react'
import { Header, ContainerCards, FormContact, Footer } from '../organisms/index'
import { data } from "../../data";
import { useLoading } from '../hook/index'
import { Spinner } from '../atoms/index'
import { generalOptions } from '../../optionsSelect'
 
export default function Home() {
    const { loading } = useLoading()

    return (
        <div className="home">
         {
             loading ? (
                 <>
                <Header title="¡Encuentra el lugar idoneo para " keyword="hospedarte!" content="La misión empresarial es el conjunto de objetivos generales y principios de trabajos para avanzar en una organización"/>
                <ContainerCards type="estate" data={data} options={generalOptions} />
                <FormContact />
                <Footer />
                </>
             ) : <Spinner />
         }
        </div>
    )
}
