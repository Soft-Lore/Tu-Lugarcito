import React from 'react'
import { useCarrousel } from "../hook/index";
import { NavBar } from "../organisms/index";
import { ImNext, ImBackward } from "react-icons/im";
import { GiCupcake } from "react-icons/gi";
import { BiDrink, BiFoodMenu } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";

const images = [
    "https://picsum.photos/1366/768?grayscale",
    "https://picsum.photos/seed/picsum/1366/768",
    "https://picsum.photos/id/237/1366/768",
    "https://picsum.photos/1366/768/?blur",
];

export default function Site() {
    const { index, toggleBack, toggleNext, updateIndex } = useCarrousel(
        images.length
    );
    return (
        <>
            <NavBar />
            <main className="restaurant-site">
                <div className="site-section site-container__slider">
                    <div className="slider-items__span">
                        {images &&
                        images.map((img, i) => (
                            <button
                            onClick={(e) => updateIndex(i)}
                            key={i}
                            className={
                                i === index
                                ? "slider-span__circle slider-span__active"
                                : "slider-span__circle"
                            }
                            ></button>
                        ))}
                    </div>
                    <ImBackward
                        className="site-section__next site-section__btn"
                        onClick={() => toggleNext()}
                    />
                    <div
                        className="site-slider"
                        style={{ transform: `translateX(${-index * 100}%)` }}
                    >
                        {images &&
                        images.map((img, index) => (
                            <img
                            key={index}
                            className="site-slider__item"
                            src={img}
                            alt=""
                            />
                        ))}
                    </div>
                    <ImNext
                        className="site-section__back site-section__btn"
                        onClick={() => toggleBack()}
                    />
                </div>
                <div className="site-section__menu">
                    <div className="tabs-container">
                        <div className="tab-breakfast">
                            <BiFoodMenu/>
                            <span className="tab-title">Desayunos</span>
                        </div>
                        <div className="tab-plates">
                            <IoFastFoodOutline/>
                            <span className="tab-title">Platos</span>
                        </div>
                        <div className="tab-drinks">
                            <BiDrink/>
                            <span className="tab-title">Bebidas</span>
                        </div>
                        <div className="tab-desserts">
                            <GiCupcake/>
                            <span className="tab-title">Postres</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}