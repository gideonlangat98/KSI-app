import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className='mt-40 mb-10 border-solid border-2 border-pink-400 border-x-transparent 
        border-b-transparent mx-8'>
          <div className='flex justify-between'>
            <div className='ml-8 my-3'>
              <h4 className='text-fuchsia-500 mb-3 text-center text-xl'>KSI</h4>
              <p className='text-xl text-white'>Kenya School Interviews is a platform <br></br>which
               allows users to apply for Interviews <br></br> 
               online through the platform and if they <br></br> 
               happen to meet the job requirements <br></br>
               and qualification they'll be invited for an <br></br>online 
               interview by a specific recruiter.
              </p>
            </div>

            <div>
              <ul className='mt-8 mr-5 text-blue-500'>
                <Link to='/'><li className='pb-2'>Home</li></Link>
                <Link to='/institutions'><li className='pb-2'>Institutions</li></Link>
                <Link to='/aboutus'><li className='pb-2'>About Us</li></Link>
                <Link to='/contact'><li className='pb-2'>Contact</li></Link>
                <Link to='/signin'><li className='pb-2'>Sign In</li></Link>
                <Link to='/register'><li>Register Here</li></Link>
              </ul>
            </div>

            <div>
              <ul className='mt-8 px-3 text-blue-500'>
                <li className='pb-2'>Facebook</li>
                <li className='pb-2'>LinkedIn</li>
                <li className='pb-2'>Twitter</li>
                <li className='pb-2'>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>

          <div>
            <p className='text-fuchsia-500 text-center my-12'>Copyright@2023</p>
          </div>
          
        </footer>
    </div>
  )
}

export default Footer
