import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className='mt-40 mb-10 border-solid border-2 border-pink-400 border-x-transparent 
        border-b-transparent mx-8'>
          <div className='flex justify-between'>
            <div className='ml-8 my-4'>
              <div className='flex place-content-center'>
                <div>
                  <img className='rounded-full mr-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bj8WV71ngUNyQvdyqI2_lNnmE9Zja-wwCw&usqp=CAU' 
                    width='40' alt='logo' />
                  </div>
                <div><h4 className='text-fuchsia-500 mb-3 text-center text-3xl'>KSI</h4></div>
              </div>
              
              <p className='text-xl text-white leading-loose'>Kenya School Interviews is a platform <br></br>which
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
                <div className='flex justify-around pb-3'>
                  <div><img src='https://img.icons8.com/color/1x/facebook-new.png' alt='facebook logo' width='35' /></div>
                  <div><li className='pb-2 mt-1'>Facebook</li></div>
                </div>
                <div className='flex justify-around pb-3'>
                  <div><img src='https://img.icons8.com/color/256/linkedin.png' alt='link' width='35' /></div>
                  <div><li className='pb-2 mt-1'>LinkedIn</li></div>
                </div>
                <div className='flex justify-around pb-3'>
                  <div><img src='https://img.icons8.com/color/256/twitter.png' alt='twitter' width='40' /></div>
                  <div><li className='pb-2 mt-1'>Twitter</li></div>
                </div>
                <div className='flex justify-evenly pb-3'>
                  <div><img src='https://img.icons8.com/color/256/instagram-new.png' alt='insta' width='35' /></div>
                  <div><li className='pb-2 mt-1'>Instagram</li></div>
                </div>
                <div className='flex justify-evenly pb-3'>
                  <div><img src='https://img.icons8.com/3d-fluency/1x/telegram.png' alt='link' width='35' /></div>
                  <div><li>Telegram</li></div>
                </div>
                
                
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
