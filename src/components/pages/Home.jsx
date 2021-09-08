import React from 'react'
import { Header, ContainerCards, NavBar, FormContact, Footer } from '../organisms/index'

export default function Home() {
    return (
        <div className="home">
            <NavBar />
            <Header />
            <ContainerCards />
            <FormContact />
            <Footer />
        </div>
    )
}
