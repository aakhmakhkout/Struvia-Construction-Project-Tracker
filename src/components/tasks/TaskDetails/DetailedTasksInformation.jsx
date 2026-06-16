import {Contact, CalendarDays, MessageSquareMore, EllipsisVertical} from "lucide-react"
import { useSelector } from "react-redux";
import TaskCards from "./TaskCards/TaskCards";


const DetailedTasksInformation = () => {
 const todoTaskData = useSelector(state => state.tasks.todoTasks)
const inProgressTasks = [
  {
    id: 1,
    Task: "Roof Beam Installation",
    PName: "Skyline Villa",
    assignee: "Eren Yeager",
    date: "2026-06-11",
    priority: "High",
    progress: 35,
    status: "In Progress",
  },
  {
    id: 2,
    Task: "Lobby Interior Painting",
    PName: "Green Heights Residency",
    assignee: "Team Bravo",
    date: "2026-06-12",
    priority: "Medium",
    progress: 60,
    status: "In Progress",
  },
  {
    id: 3,
    Task: "Plumbing Line Inspection",
    PName: "Tech Park Tower",
    assignee: "Nagi Seishiro",
    date: "2026-06-13",
    priority: "Low",
    progress: 80,
    status: "Waiting Approval",
  },
  {
    id: 4,
    Task: "Parking Area Paving",
    PName: "Riverside Mall",
    assignee: "Isagi Yoichi",
    date: "2026-06-15",
    priority: "High",
    progress: 45,
    status: "In Progress",
  },
  {
    id: 5,
    Task: "External Glass Panel Fitting",
    PName: "Sunrise Township",
    assignee: "Team Alpha",
    date: "2026-06-17",
    priority: "Medium",
    progress: 70,
    status: "In Progress",
  },
];

const inReviewTasks = [
  {
    id: 1,
    Task: "Electrical Wiring Installation",
    PName: "Skyline Villa",
    assignee: "Eren Yeager",
    date: "2026-06-16",
    priority: "High",
    status: "In Review",
  },
  {
    id: 2,
    Task: "Main Entrance Tile Finishing",
    PName: "Green Heights Residency",
    assignee: "Team Alpha",
    date: "2026-06-18",
    priority: "Medium",
    status: "In Review",
  },
  {
    id: 3,
    Task: "Fire Safety Equipment Inspection",
    PName: "Tech Park Tower",
    assignee: "Nagi Seishiro",
    date: "2026-06-20",
    priority: "High",
    status: "In Review",
  },
];

const completedTasks = [
  {
    id: 1,
    Task: "Foundation Excavation and Concrete Work",
    PName: "Skyline Villa",
    assignee: "Team Alpha",
    date: "2026-05-12",
  },
  {
    id: 2,
    Task: "Ground Floor Electrical Wiring",
    PName: "Green Heights Residency",
    assignee: "Eren Yeager",
    date: "2026-05-28",
  },
  {
    id: 3,
    Task: "Parking Area Drainage Installation",
    PName: "Riverside Mall",
    assignee: "Isagi Yoichi",
    date: "2026-06-02",
  },
  {
    id: 4,
    Task: "Main Lobby Interior Painting",
    PName: "Tech Park Tower",
    assignee: "Nagi Seishiro",
    date: "2026-06-08",
  },
];
const priorityColors = {
  High: {
    text: "#EF4444",
    bg: "#FEE2E2",
  },
  Medium: {
    text: "#F59E0B",
    bg: "#FEF3C7",
  },
  Low: {
    text: "#10B981",
    bg: "#D1FAE5",
  },
};


const CardOptions = [
  {
    id:1,
    label: "To Do",
    data:todoTaskData
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
    <div className='flex justify-between h-160'>
      {CardOptions.map((items)=> {
        return <TaskCards data = {items} key={items.id}/>
      })}
    </div>
  )
}

export default DetailedTasksInformation