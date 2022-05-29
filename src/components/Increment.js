import { useState } from "react"

export default function Increment()
{
    const [value,setValue]=useState(0);
    return(
        <>
        <button onClick={()=>setValue(value+1)}>increment</button>
        <button onClick={()=>setValue(value-1)}>Decrement</button>
        <label>{value}</label>
        </>
    )
}