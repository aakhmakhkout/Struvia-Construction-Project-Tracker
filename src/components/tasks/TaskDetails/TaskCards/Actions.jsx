import { ChevronRight, Plus, BatteryMedium, Delete, SquarePen,  Trash2} from "lucide-react"
const Actions = ({data}) => {
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
  console.log(data)
  return (
    <div className='w-50 bg-[#e7f0fa] text-black absolute right-2 rounded-lg flex z-10 CPCards border border-black/20'>
        <ul className='p-2 flex flex-col justify-start items-start w-full gap-2'>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
            <div><Plus size={20} strokeWidth={1.25} /></div>
            <li>Add to {label}</li>
            </div>

            <div><ChevronRight size={20} strokeWidth={1.25} /></div>
          </div>
          <div>


          {data === "In Progress" ? 
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-2 items-center">
            <div><BatteryMedium size={20} strokeWidth={1.25} /></div>
            <li>Set Progress</li>
            </div>
            <div><ChevronRight size={20} strokeWidth={1.25} /></div>
            </div>
            : data === "In Review" ? 
            <div className="flex justify-between w-full items-center">
              <div className="flex gap-2 items-center">
             <div>
               <Delete size={20} strokeWidth={1.25} />
              </div>
              <li>Reject</li>
              </div>
              <div><ChevronRight size={20} strokeWidth={1.25} /></div>
            </div>
            : null}
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
            <div><SquarePen size={20} strokeWidth={1.25} /></div>
          <li>Edit</li>
            </div>
          <div><ChevronRight size={20} strokeWidth={1.25} /></div>
          </div>

          <div className="flex w-full justify-between items-center">
            <div className="flex gap-2 items-center">
              <div><Trash2 size={20} strokeWidth={1.25} /></div>
              <li>Delete</li>
            </div>
          <div><ChevronRight size={20} strokeWidth={1.25} /></div>
          </div>
        </ul>    
    </div>
  )
}

export default Actions