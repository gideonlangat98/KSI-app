import React from 'react'

function NavBar() {
  return (
    <nav className="border-solid border-2 border-pink-400 py-3 border-x-transparent">
        <div className='ml-8 text-xl'>
            <h6 className='text-fuchsia-500'>KSI</h6>
            <ul>
                <div className='flex justify-evenly text-sm'>
                    <div className='pr-1'>
                        <li className='border-solid border-2 border-fuchsia-600 border-t-transparent border-x-transparent'>Home</li>
                    </div>
                    <div className='pr-1'>
                        <li className='border-solid border-2 border-fuchsia-600 border-t-transparent border-x-transparent'>Institutions</li>
                    </div>
                    <div className='pr-1'>
                        <li className='border-solid border-2 border-fuchsia-600 border-t-transparent border-x-transparent'>About Us</li>
                    </div>
                    <div>
                        <li className='border-solid border-2 border-fuchsia-600 border-t-transparent border-x-transparent'>Contact</li>
                    </div>
                    <div>
                        <button className='text-fuchsia-500 text-xl'>Sign In</button>
                        <button className='border-solid border-2 border-fuchsia-500 bg-transparent py-2 px-8 rounded-full text-fuchsia ml-6'>Register</button>
                    </div>
                </div>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar

//Asynchronous JavaScript
//Establish a metaphor between synchronous versus asynchornous work
//Describe a synchronous code block
//Describe an asynchronous code block
//Identify a synchronous code block
//Identify an asynchronous code block

