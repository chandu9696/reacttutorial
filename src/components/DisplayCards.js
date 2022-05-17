import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from './Header';

function DisplayCards(props) {

    return (

        <div className="container-fluid mt-5">
            <div className="row text-center">
        <div className='col-10 col-md-4'>
            
            <div className="card">
                <img src={props.link} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.usertitle}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default DisplayCards;