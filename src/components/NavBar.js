import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="border-solid border-2 border-pink-400 py-3 border-x-transparent">
        <div className='ml-8 text-xl'>
            <h6 className='text-fuchsia-500'>KSI</h6>
            <ul>
                <div className='flex justify-evenly text-sm text-blue-500'>
                    <div className='pr-1'>
                        <li>
                            <Link to='/'>{'Home'}</Link>
                        </li>
                    </div>
                    <div className='pr-1'>
                        <li className='text-blue-500'>
                            <Link to='/institutions'>{'Institutions'}</Link></li>
                    </div>
                    <div className='pr-1'>
                        <li className='text-blue-500'>
                            <Link to='/aboutus'>{'About Us'}</Link></li>
                    </div>
                    <div>
                        <li className='text-blue-500'>
                            <Link to='/contact'>{'Contact'}</Link></li>
                    </div>
                    <div>
                        <button className='text-white text-xl'>
                            <Link to='/signin'>{'Sign In'}</Link>
                        </button>
                        
                        <button className='border-solid border-2 border-fuchsia-500 bg-transparent py-2 px-8 rounded-full text-fuchsia ml-6'>
                            <Link to='/register'>{'Register'}</Link>
                        </button>
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

