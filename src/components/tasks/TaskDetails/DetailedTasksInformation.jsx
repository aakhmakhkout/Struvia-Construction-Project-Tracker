import {Contact, CalendarDays, MessageSquareMore, EllipsisVertical} from "lucide-react"
import { useSelector } from "react-redux";
import TaskCards from "./TaskCards/TaskCards";


const DetailedTasksInformation = () => {
 

 const {todoTasks, inProgressTasks, inReviewTasks, completedTasks} = useSelector(state => state.tasks)


const CardOptions = [
  {
    id:1,
    label: "To Do",
    data:todoTasks
  },
  {
    id:2,
    label: "In Progress",
    data: inProgressTasks
  },
  {
    id:3,
    label: "In Review",
    data: inReviewTasks
  },
  {
    id:4,
    label: "Completed",
    data: completedTasks
  },

]
  return (
    <div className='flex justify-between max-h-160 min-h-100'>
      {CardOptions.map((items)=> {
        return <TaskCards data = {items} key={items.id}/>
      })}
    </div>
  )
}

export default DetailedTasksInformation