import { useSelector } from "react-redux"


const UpcomingTasks = () => {
  const upcomingTasksData = useSelector(state => state.dashboard.upcomingTasks)
  return (
    <div className='w-[45%] activityfeed py-3 px-5 flex flex-col gap-5'>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Upcoming Tasks</h1>
        <button className="text-[#ff4800] text-sm">View All</button>
      </div>
      {upcomingTasksData.map((items, idx)=> {
        return <div key={idx} className="flex justify-between">
          <div className="flex gap-3">
           <div>
            <h1 className="font-bold mb-1">{items.task}</h1>
            <p className="text-sm text-black/60">{items.subtitle}</p>
           </div>
          </div>
          <div className="flex flex-col w-20">
           <div className="font-bold">{items.date}</div>
           <div className="text-black/60 text-sm">{items.time}</div>
          </div>
        </div>
      })}
    </div>
  )
}

export default UpcomingTasks