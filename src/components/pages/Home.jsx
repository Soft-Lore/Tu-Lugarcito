import React from 'react'
import { Header, ContainerCards, NavBar, FormContact, Footer } from '../organisms/index'
import { data } from "../../data";

export default function Home() {
    return (
        <div className="home">
            <NavBar />
            <Header title="¡Encuentra el lugar idoneo para " keyword="hospedarte!" content="La misión empresarial es el conjunto de objetivos generales y principios de trabajos para avanzar en una organización"/>
            <ContainerCards type="estate" data={data}/>
            <FormContact />
            <Footer />
        </div>
    )
}
