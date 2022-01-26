import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render (
    <BrowserRouter>
        <App /> 
    </BrowserRouter>,  
    document.getElementById('root')  
);