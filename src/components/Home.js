
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './Home.css'
import { useNavigate } from "react-router";
import Header from './Header';
function Home(){
   
    const navigate = useNavigate();
    
    return(
       <div>
           <Header></Header>
        <div className='icon'>
            <div className='item1' onClick={()=>navigate('startameeting')}>
            <img src="https://rc.jiomeet.jio.com/assets/img/start_a_meeting.svg"/>
            <h5>Start a <br></br>Meeting</h5>
            </div>
            
            <div  className='item2' onClick={()=>navigate('joinameeting')}>
            <img src="https://rc.jiomeet.jio.com/assets/img/join_meeting.svg"/>
            <h5>Join a<br></br>Meeting</h5>
            </div>
            <div  className='item3' onClick={()=>navigate('planameeting')}>
            <img src="https://rc.jiomeet.jio.com/assets/img/plan_a_meeting.svg"/>
            <h5>Plan a <br></br> Meeting</h5>
            </div>
       
            
        </div> 
        </div>)    
}

export default Home;