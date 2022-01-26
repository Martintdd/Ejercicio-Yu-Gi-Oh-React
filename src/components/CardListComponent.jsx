/* import React, { Component} from 'react'

class CardListContainer extends Component {

    state = {
        cardsData: [],
        next: "",
        previous: ""
    }

    componentDidMount () {
        fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php/?&num=30&offset=0&view=List')
        .then(respuesta => {
            const {results, next, previous } = respuesta.data;

            this.setState({
                cardsData: results,
                next,
                previous
            })
        })
        .cath(error => {
            console.log(error);
        })
    }

    nextPage = () => {
        const { next } = this.state;
        fetch(next)
        .then(r => {
            const {results, next, previous } = r.data;
            this.setState({                
                cardsData: results,
                next,
                previous
            })
        })
    }

    previousPage = () => {
        const { previous } = this.state;
        fetch(previous)
        .then(r => {
            const {results, next, previous } = r.data;
            this.setState({                
                cardsData: results,
                next,
                previous
            })
        })
    }

    render () {
        const {cardsData} = this.state
        return (
            <>
                va un contenedor
                <button className="btn btn-secondary" onClick={this.previousPage}>Anterior</button>
                <button className="btn btn-secondary" onClick={this.nextPage}>Siguiente</button>
            </>
        )
    }   
}

export default CardListContainer;
 */