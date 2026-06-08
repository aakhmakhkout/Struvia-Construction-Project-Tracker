import { useDispatch, useSelector } from "react-redux"
import { userData } from "../../../data/usersData"
import { useState } from "react"
import { Bell, ChevronDown } from "lucide-react"
import { setUser } from "../../../redux/features/authSlice"
import { getRole } from "../../../redux/features/authSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  const [showHidden, setshowHidden] = useState("hidden")
  let proStatusClass = null
  let {activeTab} = useSelector(state => state.layout)
  const {role} = useSelector(state => state.auth)
  const {status, ProjectName} = useSelector(state => state.dashboard)
 console.log(role)


  if(status === "Pending") {
    proStatusClass = "statusPending"
  }
  else if(status === "In Progress") {
    proStatusClass = "statusInProgress"
  }
  else {
    proStatusClass = "statusCompleted"
  }

  return (
    <div>
      <div className='flex justify-between w-full navbar h-15 items-center px-10 relative'>

        <div className='flex gap-10 items-center'>
          <div className="text-xl font-bold">
            {activeTab === "Dashboard" ? <h1>{ProjectName}</h1>: activeTab}
          </div>
        {activeTab === "Dashboard" ? <div className="">
            <h1 className={proStatusClass}>{status}</h1>
          </div> : null}
        </div>

        <div className='flex gap-10 items-center'>
          <div className="relative">
            <button><Bell size={30} strokeWidth={1.5} /></button>
            <div className="absolute -top-2 -right-1 w-5 h-5 bg-[#fa3f06] rounded-full flex items-center justify-center text-sm text-white ">

              <span className=" ">0</span>
            </div>
          </div>

          <div className="w-60 h-15">
           <div className="flex absolute top-0 right-4 flex-col w-60 z-10">
            {userData.map((items)=> {
              return <div key={items.id}>
                {items.role === role ? <div className="flex items-center h-15 justify-evenly" onLoad={()=> {
                {dispatch(setUser(items.name))}
                }}>
                <div className="flex  gap-3 items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden"><img src={items.pfp} alt="pfp" className="object-cover object-center w-10 h-10" /></div>
                  <div>
                  <h1 className="text-xl font-bold">{items.name}</h1>
                  <h2 className="text-sm text-black/70">{items.role}</h2>
                  </div>
                </div>
                  <div className="flex items-end"><button onClick={()=> {
                    showHidden === "hidden" ? setshowHidden("flex") : setshowHidden("hidden")
                  }} className="cursor-pointer"><ChevronDown size={28} strokeWidth={1.5} /></button></div>
                </div>: null}
              </div>
            })}
            <div className={`bg-[#f0f5ff] ${showHidden} flex-col gap-2 py-3 rounded-b-xl items-center w-60 NavToggle`}>
            {userData.map((items)=> {
              if (items.role !== role) {
                return <ul key={items.id}>
                <li><button className="font-bold bg-[#7745a7] text-white w-30 py-1 rounded-md cursor-pointer" onClick={()=> {
                  dispatch(getRole(items.role))
                }}>{items.role}</button></li>
               </ul>
              }
            })}
            </div>
            </div>
           </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar