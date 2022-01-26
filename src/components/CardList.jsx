import React from 'react';
import CardInfo from './CardInfo';
import { useEffect, useState } from 'react';
import { Link, Route, Router, Switch, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Pagination from './Pagination';


/* import CardFilter from './CardFilter'; */


export default function CardList() {
    const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php/?&num=30&offset=0&view=List';
    const [cards, setCards] = useState([]);
    const [cardsTable, setCardsTable]= useState([]); 
    const [search, setSearch] = useState(''); 
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setCards(responseJSON.data);
        setCardsTable(responseJSON.data);
    }

    useEffect (() => {
        fetchApi()
    }, [])


    const handleChange = e => {
        setSearch(e.target.value);
        filter(e.target.value);
    }

    const filter = (searchTerm) => {
        var searchResult = cardsTable.filter((elemento) => {
            if (elemento.name.toLowerCase().includes(searchTerm.toLowerCase())
            || elemento.type.toLowerCase().includes(searchTerm.toLowerCase())
            || elemento.card_prices[0].tcgplayer_price.toLowerCase().includes(searchTerm.toLowerCase())
            ){
                return elemento;
            }
        });
        setCards(searchResult);
    }

    const history = useHistory() 
    const redirect = () => {        
        history.push("/CardInfo");      
    } 
    
    return (          
      <React.Fragment>
            <div className="cardList">
                {/* <CardFilter /> */}
                <div className="containerInput">
                    <input className="form-control inputSearch" 
                        value={search} 
                        placeholder="Search..." 
                        onChange={handleChange}/>
                    <button className="btn btn-success">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="seccion-listado">             
                    <h3 id="#CardList">TODAS LAS CARTAS:</h3>                                  
                    { !cards ? 'Loading...' : 
                    cards.map((card, index) => {
                        return ( 
                                                                              
                            <div className="informacionList" key={index}>
                                
                                <div className="imagen-cartaListado">
                                    <img alt = {card.name} src={card.card_images[0].image_url_small} />
                                </div>
                                <div className="detalle-cartaListado"> 
                                    <ul>
                                        <li><b>Nombre:</b> {card.name}</li>
                                        <li><b>Descripción:</b> {card.desc}</li>
                                        <li><b>Tipo:</b> {card.type}</li>
                                        <li><b>Precio:</b> ${card.card_prices[0].tcgplayer_price}</li>                                                                            
                                                                            
                                        <button className="btn btn-dark" onClick={redirect}>Detalle</button>                                 
                                    </ul>
                                </div>
                                                                                  
                                <Switch>
                                    <Route path="/CardInfo">
                                        <CardInfo />   
                                    </Route>                                                                            
                                </Switch>
                                                                                                  
                            </div>                                                       
                        )    
                     })
                     
	            }
                <Pagination />
                </div>              
            </div>
       </React.Fragment>
    )
}

