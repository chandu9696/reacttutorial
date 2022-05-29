
import { useState } from "react"
export default function TodoList()
{
    const [list,setlistItem]=useState([''])
    const [value,setvalue]=useState('')
    const [index,SetUpdateIndex]=useState()
    const [text,SetUpdateText]=useState('')
    const [fav,SetFav]=useState([''])
    function DeleteList(x,i)
    {
        if(fav.indexOf(x)!=-1)
        {
            const newfav=[...fav]
            newfav.splice(fav.indexOf(x),1)
            SetFav(newfav)

        }
        else
        {
        const newlist=[...list]
        newlist.splice(i,1)
        setlistItem(newlist)
        console.log('deletelist')
        console.log(newlist)
        }
    }
    function onUpdate(i)
    {
        const newlist=[...list]
        newlist[i]=text;
        setlistItem(newlist)
        SetUpdateIndex()
        SetUpdateText('')

    }
    function renderUpdateList(x,i)
    {
        return(
        <div key={i}>
        <input type='text' value={text} onChange={(e)=>SetUpdateText(e.target.value)}/>
        <button onClick={()=>onUpdate(i)}>done</button>
        
        </div>)

    }
    function StartItem(x,i)
    {
        
        const newlist=[...list]
        newlist.splice(i,1)
        setlistItem(newlist)
        SetFav([...fav,x])
    }
    function renderlist(x,i)
    {
        if(x=='')
        {
            return;
        }
        return(
        <div key={i}>
        <div>{x}</div>
        {console.log('in renderlist')}
        
        <button onClick={()=>DeleteList(x,i)}>delete</button>
        <button onClick={()=>{
            SetUpdateIndex(i)
            SetUpdateText(x)
        }}>Update</button>
          <button disabled={fav.indexOf(x)!=-1?true:false} onClick={()=>{
            StartItem(x,i)
        }}>Star</button>
        </div>
        )


    }
    return(
        <>
        <input type='text' onChange={(e)=>setvalue(e.target.value)}/>
        <button onClick={()=>{
        setlistItem([...list,value])}}>Add</button>
        {fav.map(renderlist)}

        {list.map((x,i)=>index==i?renderUpdateList(x,i):renderlist(x,i))}
        
        </>
    )
}