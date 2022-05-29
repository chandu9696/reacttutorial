import './ExpenseItem.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import { Outlet, Link } from "react-router-dom";
import DisplayCards from './DisplayCards';
import { useNavigate } from "react-router";
function ExpenseItem(props) {
 
  
  const [users, setUsers] = useState([])
  const fetchData=async()=>
  {
    let response= await fetch("https://jsonplaceholder.typicode.com/users");
    let data=await response.json();
    setUsers(data)
    console.log(data)
    console.log(data[0].id)
  }
  const navigate = useNavigate();

  useEffect(() => {
    fetchData()
  },[])
 
  return (
    <div>
       <Header></Header>
       <div className="container-fluid mt-5">
        <div className="row justify-content-center text-center">
       {users.map(user => {
         return (
        
          <div className='col-10 col-md-4 border border-warning'>
              
              <div className="card">
                  <img src="https://rc.jiomeet.jio.com/assets/img/website/website_logo_header.svg" class="card-img-top" alt="..." />
                  <div className="card-body ">
                      <h5 className="card-title">{user.name}</h5>
                      <p className="card-text">{user.username}</p>
                      <button className='btn btn-primary' onClick={()=>navigate('/')}>Go somewhere</button>

                      {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
                  </div>
              </div>
          </div>
      
         )
        
})}
 
 </div>
  </div>
    
    
  {/* <table class="table table-warning">
  { <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead> }
  <tbody>
   
    {users.map(user => {
         return (<tr>
            <th scope="row">1</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td><button> <Link to="/add" style={{ textDecoration: 'none',
            color:'red'}}>Add</Link></button></td>
            <td><button> <Link to="/update" style={{ textDecoration: 'none',
            color:'red'}}>Update</Link></button></td>
            <td><button> <Link to="/delete" style={{ textDecoration: 'none',
            color:'red'}}>Remove</Link></button></td>
            </tr>)
})}
    
    
   
    
  </tbody>
</table> */}
</div>
   

  )
    
}

export default ExpenseItem;