import { useContext} from "react";
import { AppContext } from "./UseContext";
export default function Login(props){
    const {setUsername}=useContext(AppContext)

    return(
        <input type='text' onChange={(e)=>{setUsername(e.target.value)}}></input>
    )

}