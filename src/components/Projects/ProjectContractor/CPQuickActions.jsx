import React from 'react'

const CPQuickActions = () => {
   const projectHealthData = [
    {
      id: 1,
      img: "icon",
      label: "Create New Project",
      desc: "Add a new construction project"
    },
    {
      id: 2,
      img: "icon",
      label: "View Timeline",
      desc: "See project schedules"
    },
    {
      id: 3,
      img: "icon",
      label: "Add team member",
      desc: "Invite people to your project"
    },
    {
      id: 4,
      img: "icon",
      label: "Upload Photos",
      desc: "Upload site photos and updates"
    },

  ]
  return (
    <div className='w-[20%] CPCards p-3 flex flex-col gap-5'>
      <div>
        <h1 className='font-bold text-xl'>Quick Actions</h1>
      </div>

      <div className="flex flex-col gap-2">
        {projectHealthData.map((items)=> {
          return <div key={items.id} className="flex justify-between p-[10px_5px] items-center rounded-lg">
            <div className="flex gap-5 items-center">
              <div className="bg-black/20 w-10 h-10 flex items-center justify-center rounded-sm">{items.img}</div>
              <div>
                <h1 className="font-bold">{items.label}</h1>
                <h3 className="text-sm text-black/70">{items.desc}</h3>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default CPQuickActions