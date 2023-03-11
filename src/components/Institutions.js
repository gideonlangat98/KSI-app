import React from 'react'
// import Home from './components/Home'

function Institutions() {
     const institutions = [{name: 'Kabarak University'}, {name: 'Karatina University'}, 
    {name: 'Moringa School'}, {name: 'UON Main Campus'}, {name: 'Mount Kenya University'},
     {name: 'Multimedia University'},];

  return (
    <section>
      <div>
        <div className='flex justify-between'>
            <h6>New Job Opportunities</h6>
        </div>
        <div>
            <button className='border-solid border-2 border-fuchsia-500 bg-transparent-500 py-1.5 px-6 rounded-full text-black ml-12'>View Jobs</button>
        </div>
      </div>
      <div>
        {institutions.map((institution) => {
            return <button className='border-solid border-2 border-fuchsia-500 bg-transparent rounded-full
            px-8 py-3 mx-2 my-2'>{institution.name}</button>
        })}
      </div>
    </section>
  )
}

export default Institutions;
