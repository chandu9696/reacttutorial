import React, { Component } from "react";
//class components
class Increment_state extends Component
{
    constructor()
    {

        super()
    
        this.state=
        {
        value:0,
        
        username:'',
        user_array:[]
        
    }
}
        
        
    render() {
       
        return(
            <>
        <button onClick={()=>this.setState({value:this.state.value+1})}>Increment</button>
        <p>{this.state.value}</p>
        <input type='text' onChange={(e)=>{this.setState({username:e.target.value})}}></input>
        <button onClick={()=>{
            const newlist=[...this.state.user_array,this.state.username]
            this.setState({user_array:newlist})}
    }>Add</button>
    {this.state.user_array.map(item=>
    {
        return(<div>{item}</div>)
    })}
        </>
        )
    }
       
}
export default Increment_state;