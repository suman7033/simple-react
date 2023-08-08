import { useState } from 'react';
import './Simple_Login.css';

export default function Simple_Login() {
  const [userText, setUserText] = useState("");
  const [ageText, setAgeText] = useState("");
  const [pvalue, setPvalue] = useState([]);
  const [isButtonVisible, setButtonVisible] = useState(false); // New state to track the additional button visibility

  const userTextF = (e) => {
    setUserText(e.target.value);
    setButtonVisible(false); // Hide the additional button when user starts typing
  }

  const ageTextF = (e) => {
    setAgeText(e.target.value);
    setButtonVisible(false); // Hide the additional button when user starts typing
  }

  const Add = (e) => {
    e.preventDefault(); // Prevent form submission and page reload

    // Check if both userText and ageText are not empty before adding a new user
    if (userText.trim() === "" || ageText.trim() === "") {
      setButtonVisible(true); // Show the additional button if input fields are empty
      return;
    }

    setPvalue((old) => {
      return [...old, { user: userText, age: ageText }];
    });
    setUserText(""); // Clear the userText input field after adding the user
    setAgeText(""); // Clear the ageText input field after adding the user
    setButtonVisible(false); // Hide the additional button after adding the user
  }

  return (
    <div>
      <div className='container main1 mt-5 goal-list text-black bg-#ccc shadow border'>
        <h4 className='user'>Username</h4>
        <input className='userText' value={userText} onChange={userTextF} type='text' />
        <h4 className='age'>Age(Years)</h4>
        <input className='ageText' value={ageText} onChange={ageTextF} type='text' /><br /><br />
        <button className='btn' onClick={Add}>Add User</button>
        {isButtonVisible && (
          <button className='btn'>Enter Username and Age</button>
        )}
      </div>
      <div>
        {pvalue.map((user, index) => (
          <h1 key={index} className='container print main1 mt-5 goal-list text-black bg-#ccc shadow border'>
            {user.user} {user.age} years old
          </h1>
        ))}
      </div>
    </div>
  )
}
