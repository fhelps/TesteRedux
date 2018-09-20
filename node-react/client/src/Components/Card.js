import React from 'react';
import logo from './logo.svg';


const Componente = (props) => (
   

        <div class="card shadow  col-sm-12 col-md-4 col-lg-3 mb-3 m-3" >
            <img class="card-img-top" src={logo} alt="Card iage cap"/>
            <div class="card-body">
                <h5 class="card-title">{props.server}</h5>
                <p class="card-text">{props.react}</p>
                <p>{props.button}</p>
            </div>
        </div>

);

export default Componente;