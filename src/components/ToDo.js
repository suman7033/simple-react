import { useState } from 'react';

import './ToDo.css';

export default function ToDO() {
  const [text, update]=useState("");
  const [item,setitem]=useState([]);
  const [isValid,setIsValid]=useState(true);

    let Add=(e)=>{
      if(text.trim().length ===0){
        setIsValid(false);
        return;
      }
        setitem((old)=>{
            return [...old,text]
        });
        update("");
        
    }
     let itemEvent=(event)=>{
      if(event.target.value.trim().length >0 ){
         setIsValid(true);
      }
         update(event.target.value)
    }
   
  return (
    <>
      <h1>ToDo List</h1><br/>
      <div className={`input-control ${!isValid ? 'invalid' : ''}`}>
      <input className={`input-control ${!isValid ? 'invalid': ''}`}type="text" value={text} onChange={itemEvent}/>
      </div>
      <button onClick={Add}>+</button>

      <ol>
        {item.map((itemval)=>{
           return <li>{itemval}</li>
        })}
      </ol>
   </>
  )
}
 