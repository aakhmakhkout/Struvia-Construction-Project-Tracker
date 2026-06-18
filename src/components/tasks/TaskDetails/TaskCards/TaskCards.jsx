import {Contact, CalendarDays, MessageSquareMore, EllipsisVertical} from "lucide-react"
import { useState } from "react";
import Actions from "./Actions";
const TaskCards = ({data}) => {
    // console.log(data)
    const isTaskPresent = data.data.length > 0;
    // console.log(isTaskPresent);
    const dataCopy = [...data.data]
    // console.log(dataCopy)

    let color = ""

    if(data.label === "To Do") {
        color = "bg-[#d0d1d2]"
    }
    else if(data.label === "In Progress") {
        color = "bg-[#19147718]" 
    }
    else if(data.label === "In Review") {
        color = "bg-[#f1e86849]"
    }
    else {
        color = "bg-[#10800827]"
    }

    const [isOptionsID, setisOptionsID] = useState(null)

    // const showHideOptions = (id, dtID) => {
    //   const targetID = parseInt(id)
    //   // console.log("target id", targetID)
    //   // console.log("dtid", dtID)
    //   // console.log("data id",data.id)
    
    //   if(data.id === dtID) {
    //     console.log(dataCopy)
    //     return dataCopy.forEach((items)=> {
    //       if(items.id === targetID && isOptions) {
    //         console.log(true)
    //         console.log("target id", targetID)
    //         console.log("id", items.id)
    //         setisTarget(true)
    //       }
    //       else {
    //         setisTarget(false)
    //       }
    //     })
    //   }
     
    // }

  return (
     <div className='CPCards w-[24%] overflow-y-scroll taskBoxes border border-black/20'>
        <div className={`flex w-full ${color} h-10 items-center pl-3 gap-5 sticky top-0 backdrop-blur-2xl`}>
          <h1 className='font-bold text-xl'>{data.label}</h1>
          <p className={`${color} w-7 h-7 flex justify-center items-center rounded-full text-lg font-bold`}>{data.data.length}</p>
        </div>

        <div className='flex flex-col gap-3 p-2 '>
        {dataCopy.reverse().map((items, idx)=> {
          return <div key={idx} className='flex flex-col CPCards p-2 border border-black/20 gap-2'>
            <div className='flex justify-between items-center'>
            <div>
            <h1 className='text-lg font-bold'>{items.Task}</h1>
            <p className='text-black/70 text-sm'>{items.PName}</p>
            </div>
            <div className="relative">
              <button className="cursor-pointer" onClick={()=> {
                    if(isOptionsID === items.id) {
                      setisOptionsID(null)
                    }
                    else {
                      setisOptionsID(items.id)
                    }
                  
              }}>
                <EllipsisVertical size={20} strokeWidth={1.5} id={items.id}/>
                </button>
               {isOptionsID === items.id ? <Actions /> : null}
              
            </div>
            </div>

            <div className='flex font-bold items-center justify-between'>
              <div className="flex items-center gap-2">
               <div><Contact size={15} strokeWidth={1.5} /></div>
              <h2>{items.assignee}</h2>
              </div>
              <div className="relative commentDiv cursor-pointer">
                <MessageSquareMore size={16} strokeWidth={2} />
                <div className={`max-w-55 max-h-25 p-2 hidden comments overflow-y-scroll bg-[#14202eb6] absolute -left-45 font-normal CPCards backdrop-blur-[1px] rounded-xl text-white`}>
                  {items.comment === undefined ? <p>No comment</p> : <p>{items.comment}</p>}
                </div>
              </div>
            </div>



            <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center'>
              <p><CalendarDays size={15} strokeWidth={1.5} /></p>
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
  )
}

export default TaskCards