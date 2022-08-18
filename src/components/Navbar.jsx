import React from 'react'
import data from '../starter-code/data.json';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full px-4 text-white border-b-2'>
        <div>
            <h1 className='font-sans py-3 px-6 text-4xl'>THE PLANETS</h1>
        </div>
        <ul className='flex'>
            
            {data.map(data => (

            <li key={data.name} className='px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200'>{data.name}</li>
            
            ))}
        </ul>

    </div>
  )
}

export default Navbar