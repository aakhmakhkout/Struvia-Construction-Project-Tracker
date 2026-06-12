import React from 'react'
import SearchBar from './SearchBar'
import PriorityOptions from './PriorityOptions'

const TaskTabs = () => {
  return (
    <div className='h-15 flex gap-10 items-center'>
      <div className='border border-black/20 p-[8px_15px] rounded-sm'>
        <h1 >Projects Drop Down</h1>
      </div>

      <div className='border border-black/20 p-[8px_15px] rounded-sm'>
        <PriorityOptions />
      </div>

      <div className='border border-black/20 p-[8px_15px] rounded-sm'>
        <SearchBar />
      </div>
    </div>
  )
}

export default TaskTabs