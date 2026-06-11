import React from 'react'
import SearchBar from './SearchBar'

const TaskTabs = () => {
  return (
    <div>
      <div>
        <h1>Current Project</h1>
      </div>

      <div>
        <h1>Priority</h1>
      </div>

      <div>
        <SearchBar />
      </div>
    </div>
  )
}

export default TaskTabs