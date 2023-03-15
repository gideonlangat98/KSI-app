import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const facebookLogin = 'We removed Facebook login.';
    const loginProblems = 'Having problems logging in?';

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {username, password}),
        })
            .then((res) => res.json())
            .then((data) => (data))
    }

  return (
    <section className='w-60 h-70 max-w-sm bg-gray-100 rounded-md sm:max-w-md
       my-auto mx-auto '>
      <div className='mt-2'>
        <div className='flex justify-around mr-10 mb-2'>
            <div className='border-solid border-2 border-gray-100 bg-white
            p-2 px-2 rounded float-left mr-2'><strong><h6>Create account</h6></strong></div>
            <div className='mt-3'><Link to='/register'>{'Register'}</Link></div>
        </div>
        <form className='mr-10' onSubmit={handleSubmit}>
            <div>
                <label className='capitalize text-left ml-3'>username:</label>
                <input className='p-2 rounded-full ml-2'
                  type="text"
                  name="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label className='capitalize text-left ml-3 mt-2'>password:</label>
                <input className='p-2 rounded-full ml-2'
                  type="text"
                  name="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='flex justify-evenly my-2 mx-10'>
                <div>
                    <input 
                      type='checkbox'
                      name='text' 
                      placeholder='' />
                </div>
                <div>
                    <p className='text-sm'>Show Password</p>
                </div>  
            </div>
            <div>
                <button className='border-solid border-2 bg-pink-500
                py-2 px-14 rounded-full text-white ml-8' type='submit'>Sign in</button>
            </div>
            <div className='underline my-2'>
                <p className='ml-12 text-blue-600'>Forgot Password</p>
            </div>
            <div className='ml-4 my-1 text-sm'>
                <p>{facebookLogin}</p>
                <p>{loginProblems}</p>
            </div>
            <div className='flex justify-evenly mx-12 mt-6 pb-4'>
                <div>
                    <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                       </svg>
                    </i>
                </div>
                <div>
                    <p className='text-blue-600'>Chat to us</p>
                </div>
            </div>
        </form>
      </div>
    </section>
  )
}

export default SignIn;


