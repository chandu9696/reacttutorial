import { useEffect, useState } from "react";
import axois from 'axios';
export default function UseEffect_demo()
{
 const [users,setUsers]=useState("")
 const [count,setCount]=useState(0)
const fetchData=async()=>
  {
    let response= await axois.get("https://jsonplaceholder.typicode.com/comments");
    // let data=await response;
    // setUsers(data.email)
    console.log(response.data[0].name)
    setUsers(response.data[0].name)
    //console.log(data)
    //console.log(data[0].id)
  }
    useEffect(()=>
    {
        fetchData()
        console.log('useeffect')
    },[count]
    //calling every time when the state changes
    )
    return(
        <div>
            <p>{users}</p>
            <p>{count}</p>
            <button onClick={()=>{
                setCount(count+1)
            }}>count</button>
        </div>
    )
}