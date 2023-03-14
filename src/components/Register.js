import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
     .then((res) => res.json())
     .then((data) => (data))
  }

  return (
    <div className='mt-4'>
      <form className='w-60 h-70 max-w-sm bg-gray-100 rounded-md sm:max-w-md
       py-8 pr-12 pl-6 my-auto mx-auto' onSubmit={handleSubmit}>
        <p className='mb-2'>Create Your Account</p>
        <div>
          <label htmlFor='username'>Username</label>
          <input 
            className='p-2 rounded-full mb-2'
            name='text'
            type='text' 
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor='username'>Password</label>
          <input
            className='p-2 rounded-full mb-2'
            name='text'
            type='text' 
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password_confirmation'>Confirm Password</label>
          <input
            className='p-2 rounded-full mb-3'
            name='text' 
            type='text' 
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </div>
        <button className='border-solid border-2 bg-pink-500 py-2 px-6
         rounded-full text-white mb-4' type='submit'>Sign Up</button>
         <div className='flex justify-evenly'>
          <div>
            <p>Already have an account?</p>
          </div>
          <div>
            <Link className='underline text-xl ml-2' to='/register'>{'Register'}</Link>
          </div>
         </div>
         
      </form>
    </div>
  )
}

export default Register;
