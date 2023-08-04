import {useState} from 'react'

export default function ListAdd() {
     const change=(e)=>{
         setText(e.target.value)
     }
     const Add=(e)=>{
          setPvalue((old)=>{
            return [...old,text];
          })
     }



    const [text,setText]=useState("");
    const [pvalue,setPvalue]=useState([]);
  return (
    <div>
      <input type='text' onChange={change}></input>
      <button onClick={Add}>Add</button>
      {pvalue.map((val)=>{
         return <h1>{val}</h1>
      })}
    </div>
  )
}

