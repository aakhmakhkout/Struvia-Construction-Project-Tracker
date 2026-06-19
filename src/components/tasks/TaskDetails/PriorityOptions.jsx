import React from 'react'

const PriorityOptions = () => {
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
    <div className='relative bg-black/20 w-full'>
      <div>All Priorities</div>
      <div className='absolute z-20 bg-black/30 w-full'>
        <ul>
          {priorities.map((items)=> {
            return <li key={items.id}>{items.label}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default PriorityOptions