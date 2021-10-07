import React from 'react'
import image from '../../images/error-404.svg'

export default function Error404() {
    return (
        <div className="error404">
            <img className="error404-image" src={image} alt="error-404" />
            <h1 className="restaurant-site__title">La dirección que buscas no existe</h1>
        </div>
    )
}
