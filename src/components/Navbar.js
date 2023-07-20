import React from 'react'

export default function Navbar(props) {
  let title=props.title;
  let changeTitle=()=>{
    title="updated";
    console.log(title);
  }
  return (
    <>
    <div className='container my-3'>
      <h2>Apna Cart</h2>
    <h2>{title}</h2>      
    <button onClick={changeTitle}>Change Title</button>
    </div>
    </>
  )
}

