import React from 'react'
import image from '../assets/images/Cartas-YuGiOh.jpg';
import {Link, Route, Switch} from 'react-router-dom';
import CardDetail from './CardDetail';
import CardList from './CardList';
import Graphic from './Graphic';


export default function Navbar() {
  return (
    <React.Fragment>
        <div className="top-header">            
            <a className="imagen-logo" href="/"><img className="imagen-logoo" src={image} alt="Yu-Gi-Oh"/></a>  
        </div>
        <nav>
            <div className="opciones-header">
                {/* <h6>OPCIONES:</h6> */}
                <ul id="lista-menu">
                    <li className="nav-item">
 	                    <Link className="nav-link" to="/CardList">                      
                            <button className="btn btn-dark"><span>LISTADO DE CARTAS</span></button>
                        </Link>
                    </li>
                    <li className="nav-item">
 	                    <Link className="nav-link" to="/CardDetail">                      
                            <button className="btn btn-dark"><span>CARTA FAVORITA</span></button>
	                    </Link>
                    </li>                                                                              
                </ul>
            </div>
        </nav>
                    
        <Switch>
            <Route path="/CardDetail">
                <CardDetail />
            </Route>
            <Route path="/CardList">
                <CardList />
            </Route>                                          
        </Switch>           
    </React.Fragment>
  )
}
