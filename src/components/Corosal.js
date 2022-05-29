import { useState } from "react"

export default function Corosal()
{
    const [index,setIndex]=useState(0);
    const images=[
        'https://rc.jiomeet.jio.com/assets/img/website/hero_animation_loggedin_desktop.svg',
        'https://rc.jiomeet.jio.com/assets/img/start_a_meeting.svg',
        'https://rc.jiomeet.jio.com/assets/img/plan_a_meeting.svg'
    ]
    return(
        <>
         <button onClick={()=>{ 
            if(index==0)
            {
                setIndex(images.length-1);
            }
            else
            {
                setIndex(index-1);
            }
          }}
            >left</button>
        <img src={images[index]}  style={{ width:'500px',height:'200px'}}></img>
       
        <button onClick={()=>setIndex((index+1)%images.length)}>right</button>
        
        </>
    )
}