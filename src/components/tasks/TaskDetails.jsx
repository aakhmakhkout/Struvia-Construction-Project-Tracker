import React from 'react'
import CreateNewTask from './Top/CreateNewTask'
import TaskTabs from './TaskDetails/TaskTabs'
import DetailedTasksInformation from './TaskDetails/DetailedTasksInformation'
import Bottom from './TaskPriority/Bottom'

const TaskDetails = () => {
  return (
    <div>
        <CreateNewTask />
        <TaskTabs />
        <DetailedTasksInformation />
        <Bottom />
    </div>
  )
}

export default TaskDetails