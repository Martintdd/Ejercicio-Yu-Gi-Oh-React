import React from 'react'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



        /* AL IMPORTAR EL COMPONENTE EN CARDLIST MUESTRA LA BARRA DE BUSQUEDA PERO
                NO REALIZA EL FILTRADO, POR ESO NO SE IMPORTA COMPONENTE
                            SE DUPLICA CODIGO EN CARDLIST */


export default function CardFilter() {
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

    useEffect (() => {
        fetchApi()
    }, [])    
    

    return (
        <div className="card-filter">
            <div className="containerInput">
                    <input className="form-control inputSearch" 
                        value={search} 
                        placeholder="Search..." 
                        onChange={handleChange}/>
                    <button className="btn btn-success">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
        </div>
  )
}
