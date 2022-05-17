import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from './Header';

function Add(){
    
    return(
        <div>
            <Header></Header>
            <h1>Add</h1>
        </div> )    
}

export default Add;