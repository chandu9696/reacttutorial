import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from './Header';

function Update(){
    
    return(
        <div>
            <Header></Header>
            <h1>Update</h1>
        </div> )    
}

export default Update;