import { useNavigate } from "react-router";
import { useState, useEffect } from 'react';

function Join(){
    const [name,Newtitleetname]=useState(false);


    const navigate = useNavigate();
    setTimeout(function(){
        Newtitleetname(true)

    },5000)
    return(
        <div>
            <h1>Join</h1>
            {name?navigate('/'):null}
        </div> )    
}

export default Join;