import React, { useState } from 'react'
import {ChevronDown} from 'lucide-react'

const PriorityOptions = () => {
  const [isOpen, setisOpen] = useState(false)
  const priorities =[
    {
      id: 1,
      label: "High"
    },
    {
      id: 2,
      label: "Medium"
    },
    {
      id: 3,
      label: "Low"
    },
    
  ]
  return (
    <div className='w-full'>
      <div className='flex gap-2 items-center'>
        <h1>All Priorities</h1>
        <button className='cursor-pointer' onClick={()=> isOpen ? setisOpen(false) : setisOpen(true)}><ChevronDown size={16} strokeWidth={1.75} /></button>
      </div>
      {isOpen && <div className='absolute z-20 bg-[#d3e0ff4d] w-full p-3 left-0 top-10 backdrop-blur-md border border-black/20 rounded-b-lg shadow-md'>
        <ul className='flex flex-col gap-1'>
          {priorities.map((items)=> {
            return <li key={items.id} className='font-bold'>{items.label}</li>
          })}
        </ul>
      </div>}
    </div>
  )
}

export default PriorityOptions