import React, { useState } from 'react'
import TaskPTop from './Top/TaskPTop'
import TaskTabs from './TaskDetails/TaskTabs'
import DetailedTasksInformation from './TaskDetails/DetailedTasksInformation'
import Bottom from './TaskPriority/Bottom'

const TaskDetails = () => {
  const [isNTP, setisNTP] = useState(false)
  return (
    <div>
        <TaskPTop state={{isNTP, setisNTP}}/>
        <TaskTabs />
        <DetailedTasksInformation />
        <Bottom />
    </div>
  )
}

export default TaskDetails