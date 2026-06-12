import React from 'react'
import CreateNewTask from './Top/CreateNewTask'
import TaskTabs from './TaskDetails/TaskTabs'
import DetailedTasksInformation from './TaskDetails/DetailedTasksInformation'

const TaskDetails = () => {
  return (
    <div>
        <CreateNewTask />
        <TaskTabs />
        <DetailedTasksInformation />
    </div>
  )
}

export default TaskDetails