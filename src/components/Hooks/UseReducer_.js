import { useReducer, useState } from "react"


export default function UseReducer_demo() {
    // const [value,setValue]=useState(0)
    // const [flag,setFlag]=useState(true) Use reducer instead
    //reducer helps us to managed a state
    //Steps
    //create usereducer hook pass function and state values as an object
    //define reducer function and use dispatch to set the value of state
    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'increment':
                return {value:state.value+1,flag:state.flag}
            case 'Toggle':
                return {value:state.value,flag:!state.flag}
            default:
                return state;
        }


    }
    const [state,dispatch]=useReducer(reducer,{value:0,flag:true})
    
    return(
        <>
        <p>{state.value}</p>
        <button onClick={()=>{
            dispatch({type:'increment'})
            dispatch({type:'Toggle'})
        }
        }>Click here</button>
        {state.flag && <p>This is text</p> }
        </>
    )
}