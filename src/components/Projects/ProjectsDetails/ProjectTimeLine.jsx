import {useSelector} from "react-redux"

const ProjectTimeLine = () => {
  const projectTimelineData = useSelector(state => state.dashboard.recentActivites)
  console.log(projectTimelineData)
  const upcomingEvents = useSelector(state => state.dashboard.upcomingTasks)
  console.log(upcomingEvents)
  return (
   
    <div className='CPCards p-3 flex w-full justify-between  my-10 border border-black/20'>

      <div className="w-[60%] flex flex-col gap-5">
        <div><h1 className="text-2xl font-bold">Project Timeline</h1></div>
        <div className="CPCards p-1 border border-black/20">
          <ul className="flex flex-col gap-5">
            {projectTimelineData.map((items)=> {
              return <li key={items.id} className="flex justify-between border border-black/20 p-2 rounded-lg items-center">
                <div className="flex gap-5">
                <div className="w-18 rounded-lg overflow-hidden"><img src={items.img} alt="img" /></div>
                <div>
                  <h1 className="font-bold text-lg">{items.activity}</h1>
                  <p className="text-black/70 text-sm">{items.subtitle}</p>
                </div>
                </div>

                <div>
                  <h1 className="text-black/70">{items.time}</h1>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>


      <div className="w-[38%] flex flex-col gap-5">
        <div><h1 className="text-2xl font-bold">Upcoming Events</h1></div>
        <div className="flex border border-black/20 p-1 CPCards">
        <ul className="flex flex-col w-full gap-5">
          {upcomingEvents.map((items)=> {
            return <li key={items.id} className="flex justify-between border border-black/20 p-2 rounded-lg">
              <div>
                <h1 className="text-lg font-bold">{items.task}</h1>
                <p className="text-sm text-black/70">{items.subtitle}</p>
              </div>
              <div className="w-[20%]">
                <p className="font-bold">{items.date}</p>
                <p className="text-sm text-black/70">{items.time}</p>
              </div>
            </li>
          })}
        </ul>
          </div>
      </div>

    </div>
  )
}

export default ProjectTimeLine