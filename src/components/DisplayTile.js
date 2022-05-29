import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from './Header';
import './DisplayTile.css'
function DisplayTile(props) {
    return(
        <div className='main'>
            <div className='item'>
                <div className='date'>
                <div>22</div>
                    <div>March</div>
                    <div>1997</div>
                </div>
                <div className='left'>
                  <h4>Hello World</h4>
                  <div className='amount'>
                    200
                  </div>
                </div>
            </div>
            <div className='item'>
                <div className='date'>
                <div>22</div>
                    <div>March</div>
                    <div>1997</div>
                </div>
                <div className='left'>
                  <h4>Hello World</h4>
                  <div className='amount'>
                      200
                  </div>
                </div>
            </div>
            <div className='item'>
                <div className='date'>
                <div>22</div>
                    <div>March</div>
                    <div>1997</div>
                </div>
                <div className='left'>
                  <h4>Hello World</h4>
                  <div className='amount'>
                      
                  </div>
                </div>
            </div>

        </div>
    )

   
}

export default DisplayTile;