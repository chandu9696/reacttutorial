
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
import DisplayCards from './components/DisplayCards';
import DisplayTile from './components/DisplayTile';
import Increment from './components/Increment';
import Corosal from './components/Corosal';
import TodoList from './components/Todo';
import Increment_state from './components/Hooks/StateandSetState';
import UseReducer_demo from './components/Hooks/UseReducer_';
import UseEffect_demo from './components/Hooks/UseEffect_';
import UseRef_demo from './components/Hooks/UseRef_';
import UseImpe_demo from './components/Hooks/UseImperativeHandle';
import UseContext_demo from './components/Hooks/UseContext';
function App(props) {


  
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
      <Route path="displaytile" element={<DisplayTile />} />
      <Route path="increment" element={<Increment />} />
      <Route path="corosal" element={<Corosal />}/>
      <Route path="todolist" element={<TodoList />} />
      <Route path='/increment_state' element={<Increment_state/>}/>
      <Route path='/usereducer' element={<UseReducer_demo/>}/>
      <Route path='/usereffect' element={<UseEffect_demo/>}/>
      <Route path='/useref' element={<UseRef_demo/>}/>
      <Route path='/useimp' element={<UseImpe_demo/>}/>
      <Route path='/usecontext' element={<UseContext_demo/>}/>
    </Routes>
    
    </div>
    )

}

export default App;
