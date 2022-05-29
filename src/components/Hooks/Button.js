import { useState,forwardRef, useImperativeHandle } from "react"

const Button = forwardRef((props,ref)=>{
    const [toggle,setToggle]=useState(true)
    //Use ImperativeHandle to set the flag
    //altertoggle can be used in parent
    //Note In function we must return object
    useImperativeHandle(ref,()=>
    ({
        altertoggle()
        {
            setToggle(!toggle);
        }
}))
    return(
        <>
        <button>From Child</button>
        {toggle && <p>Hello this text</p>}
        </>
    )
})
export default Button;