import React from 'react'

const DetailedTasksInformation = () => {
  const todoTasks = [
  {
    id: 1,
    task: "Kitchen Cabinet Installation",
    projectName: "Skyline Villa",
    assignee: "Eren Yeager",
    date: "2026-06-12",
    priority: "High",
  },
  {
    id: 2,
    task: "Electrical Wiring Setup - First Floor",
    projectName: "Green Heights Residency",
    assignee: "Isagi Yoichi",
    date: "2026-06-14",
    priority: "Medium",
  },
  {
    id: 3,
    task: "Bathroom Tile Finishing",
    projectName: "Tech Park Tower",
    assignee: "Nagi Seishiro",
    date: "2026-06-15",
    priority: "High",
  },
  {
    id: 4,
    task: "Site Safety Inspection",
    projectName: "Riverside Mall",
    assignee: "Team Alpha",
    date: "2026-06-18",
    priority: "Low",
  },
]
const inProgressTasks = [
  {
    id: 1,
    task: "Roof Beam Installation",
    projectName: "Skyline Villa",
    assignee: "Eren Yeager",
    date: "2026-06-11",
    priority: "High",
    progress: 35,
    status: "In Progress",
  },
  {
    id: 2,
    task: "Lobby Interior Painting",
    projectName: "Green Heights Residency",
    assignee: "Team Bravo",
    date: "2026-06-12",
    priority: "Medium",
    progress: 60,
    status: "In Progress",
  },
  {
    id: 3,
    task: "Plumbing Line Inspection",
    projectName: "Tech Park Tower",
    assignee: "Nagi Seishiro",
    date: "2026-06-13",
    priority: "Low",
    progress: 80,
    status: "Waiting Approval",
  },
  {
    id: 4,
    task: "Parking Area Paving",
    projectName: "Riverside Mall",
    assignee: "Isagi Yoichi",
    date: "2026-06-15",
    priority: "High",
    progress: 45,
    status: "In Progress",
  },
  {
    id: 5,
    task: "External Glass Panel Fitting",
    projectName: "Sunrise Township",
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
    task: "Electrical Wiring Installation",
    projectName: "Skyline Villa",
    assignee: "Eren Yeager",
    date: "2026-06-16",
    priority: "High",
    status: "In Review",
  },
  {
    id: 2,
    task: "Main Entrance Tile Finishing",
    projectName: "Green Heights Residency",
    assignee: "Team Alpha",
    date: "2026-06-18",
    priority: "Medium",
    status: "In Review",
  },
  {
    id: 3,
    task: "Fire Safety Equipment Inspection",
    projectName: "Tech Park Tower",
    assignee: "Nagi Seishiro",
    date: "2026-06-20",
    priority: "High",
    status: "In Review",
  },
];

const completedTasks = [
  {
    id: 1,
    task: "Foundation Excavation and Concrete Work",
    projectName: "Skyline Villa",
    assignee: "Team Alpha",
    date: "2026-05-12",
  },
  {
    id: 2,
    task: "Ground Floor Electrical Wiring",
    projectName: "Green Heights Residency",
    assignee: "Eren Yeager",
    date: "2026-05-28",
  },
  {
    id: 3,
    task: "Parking Area Drainage Installation",
    projectName: "Riverside Mall",
    assignee: "Isagi Yoichi",
    date: "2026-06-02",
  },
  {
    id: 4,
    task: "Main Lobby Interior Painting",
    projectName: "Tech Park Tower",
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
  return (
    <div className='flex justify-between h-160'>
      <div className='CPCards w-[24%] overflow-y-scroll taskBoxes border border-black/20'>
        <div className='flex w-full bg-[#d0d1d2] h-10 items-center pl-3 gap-5 sticky top-0 backdrop-blur-2xl'>
          <h1 className='font-bold text-xl'>To Do</h1>
          <p>6</p>
        </div>

        <div className='flex flex-col gap-3 p-2 '>
        {todoTasks.map((items)=> {
          return <div key={items.id} className='flex flex-col CPCards p-2 border border-black/20 gap-2'>
            <div className=''>
            <h1 className='text-lg font-bold'>{items.task}</h1>
            <p className='text-black/70 text-sm'>{items.projectName}</p>
            </div>
            <div className='flex gap-2 font-bold'>
              <div>icon</div>
              <h2>{items.assignee}</h2>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-2'>
              <p>icon</p>
              <div>
                {items.date}
                </div>
              </div>
              <div>
              <p style={items.priority === "High" ? {color: "#EF4444", backgroundColor: "#FEE2E2"}: items.priority === "Medium" ? {color: "#F59E0B", backgroundColor: "#FEF3C7"}: {color: "#10B981", backgroundColor: "#D1FAE5"}} className='p-[3px_10px] rounded-lg'>{items.priority}</p>
              </div>
            </div>
          </div>
        })}
        <div>
          <p className='text-[#e55707] font-bold'>+ Add Task</p>
        </div>
        </div>
      </div>

      <div className='CPCards w-[24%]  border border-black/20 overflow-y-scroll taskBoxes'>
          <div className='flex w-full bg-[#19147718] h-10 items-center pl-3 gap-5 sticky top-0 backdrop-blur-2xl'>
          <h1 className='font-bold text-xl'>In Progress</h1>
          <p>5</p>
        </div>

        <div className='flex flex-col gap-3 p-2 '>
        {inProgressTasks.map((items)=> {
          return <div key={items.id} className='flex flex-col CPCards p-2 border border-black/20 gap-2'>
            <div className=''>
            <h1 className='text-lg font-bold'>{items.task}</h1>
            <p className='text-black/70 text-sm'>{items.projectName}</p>
            </div>
            <div className='flex gap-2 font-bold'>
              <div>icon</div>
              <h2>{items.assignee}</h2>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-2'>
              <p>icon</p>
              <div>{items.date}</div>
              </div>
              <div>
              <p style={items.priority === "High" ? {color: "#EF4444", backgroundColor: "#FEE2E2"}: items.priority === "Medium" ? {color: "#F59E0B", backgroundColor: "#FEF3C7"}: {color: "#10B981", backgroundColor: "#D1FAE5"}} className='p-[3px_10px] rounded-lg'>{items.priority}</p>
              </div>
            </div>
            <div>{items.progress}</div>
          </div>
        })}
        <div>
          <p className='text-[#e55707] font-bold'>+ Add Task</p>
        </div>
        </div>
      </div>

       <div className='CPCards w-[24%] overflow-y-scroll taskBoxes border border-black/20'>
          <div className='flex w-full bg-[#f1e86849] h-10 items-center pl-3 gap-5 sticky top-0 backdrop-blur-2xl'>
          <h1 className='font-bold text-xl'>In Review</h1>
          <p>5</p>
        </div>

        <div className='flex flex-col gap-3 p-2'>
        {inReviewTasks.map((items)=> {
          return <div key={items.id} className='flex flex-col CPCards p-2 border border-black/20 gap-2'>
            <div className=''>
            <h1 className='text-lg font-bold'>{items.task}</h1>
            <p className='text-black/70 text-sm'>{items.projectName}</p>
            </div>
            <div className='flex gap-2 font-bold'>
              <div>icon</div>
              <h2>{items.assignee}</h2>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-2'>
              <p>icon</p>
              <div>{items.date}</div>
              </div>
              <div>
              <p style={items.priority === "High" ? {color: "#EF4444", backgroundColor: "#FEE2E2"}: items.priority === "Medium" ? {color: "#F59E0B", backgroundColor: "#FEF3C7"}: {color: "#10B981", backgroundColor: "#D1FAE5"}} className='p-[3px_10px] rounded-lg'>{items.priority}</p>
              </div>
            </div>
          </div>
        })}
        <div>
          <p className='text-[#e55707] font-bold'>+ Add Task</p>
        </div>
        </div>
      </div>

        <div className='CPCards w-[24%] overflow-y-scroll taskBoxes border border-black/20'>
          <div className='flex w-full bg-[#10800827] h-10 items-center pl-3 gap-5 sticky top-0 backdrop-blur-2xl'>
          <h1 className='font-bold text-xl'>Completed</h1>
          <p>4</p>
        </div>

        <div className='flex flex-col gap-3 p-2'>
        {completedTasks.map((items)=> {
          return <div key={items.id} className='flex flex-col CPCards p-2 border border-black/20 gap-2'>
            <div className=''>
            <h1 className='text-lg font-bold'>{items.task}</h1>
            <p className='text-black/70 text-sm'>{items.projectName}</p>
            </div>
            <div className='flex gap-2 font-bold'>
              <div>icon</div>
              <h2>{items.assignee}</h2>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-2'>
              <p>icon</p>
              <div>{items.date}</div>
              </div>
              <div>
              <p>{items.priority}</p>
              </div>
            </div>
            <div>{items.progress}</div>
          </div>
        })}
        <div>
           <p className='text-[#e55707] font-bold'>+ Add Task</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedTasksInformation