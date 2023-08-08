import useState, { useRef } from 'react'

export default function Count() {
    const Count=()=>{
       useState(count+1);
    }
      const[count,setCount]=useState(1)
  return (
    <div>
      <h2>Count start</h2>
      <h2>{count}</h2>
      <button onClick={Count}>+</button>
    </div>
  )
}
