import React from 'react'
import { useTabs } from "../hook/index";
import { GiCupcake } from "react-icons/gi";
import { BiDrink, BiFoodMenu } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { dataDesayuno, dataAlmuerzo, dataBebidas, dataPostres } from "../../dataMenuRestaurant"
import { Carrousel } from "../moleculs/index"
import { Footer } from "../organisms/index";

const images = [
  "https://picsum.photos/1280/720?grayscale",
  "https://picsum.photos/seed/picsum/1280/720",
  "https://picsum.photos/id/237/1280/720",
  "https://picsum.photos/1280/720/?blur",
];

export default function Site() {
	const { tabs, toggleTab } = useTabs();
  
	return (
		<>
			<main className="restaurant-site">
        <Carrousel images={images} className="restaurant-slider__item" />
				<div className="site-section__menu">
					<div className="tabs-container">
						<div 
							onClick={() => toggleTab(0)}
							className={tabs === 0 ? "tab-menu icon tab-menu__active" : "tab-menu icon"}
						>
							<BiFoodMenu/>
							<span className="tab-title">Desayunos</span>
						</div>
						<div 
							onClick={() => toggleTab(1)}
							className={tabs === 1 ? "tab-menu icon tab-menu__active" : "tab-menu icon"}
						>
							<IoFastFoodOutline/>
							<span className="tab-title">Almuerzos/Cenas</span>
						</div>
						<div 
							onClick={() => toggleTab(2)}
							className={tabs === 2 ? "tab-menu icon tab-menu__active" : "tab-menu icon"}
						>
							<BiDrink/>
							<span className="tab-title">Bebidas</span>
						</div>
						<div 
							onClick={() => toggleTab(3)}
							className={tabs === 3 ? "tab-menu icon tab-menu__active" : "tab-menu icon"}
						>
							<GiCupcake/>
							<span className="tab-title">Postres</span>
						</div>
					</div>
          <div className="menu-container">
            {tabs === 0 ?
              dataDesayuno.map((dt) => (
                <div className="card__menu" key={dt.id}>
                  <div className="card-container__image">
                    <img className="card-image" src={dt.img} alt="food"/>
                  </div>
                  <div className="card-info">
                    <div className="card-info__food">{dt.name}</div>
                    <div className="card-info__price">{dt.price}</div>
                  </div>
                  <div className="card-description">
                    <div className="card-info__description">{dt.description}</div>
                  </div>
                </div>
              )) : tabs === 1 ?
                  dataAlmuerzo.map((dt) => (
                    <div className="card__menu" key={dt.id}>
                      <div className="card-container__image">
                        <img className="card-image" src={dt.img} alt="food"/>
                      </div>
                      <div className="card-info">
                        <div className="card-info__food">{dt.name}</div>
                        <div className="card-info__price">{dt.price}</div>
                      </div>
                      <div className="card-description">
                        <div className="card-info__description">{dt.description}</div>
                      </div>
                    </div>
                  )) : tabs === 2 ?
                  dataBebidas.map((dt) => (
                    <div className="card__menu" key={dt.id}>
                      <div className="card-container__image">
                        <img className="card-image" src={dt.img} alt="food"/>
                      </div>
                      <div className="card-info">
                        <div className="card-info__food">{dt.name}</div>
                        <div className="card-info__price">{dt.price}</div>
                      </div>
                      <div className="card-description">
                        <div className="card-info__description">{dt.description}</div>
                      </div>
                    </div>
                  )) : tabs === 3 &&
                  dataPostres.map((dt) => (
                    <div className="card__menu" key={dt.id}>
                      <div className="card-container__image">
                        <img className="card-image__restaurant" src={dt.img} alt="food"/>
                      </div>
                      <div className="card-info">
                        <div className="card-info__food">{dt.name}</div>
                        <div className="card-info__price">{dt.price}</div>
                      </div>
                      <div className="card-description">
                        <div className="card-info__description">{dt.description}</div>
                      </div>
                    </div>
                  ))
            }
          </div>
				</div>
			</main>
      <Footer />
		</>
	)
}