import {useState} from 'react'
import './Simple_Login.css';

export default function Simple_Login() {
    const ok=(e)=>{
      setPerror("");
      setIsButton(false);
    }



  const userTextF=(e)=>{
     setUserText(e.target.value);
  }
  const ageTextF=(e)=>{
    setAgeText(e.target.value);
  }
  const Add=(e)=>{
    e.preventDefault();

    if(userText.trim()==='' || ageText.trim()===''){
        setIsButton(true);
        setIsValid(false);
        return (
          <h4>{setPerror("Invalid input Please enter a valid name and age (non-empty values).")}</h4>
        )
    }
    if(ageText.trim()<0){
       setIsButton(true);
       setIsValid(false);
       return (
           <h4>{setPerror("Invalid Input please enter age > 0")}</h4>
       ) 
    }
      setPvalue((old)=>{
         return [...old,{user: userText,age: ageText}];
      });
   setUserText("");
   setAgeText("");
   setIsButton(false);
   }
  const [isbutton,setIsButton]=useState(false);
  const [isValid, setIsValid]=useState(true);
  const [userText,setUserText]=useState("");
  const [ageText,setAgeText]=useState("");
  const [pvalue,setPvalue]=useState([]);
  const [perror,setPerror]=useState("");
  return (
    <div>
    <div className='container main1 mt-5 goal-list text-black bg-#ccc shadow border'>
      <h4 className='user'>Username</h4>
      <input className={`input1 ${!isValid ? 'invalid': ''}`} value={userText} onChange={userTextF} type='text'/>

      <h4 className='age' >Age(Years)</h4>
      <input className={`input2 ${!isValid ? 'invalid': ''}`} value={ageText} onChange={ageTextF} type='text'/><br/><br/>
      <button className='btn' onClick={Add}>Add User</button>
    </div>
    <div>
        { pvalue.map((user,index)=>{
          return  <h1 key={index} className='container print main1 mt-5 goal-list text-black bg-#ccc shadow border'>{user.user} {user.age} years old</h1>
        }) 
        }
    </div>
    <div className={`container mt-4 ${isbutton ? 'error-container': ''}`}>
      <h1 className='container mt-4' >{perror}</h1>
      {isbutton && (<button className='ok' onClick={ok}>ok</button>)}
    </div>
    </div>
  )
}
 