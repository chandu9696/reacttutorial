import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from './Header';

function Delete(){
   
    return(
        <div>
             <Header></Header>
            <h1>Delete</h1>
        </div> )    
}

export default Delete;