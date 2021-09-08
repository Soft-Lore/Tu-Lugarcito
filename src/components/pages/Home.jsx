import React from 'react'
import { Header, ContainerCards, NavBar } from '../organisms/index'

export default function Home() {
    return (
        <div className="home">
            <NavBar />
            <Header />
            <ContainerCards />
        </div>
    )
}
