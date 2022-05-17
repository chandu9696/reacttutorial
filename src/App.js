
import './App.css';
import ExpenseItem from './components/ExpenseItem.js'
import { useState, useEffect } from 'react';
import Home  from './components/Home';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Add from './components/Add';
import Update from './components/Update';
import Delete from './components/Delete';
import Join from './components/Join';
import Start from './components/Start';
import Plan from './components/Plan';
function App() {
  
  // const fetchData = () => {
  //   fetch("https://reqres.in/api/users?page=2")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       console.log(data)
  //       console.log(data.data[0].email)
  //     })
  // }
  // const [users, setUsers] = useState([])
  // const fetchData=async()=>
  // {
  //   let response= await fetch("https://jsonplaceholder.typicode.com/users");
  //   let data=await response.json();
  //   setUsers(data)
  //   console.log(data)
  //   console.log(data[0].id)
  // }

  // useEffect(() => {
  //   fetchData()
  // },[])

  return (
    <div>
     

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="expense" element={<ExpenseItem />} />
      <Route path="add" element={<Add />} />
      <Route path="update" element={<Update />} />
      <Route path="delete" element={<Delete />} />
      <Route path="planameeting" element={<Plan/>} />
      <Route path="joinameeting" element={<Join />} />
      <Route path="startameeting" element={<Start />} />
    </Routes>
    
    </div>
    )

}

export default App;
