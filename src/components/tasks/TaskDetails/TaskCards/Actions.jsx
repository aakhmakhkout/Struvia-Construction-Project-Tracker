import { ChevronRight, Plus, BatteryMedium, Delete, SquarePen,  Trash2} from "lucide-react"
import { setRemoveToDoTask, setInProgressTask, setRemoveInProgTask, setInReviewTasks, setRemoveInRevTasks, setCompletedTasks, setRemoveCompTasks } from "../../../../redux/features/tasksSlice"
import { useDispatch } from "react-redux"



const Actions = ({data, id, state}) => {
  const {setisOptionsID} = state
  const dispatch = useDispatch()
  let label = null
  if(data === "To Do") {
    label = "Progress"
  }
  else if (data === "In Progress") {
    label = "Review"
  }
  else if(data === "In Review") {
    label = "Completed"
  }
  else {
    label = null
  }

  const actionsMenuData = [
    {
      id: 1,
      option: label 
    }
  ]

  const handleRemoveDispatch = (id, column) => {
    if(column === "To Do") {
      dispatch(setRemoveToDoTask(id))
    }
    else if(column === "In Progress") {
      dispatch(setRemoveInProgTask(id))
    }
    else if(column === "In Review") {
      dispatch(setRemoveInRevTasks(id))
    }
    else if(column === "Completed") {
      dispatch(setRemoveCompTasks(id))
    }
  }

  const handleAddDispatch = (id, column) => {
    if(column === "To Do") {
      dispatch(setInProgressTask(id))
      dispatch(setRemoveToDoTask(id))
    }
    else if(column === "In Progress") {
      dispatch(setInReviewTasks(id))
      dispatch(setRemoveInProgTask(id))
    }
    else if(column === "In Review") {
      dispatch(setCompletedTasks(id))
      dispatch(setRemoveInRevTasks(id))
    }
  }

  return (
    <div className='w-50 bg-[#e7f0fa] text-black absolute right-2 rounded-lg flex z-10 CPCards border border-black/20'>
        <div className='p-2 flex flex-col justify-start items-start w-full gap-1'>
          {data !== "Completed" ? <button className="flex justify-between items-center w-full cursor-pointer" onClick={()=> {
            handleAddDispatch(id, data)
            setisOptionsID(null)
          }}>
            <div className="flex gap-3 items-center">
            <div><Plus size={15} strokeWidth={1.25} /></div>
            <h1>Add to {label}</h1>
            </div>

            <div><ChevronRight size={15} strokeWidth={1.25} /></div>
          </button> : null}

          <div className="w-full cursor-pointer">
          {data === "In Progress" ? 
          <button className="flex justify-between w-full items-center">
            <div className="flex gap-3 items-center">
            <div><BatteryMedium size={15} strokeWidth={1.25} /></div>
            <h1>Set Progress</h1>
            </div>
            <div><ChevronRight size={15} strokeWidth={1.25} /></div>
            </button>
            : data === "In Review" ? 
            <button className="flex justify-between w-full items-center">
              <div className="flex gap-3 items-center">
             <div>
               <Delete size={15} strokeWidth={1.25} />
              </div>
              <h1>Reject</h1>
              </div>
              <div><ChevronRight size={15} strokeWidth={1.25} /></div>
            </button>
            : null}
          </div>

          <button className="flex justify-between items-center w-full cursor-pointer">
            <div className="flex gap-3 items-center">
            <div><SquarePen size={15} strokeWidth={1.25} /></div>
            <h1>Edit</h1>
            </div>
          <div><ChevronRight size={15} strokeWidth={1.25} /></div>
          </button>

          <button className="flex w-full justify-between items-center cursor-pointer" onClick={()=> {
                 handleRemoveDispatch(id, data)
                 setisOptionsID(null)
              }}>
            <div className="flex gap-3 items-center">
              <div><Trash2 size={15} strokeWidth={1.25} /></div>
              <h1 className="cursor-pointer">Delete</h1>
            </div>
          <div><ChevronRight size={15} strokeWidth={1.25} /></div>
          </button>
        </div>    
    </div>
  )
}

export default Actions