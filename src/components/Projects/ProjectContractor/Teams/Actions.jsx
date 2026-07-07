import { ChevronRight, ListTodo, BatteryMedium, Delete, SquarePen,  Trash2} from "lucide-react"
import { useDispatch } from "react-redux"
import supabase from "../../../../lib/supabase"
import { removeTeamMember } from "../../../../redux/features/teamsSlice"
import { useState } from "react"
import NewTask from "../../../tasks/CreateTask/NewTask"
import TeamForm from "./TeamForm"


const Actions = ({state, tmData, ATMState}) => {
  const {setisOptionsID} = state
  const dispatch = useDispatch()

  const handleRemoveUser = async ()=> {
    const {data, error} = await supabase.storage.from("struvia-media").remove([tmData.path])
    if(error) {
        return
    }
    dispatch(removeTeamMember(tmData.UUID))
    setisOptionsID(null)
  }

  const [isNTP, setisNTP] = useState(false)
  const [isATMformOpen, setisATMformOpen] = useState(false)
 


  return (
    <div className='w-50 bg-[#e7f0fa] text-black absolute right-2 top-10 rounded-lg flex z-10 CPCards border border-black/20'>
        <div className='p-2 flex flex-col justify-start items-start w-full gap-2'>
         <button className="flex justify-between items-center w-full cursor-pointer" onClick={()=> {
          setisNTP(true)
         }}>
            <div className="flex gap-3 items-center">
            <div><ListTodo size={15} strokeWidth={1.5} /></div>
            <h1>Assign Task</h1>
            </div>
            <div><ChevronRight size={15} strokeWidth={1.25} /></div>
          </button>

          {isNTP && <NewTask state={{setisNTP}} teamMember = {tmData.tmName} whichPage = {"teamsPage"}/>}


          <button className="flex justify-between items-center w-full cursor-pointer" onClick={()=> {
            setisATMformOpen(true)
          }}>
            <div className="flex gap-3 items-center">
            <div><SquarePen size={15} strokeWidth={1.25} /></div>
            <h1>Edit</h1>
            </div>
          <div><ChevronRight size={15} strokeWidth={1.25} /></div>
          </button>
          
          {isATMformOpen && <TeamForm state = {{setisATMformOpen}} whichPage = {"actionsPage"} teamData ={tmData}/>}

          <button className="flex w-full justify-between items-center cursor-pointer" onClick={handleRemoveUser}>
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