import React from 'react'

export default function OptionsCreate({state}) {
    return (
        <div className="optionCreate">
            <h3 className="optionCreate-title">Elige el tipo de publicación</h3>
            <div className="optionCreate-options">
                <div className="optionCreate-item optionCreate-restaurant" onClick={() => state("restaurant")}>
                    <img className="optionCreate-item__img" src="https://cdn-icons-png.flaticon.com/512/1996/1996068.png" alt="" />
                    <span className="optionCreate-item__title">Restaurante</span>
                    <p>Publica un restaurante que ofrezca sus servicios</p>
                </div>
                <div className="optionCreate-item optionCreate-site" onClick={() => state("site")}>
                    <img className="optionCreate-item__img" src="https://coffective.com/wp-content/uploads/2018/06/icon-house-blue.png" alt="" />
                    <span className="optionCreate-item__title">Casa</span>
                    <p>Publica una casa o departamento para vender o alquilar</p>
                </div>
                <div className="optionCreate-item optionCreate-site" onClick={() => state("menu")}>
                    <img className="optionCreate-item__img" src="https://previews.123rf.com/images/yupiramos/yupiramos1711/yupiramos171106563/89528354-plato-con-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-icono-de-cubiertos.jpg" alt="" />
                    <span className="optionCreate-item__title">Menu</span>
                    <p>Añadir platillo, bebida o postre para un restaurante</p>
                </div>
            </div>
        </div>
    )
}
