import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData,deleteData } from '../Redux_comp/LoginReducer'
import "../App.css"

const Login = () => {
  // const {hndlSubmit,pristine,reset,sumitting} =props
    const[Uname,setName]=useState("")
    const[mail,setMail]=useState("")
    // const existingData=useSelector((state)=>state?.form?.Details)
    const dispatch = useDispatch();
    // console.log(existingData);

const handleSubmit=(e)=>{
  e.preventDefault();
    const Details=[{
      Uname,
      mail
    }];

    dispatch(getData(Details));
    setName('');
    setMail('');
  };

  
  return (
    <div className='Login'>
        <form className='login_form'>
            <h1> Login Form ⌛</h1>
            <input className="LoginInput" type='text' value={Uname} placeholder='UserName' onChange={(e)=>setName(e.target.value)}></input><br/>
            <input className="LoginInput" type='email' value={mail} placeholder='e-mail' onChange={(e)=>setMail(e.target.value)}></input><br/>
            <button id="SubmitButton" type='Submit' onClick={handleSubmit}>Submit</button>
            {/* {<div>
              <input></input>
              <input></input>
              <button>save</button>
            </div>} */}
        </form>
      
    </div>
  )
}

export default Login
