import React from 'react'
// import Institutions from './components/Institutions';

function Home() {
   
  return (
    <div>
      <aside className='float-left mx-20 my-5'>
        <div>
            <div>
                <input className='border-solid border-2 rounded-full px-4 py-1.5' type='text' name='text' placeholder='Search jobs here...' />
            </div>
            <div className='my-8 text-xl'>
                <p>We are hiring new people for our team. <br></br> Want to join? Keep the hiring process <br></br> smooth from the initial interview to <br></br> signing of the employement contract.</p>
            </div>
            <div>
                <button className='border-solid border-2 border-fuchsia-500 bg-transparent-500 py-1.5 px-6 rounded-full text-black ml-12'>Post Job</button>
            </div>
        </div>
      </aside>
      <aside className='float-right mx-20 my-5'>
        <div>
            <div>
                <button className='border-solid border-2 border-fuchsia-500 bg-fuchsia-500 py-2 px-8 rounded-full text-white ml-6'>Apply Here</button>
            </div>
            <div>
                <img src='./src/assets/images/software.jpeg' alt='interviewphoto' />
            </div>
        </div>
      </aside>
      
    </div>

   
  )
}

export default Home
