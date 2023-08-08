import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Login_Page from './components/Login_Page';
//import NewExpense from './components/New_Expense';
//import ExpenseForm from './components/ExpenseForm';
//import ToDo from './components/ToDo';
//import RagisterForm_Cancel from './components/RagisterForm_Cancel';
//import Update_data from './components/Update_data';
//import ListAdd from './components/ListAdd';
import Simple_Login from './components/Simple_Login';
//import Chatgpt from './components/Chatgpt';

const App=()=>{
     
  return (
    <>
     <h2 className='let'>Let's get started</h2>
     {/* <RagisterForm_Cancel/> */}
      {/* <ToDo/> */}
      {/* <NewExpense/> */}
      {/* <ExpenseForm/> */}
      {/* <Login_Page/> */}
      {/* <expense item={expense}></expense> */}
      {/* <ListAdd/> */}
      <Simple_Login/>
      {/* <Chatgpt/> */}
       </>
  );
}

export default App;
