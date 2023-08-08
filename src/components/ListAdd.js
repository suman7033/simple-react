import {useState} from 'react'
import './ListAdd.css';

export default function ListAdd() {
     const change=(e)=>{
        if(e.target.value.trim().length > 0){
            setIsValid(true);
        }
         setText(e.target.value);
         
     };
     const DeleteHand=(index)=>{
            setPvalue((old)=>{
              const updatedPvalue=[...old];
              updatedPvalue.splice(index,1);
              return updatedPvalue;
            })
         }
     const Add=(index)=>{
        if(text.trim().length ===0){
            setIsValid(false);
            return;
        }
          setPvalue((old)=>{
            return [...old,text];
          })
          setText("");
     }
    const [text,setText]=useState("");
    const [pvalue,setPvalue]=useState([]);
    const [isValid, setIsValid]=useState(true);
  return (
    <div className='container'>
    <div className='container mt-5 goal-list text-warning bg-#ccc shadow border'>
      <h1 style={{color: !isValid ? 'red': 'black'}}>Fill this</h1><br/>
      <input className='input' type='text' value={text} onChange={change}></input><br/><br/>

      <button className='btn' onClick={Add}>Add</button>
      </div><br/>
      {pvalue.map((val,index)=>{
         return <h1  className='container div' key={index} onClick={() =>DeleteHand(index)}>{val}</h1>
      })}
    </div>
  )
}

