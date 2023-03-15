import React from 'react'
// import Institutions from './components/Institutions';
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Home() {
   
  return (
    <div>
      <aside className='float-left mx-20 my-2'>
        <div>
            <div>
                <input className='border-solid border-2 border-blue-500 rounded-full px-4 py-1.5' type='text' name='text' placeholder='Search jobs here...' />
            </div>
            <div className='my-8 text-xl text-white'>
                <p>We are hiring new people for our team. <br></br> Want to join? Keep the hiring process <br></br> smooth from the initial interview to <br></br> signing of the employement contract.</p>
            </div>
            <div>
                <button className='border-solid border-2 border-fuchsia-500 bg-transparent-500 py-2 px-8 rounded-full text-blue-500 ml-12'>Post Job</button>
            </div>
        </div>
      </aside>

      <div>
        <div>
            <div className='my-4'>
                <Link to='/institutions'>
                  <button className='border-solid border-2 border-fuchsia-500 bg-fuchsia-500 py-2 px-8 rounded-full text-white ml-40'>
                  Apply Here</button>
                </Link>
            </div>
            <div>
                <img className='rounded-md mx-16 pr-5' src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' 
                alt='interviewphoto' width='500'/>
            </div>
        </div>

        {/* <!--footer--> */}

        <div><Footer /></div>

      </div>
    </div>

   
  )
}

export default Home
