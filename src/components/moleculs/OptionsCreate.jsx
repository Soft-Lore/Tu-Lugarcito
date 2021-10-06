import React from 'react'
import restaurantIcon from '../../images/restaurant-icon.png'
import houseIcon from '../../images/house-icon.png'
import menuIcon from '../../images/menu-icon.png'

export default function OptionsCreate({state}) {
    return (
        <div className="optionCreate">
            <h3 className="optionCreate-title">Elige el tipo de publicación</h3>
            <div className="optionCreate-options">
                <div className="optionCreate-item optionCreate-restaurant" onClick={() => state("restaurant")}>
                    <img className="optionCreate-item__img" src={restaurantIcon} alt="" />
                    <span className="optionCreate-item__title">Restaurante</span>
                    <p>Publica un restaurante que ofrezca sus servicios</p>
                </div>
                <div className="optionCreate-item optionCreate-site" onClick={() => state("site")}>
                    <img className="optionCreate-item__img" src={houseIcon} alt="" />
                    <span className="optionCreate-item__title">Casa</span>
                    <p>Publica una casa o departamento para vender o alquilar</p>
                </div>
                <div className="optionCreate-item optionCreate-site" onClick={() => state("menu")}>
                    <img className="optionCreate-item__img" src={menuIcon} alt="" />
                    <span className="optionCreate-item__title">Menu</span>
                    <p>Añadir platillo, bebida o postre para un restaurante</p>
                </div>
            </div>
        </div>
    )
}
