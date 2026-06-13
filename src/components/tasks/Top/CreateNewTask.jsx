import React from 'react'

const CreateNewTask = () => {
  return (
    <div className='h-20 flex justify-between items-center' >
      <div>
        <h1 className='font-bold text-4xl'>Tasks</h1>
        <p className='text-black/70 text-sm'>Track and manage all tasks across your projects</p>
      </div>

      <div>
        <button className='bg-[#e55707] p-[8px_10px] rounded-lg text-white font-bold'>+ New Task</button>
      </div>
    </div>
  )
}

export default CreateNewTask