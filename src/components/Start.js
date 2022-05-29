import { useNavigate } from "react-router";
import { useState, useEffect } from 'react';

function Start(){
    const [name,Newtitleetname]=useState(false);


    const navigate = useNavigate();
    setTimeout(function(){
        Newtitleetname(true)

    },2000)
    return(
        <div>
            <h1>Start</h1>
            {name?navigate('/'):null}
        </div> )    
}

export default Start;