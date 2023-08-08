import {useState} from 'react'

export default function Login_Page() {
    const Echange=(e)=>{
        setEmail(e.target.value)
    }
    const Pchange=(e)=>{
        setPasswrod(e.target.value)
    }
    const Submit=(e)=>{
        e.preventDefault()
        const newEntry={email:email,passwrod:passwrod};
        setAllEntry([...allEntry,newEntry]);
        console.log(newEntry);
        console.log(allEntry);
    }

     const [allEntry,setAllEntry] = useState([]);
     const [email, setEmail] = useState('');
     const [passwrod, setPasswrod] = useState('');
  return (
    <>
       <h1>Welcome Guys</h1>
       <div>
          EMAIL_ID<input type='text'name='email' value={email} onChange={Echange}/>       
       </div><br/>
       <div>
          passwrod:<input type='password' name='passwrod' value={passwrod} onChange={Pchange}/>
       </div><br/>
       <div>
          <button type='submit'onClick={Submit}>Login</button>
       </div>
       <div>
            {allEntry.map((curr)=>{
                    return (
                        <div>
                            <p>{curr.email}</p>
                            <p>{curr.passwrod}</p>
                        </div>
                    )
            })}
       </div>
    </>
  )
}
