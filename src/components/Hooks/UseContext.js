import { useState,createContext } from "react";
import User from "./User";
import Login from "./Login";
export const AppContext=createContext(null)
export default function UseContext_demo()
{
    //Now Understand what we are doing herr
    //Passing setstate function to login which will laod data of input text
    //And User will Display that 
    //Both values are passed in form of props
    //Observe state can be set from anywhere
    //Now we want to user Context Api to managed our state easily
    //Follow the process
  
    const [username,setUsername]=useState('')
    return(
        <div>
            <AppContext.Provider value={{username,setUsername}}>
                <Login></Login><User></User>
            </AppContext.Provider>
        </div>

    )
}