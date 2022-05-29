import { useLayoutEffect, useRef } from "react"

export default function UseRef_demo(){
    const inputref=useRef(null)
    const onclick=()=>
    {
        console.log(inputref.current.value)
        //we ca we focus method here to focus when button click
        inputref.current.focus()
        inputref.current.value='';
    }
    useLayoutEffect(()=>
    {
        console.log('before render')

    })
    return(
        <div>
            <h3>Use Ref Uses</h3>     
            <input type='text' ref={inputref}></input> 
            <button onClick={onclick}>Add</button>  
            </div>
    )
}