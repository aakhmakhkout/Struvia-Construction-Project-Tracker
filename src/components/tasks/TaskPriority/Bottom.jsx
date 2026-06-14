import React from 'react'

const Bottom = () => {
    const priorities =[
        {
            id:1,
            label : "High",
            desc: "Critical tasks that need immediate attention"
        },
        {
            id:2,
            label : "Medium",
            desc: "Important Tasks with normal priority"
        },
        {
            id:3,
            label : "Low",
            desc: "Tasks with lower priority"
        },
    ]
  return (
    <div className='h-30 flex  gap-10 items-center '>
        <div className='flex flex-col w-[65%] CPCards p-3 border border-black/20 gap-2'>
            <div>
                <h1 className='font-bold text-lg'>Task Priority</h1>
            </div>
            <div className='flex justify-between'>
            {priorities.map((items)=> {
                return <div key={items.id} className='flex gap-5 items-center'>
                    <h1 style={items.label === "High" ? {color: "#EF4444", backgroundColor: "#FEE2E2"}: items.label === "Medium" ? {color: "#F59E0B", backgroundColor: "#FEF3C7"}: {color: "#10B981", backgroundColor: "#D1FAE5"}} className='p-[3px_10px] rounded-lg text-sm font-bold'>{items.label}</h1>
                    <h2 className='font-bold text-black/70 text-sm'>{items.desc}</h2>
                </div>
            })}
            </div>
        </div>

        <div className='w-[25%]'>
            <div className='CPCards p-3 border border-black/20 flex flex-col gap-2'>

            <div><h1 className='font-bold text-lg'>Task Progress</h1></div>
            <div className='flex justify-between'>
                <p className='text-sm'>progress bar</p>
                <h1 className='text-sm font-bold text-black/70'>Track progress of tasks in "In Progress"</h1>
            </div>
        </div>
            </div>
    </div>
  )
}

export default Bottom