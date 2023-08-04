import { useState } from 'react';

export default function ToDO() {
    let Add=()=>{
        setitem((old)=>{
            return [...old,text]
        })
        
    }
     let itemEvent=(event)=>{
         update(event.target.value)
    }
  const [text, update]=useState("");
  const [item,setitem]=useState([]);
  return (
    <>
      <h1>ToDo List</h1><br/>
      <input type="text" onChange={itemEvent}/>
      <button onClick={Add}>+</button>

      <ol>
        {item.map((itemval)=>{
           return <li>{itemval}</li>
        })}
      </ol>
    </>
  )
}
 