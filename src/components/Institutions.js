import React from 'react'
import Footer from './Footer';
// import { Link } from 'react-router-dom'

function Institutions() {
    const institutions = [{name: 'Kabarak University'}, {name: 'Karatina University'}, 
    {name: 'Moringa School'}, {name: 'UON Main Campus'}, {name: 'Mount Kenya University'},
    {name: 'Multimedia University'},];
  
    return (
    <div>
        <div className='flex justify-around my-3 mx-6'>
            <div>
                <p className='text-blue-500'>New Job Opportunities</p>
            </div>
            <div>
                <button className='border-solid border-2 border-fuchsia-500 bg-transparent-500 py-1.5 px-6 rounded-full text-white ml-12'>View Jobs</button>
            </div>
        </div>
      <div className='flex justify-between'>
        {institutions.map((institution) => {
            return <div>
                <button className='border-solid border-2 border-fuchsia-500 bg-transparent rounded-full
            px-8 py-3 mx-2 my-2 text-white'>{institution.name}</button>
            </div>
        })}
      </div>
      <footer>
        <div className='mt-40'><Footer /></div>
      </footer>
    </div>
  )
}

export default Institutions
