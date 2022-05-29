import { useRef } from "react";
import Button from "./Button";

export default function UseImpe_demo()
{
    //Useref
    //setting value to done when click a button
    function onclick()
    {
        inputref.current.value=''
    }
    //I want to set toggle value from here
    //Option 1 : TO use props , Create toggle state and passed in the from of props
    //But I dont want to create state at higher level of components
    //Now follow the process
    //wrap child component to accept ref passed from parent
    //
    const buttonref=useRef(null);
    const inputref=useRef(null);
    return(
        <div>
        <button onClick={()=>{
            buttonref.current.altertoggle();
        }}>Parent</button>
        <Button ref={buttonref}></Button>
        <input type='text' ref={inputref}/>
        <button onClick={onclick}>Show value</button>
        </div>
    )
}