import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="border-solid border-2 border-pink-400 pb-4 pt-7 border-x-transparent">
        <div className= 'text-xl'>
            
            <ul>
                <div className='flex justify-evenly text-sm text-blue-500'>
                    <div className='flex justify-evenly float-left pr-2 mr-14 '>
                        <div>
                            <img className='rounded-full mr-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bj8WV71ngUNyQvdyqI2_lNnmE9Zja-wwCw&usqp=CAU' 
                            width='40' alt='logo' />
                        </div>
                        <div><h6 className='font-bold text-fuchsia-500 text-3xl'>KSI</h6></div>
               
                    </div>
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

