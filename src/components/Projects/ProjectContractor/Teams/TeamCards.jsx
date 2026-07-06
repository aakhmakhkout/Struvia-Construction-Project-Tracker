import { useSelector } from "react-redux"
import { EllipsisVertical, MapPin, Phone, Mail, UserRoundPlus } from "lucide-react"
import { useState } from "react"
import Actions from "./Actions"

export default function TeamCards({AddtmState}) {
  console.log(AddtmState)
  const {setisATMformOpen} = AddtmState
  const teamMembersData = useSelector(state => state.teams.teamsMembers)
  console.log(teamMembersData)
  const teamMembersDataCopy = [...teamMembersData]
  const [isOptionsID, setisOptionsID] = useState(null)
  return (
    <div className='flex gap-4 flex-wrap min-h-50'>
      {teamMembersDataCopy.length > 0 ? teamMembersDataCopy.reverse().map((items, idx)=> {
        return <div key={items.UUID} className="relative flex flex-col border border-black/20 CPCards p-3 w-70 h-60 justify-between">
          <button className="absolute right-3 top-3 cursor-pointer" onClick={()=> {
            if(isOptionsID === idx) {
              setisOptionsID(null)
            }
            else {
              setisOptionsID(idx)
            }
          }}><EllipsisVertical size={20} strokeWidth={1.5} /></button>
          <div>
            {isOptionsID === idx ? <Actions state ={{setisOptionsID}} tmData = {items} ATMState = {{setisATMformOpen}}/> : null}
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-15 rounded-full overflow-hidden">
              <img src={items.url} alt="img" />
            </div>
            <div>
              <h1 className="font-bold text-xl capitalize">{items.tmName}</h1>
              <h2 className="text-black/70 capitalize text-sm">{items.tmRole}</h2>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <p className={`p-[5px_20px] rounded-full font-bold ${items.tmStatus === "Active" ? "text-[green] bg-[#00800021]" : items.tmStatus === "On Leave" ? "text-[#db9619] bg-[#db971923]" : items.tmStatus === "Inactive" ? "bg-[#ff00001f] text-[#de0000]" : null}`}>{items.tmStatus}</p>
          </div>

          <div className="flex flex-col gap-3 text-black/70 text-sm"> 
            <div className="flex gap-2 items-center">
              <div><MapPin size={18} strokeWidth={1.5} /></div>
              <p>{items.tmAddress}</p>
            </div>
            <div className="flex gap-2 items-center">
              <div><Phone size={18} strokeWidth={1.5} /></div>
              <p>{items.tmContact}</p>
            </div>
            <div className="flex gap-2 items-center">
              <div><Mail size={18} strokeWidth={1.5} /></div>
              <p>{items.tmEmail}</p>
            </div>
          </div>
        </div>
      })
      :
      <button className="bg-[#dedaf29e] flex flex-col w-70 h-60 cursor-pointer justify-center items-center gap-3 rounded-xl border border-dashed border-[#0000ff5c] active:scale-95 hover:bg-[#d4ccfbc8] transition-all ease-in" onClick={()=> {
        setisATMformOpen(true)
      }
    }>
        <div className="text-[#7745a7]"><UserRoundPlus size={48} strokeWidth={1.5} /></div>
        <h1 className="font-bold text-xl text-[#7745a7]">Add Team Member</h1>
        <p className="w-[50%] text-sm text-black/70">Click to add a new team member</p>
      </button>
    }
    </div>
  )
}
