import React from 'react'
import { useEffect, useState } from 'react';
import Graphic from './Graphic';

export default function CardDetail() {

    const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?id=1861630';
    const [cards, setCards] = useState([]);
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setCards(responseJSON.data)
    }
    useEffect (() => {
        fetchApi()
    }, [])
    
    return (
        <React.Fragment>                    
                { !cards ? 'Loading...' : 
                    cards.map((card, index) => {
                        return (
                            <div className="seccion-listado" key={index}>                                
                                <h3 id="#CardDetail">CARTA SELECCIONADA TIPO: "{card.archetype}".</h3>
                                <div className="informacion-detail">
                                    <div className="imagen-cartaDetail">
                                        <img alt = {card.name} src={card.card_images[0].image_url} />
                                    </div>
                                    <div className="info-cartaDetail">
                                        <h4>CARACTERISTICAS:</h4>
                                        <p><b>Nombre:</b> {card.name}</p>
                                        <p><b>Descripción:</b> {card.desc}</p>
                                        <p><b>Tipo:</b> {card.type}</p>
                                        <p><b>Raza:</b> {card.race}</p>
                                        <p><b>Poder de Ataque:</b> {card.atk}</p>
                                        <p><b>Atributo:</b> {card.attribute}</p>
                                        <p><b>Prototipo:</b> {card.archetype}</p>
                                        <p><b>Precio Ebay:</b> ${card.card_prices[0].ebay_price}</p>
                                    </div>                                                                                
                                </div>
                                <div className="cont-grafico-precios">
                                    <Graphic />
                                </div>
                            </div>                                                       
                        )    
                })}                     
        </React.Fragment>       
    )
}