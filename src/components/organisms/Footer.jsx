import React from 'react'
import { useLoading } from '../hook/index'

export default function Footer() {
    const { loading } = useLoading()
    return (
      <>
        {
            loading && (
                <footer className="footer">
                <p className="footer-paragraph">Todos los derechos reservados</p>   
                <h3 className="footer-title">TEAM FORANEOS</h3>
                <div className="footer-line"></div>
                <div className="footer-items">
                    <a href="https://google.com" className="footer-ancla footer-ancla__fb">
                        <img className="footer-ancla__icon" src="https://cdn.icon-icons.com/icons2/2429/PNG/512/facebook_logo_icon_147291.png" alt="facebook" />
                        <span className="footer-ancla__text footer-ancla__fb-text">Facebook</span>
                    </a>
                    <a href="https://google.com" className="footer-ancla footer-ancla__ig">
                        <img className="footer-ancla__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" alt="instagram" />
                        <span className="footer-ancla__text footer-ancla__ig-text">Instagram</span>
                    </a>
                    <a href="https://google.com" className="footer-ancla footer-ancla__tk">
                        <img className="footer-ancla__icon" src="https://cdn.worldvectorlogo.com/logos/tiktok-share-icon-black-1.svg" alt="tiktok" />
                        <span className="footer-ancla__text footer-ancla__ig-text">Tik Tok</span>
                    </a>
                </div>
            </footer>
            )
        }
      </>
    )
}
