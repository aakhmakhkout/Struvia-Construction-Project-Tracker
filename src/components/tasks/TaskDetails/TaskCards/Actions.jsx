import React from 'react'

const Actions = () => {
  return (
    <div className='w-20 bg-[#e7f0fa] text-black absolute right-2 rounded-lg flex z-10 CPCards border border-black/20'>
        <ul className='p-2 flex flex-col justify-start items-start'>
          <li>Move</li>
          <li>Edit</li>
          <li>Delete</li>
        </ul>    
    </div>
  )
}

export default Actions