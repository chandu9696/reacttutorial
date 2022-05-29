import { useContext } from "react";
import App from "../../App";
import { AppContext } from "./UseContext";
export default function User(){
    const {username}=useContext(AppContext)
    return(
        <p>User :{username}</p>
    )

}