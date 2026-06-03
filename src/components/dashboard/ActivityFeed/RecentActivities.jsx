import { useSelector } from "react-redux"


const RecentActivities = () => {
  const recentActivitesData = useSelector(state => state.dashboard.recentActivites)
  return (
    <div className='w-[45%] activityfeed flex flex-col gap-5 py-3 px-5'>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Recent Activity</h1>
        <button className="text-[#ff4800] text-sm">View All</button>
      </div>
      {recentActivitesData.map((items, idx)=> {
        return <div key={idx} className="flex justify-between">
          <div className="flex gap-3">
           <div className="w-10 h-10 bg-black/20 flex items-center justify-center">
            {items.img}
           </div>
           <div>
            <h1 className="font-bold mb-1">{items.activity}</h1>
            <p className="text-sm text-black/60">{items.subtitle}</p>
           </div>
          </div>
           <div className="text-black/60 text-sm">{items.time}</div>
        </div>
      })}
    </div>
  )
}

export default RecentActivities