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
        <strong><p className='mb-2'>Create Your Account</p></strong>
        <div>
          <label htmlFor='username'>Username:</label>
          <input 
            className='p-2 rounded-full mb-2'
            name='text'
            type='text' 
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor='username'>Password:</label>
          <input
            className='p-2 rounded-full mb-2'
            name='text'
            type='text' 
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password_confirmation'>Confirm Password:</label>
          <input
            className='p-2 rounded-full mb-3'
            name='text' 
            type='text' 
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </div>
        <button className='border-solid border-2 bg-pink-500 py-2 px-10
         rounded-full text-white mb-4 ml-5' type='submit'>Sign Up</button>
         <div className='flex justify-evenly'>
          <div>
            <strong><p className='text-sm'>Already have an account?</p></strong>
          </div>
          <div>
            <em><Link className='underline ml-4 text-blue-600' to='/signin'>{'SignIn'}</Link></em>
          </div>
         </div>
         
      </form>
    </div>
  )
}

export default Register;
