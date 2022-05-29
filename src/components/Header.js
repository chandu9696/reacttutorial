import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './Header.css'




function Header(props){


  /*
  //Sending Data To parent
    Now Understant what we are doing

    1.This is the Child of header
    Home(Parent)
    |
    |
    Header(CHild)

    We Want send data to Child to Parent i.e Home to Header


    Approch That we are using here is:
    Send a one function to my Child(Header.js)

    Now My Child Will accepts it in the form of props

    Now Just Pass the required data to that function 

    So Data will get passed to Parent 

    Now parent function will accepts it and do some modification or used to for rendering the data


  /*
    UseState is a Hook

    Usestate is used for Set the state

    Usestate Give two things 1.Varible 2. Function 

    We use Array destructing to Get the both

    We Must Have to do is add a Function to Button or that input filed 

    From Input Use onChage and Set any Varible of that data which can be used to Future


    Similary for Button we have OnCLick Funtion

    We can assign on varible to another in Usestate

 */
  const [title,Newtitleetname]=useState("");



  
  function ChangeInputHadle(event)
  {
      
      Newtitleetname(event.target.value);
  }
  function HandleChange(event)
  {
    event.preventDefault();
   // console.log(title)
      props.getData(title)
  }
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <a class="nav-link" ><Link to="/" style={{ textDecoration: 'none',
            color:'wheat'}}>Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to="/expense" style={{ textDecoration: 'none',
            color:'wheat'}}>Expense</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to="/displaytile" style={{ textDecoration: 'none',
            color:'wheat'}}>Display</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to="/increment" style={{ textDecoration: 'none',
            color:'wheat'}}>Increment</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to="/corosal" style={{ textDecoration: 'none',
            color:'wheat'}}>Corosal</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to="/todolist" style={{ textDecoration: 'none',
            color:'wheat'}}>To Do List</Link></a>
              </li>
             
             
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={ChangeInputHadle}/>
              <button class="btn btn-outline-success"  onClick={HandleChange}>Submit</button>
              
            </form>
          </div>
        </div>
      </nav>)    
}

export default Header;