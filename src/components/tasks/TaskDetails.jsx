import React from 'react'
import CreateNewTask from './Top/CreateNewTask'
import TaskTabs from './TaskDetails/TaskTabs'

const TaskDetails = () => {
  return (
    <div>
        <CreateNewTask />
        <TaskTabs />
    </div>
  )
}

export default TaskDetails