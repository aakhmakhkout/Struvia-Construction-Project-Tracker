import { useSelector } from "react-redux"
import { userData } from "../../../data/usersData"
import { useState } from "react"
import { Bell } from "lucide-react"

const Navbar = () => {
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
      <div className='flex justify-between w-full bg-[#eae9f0] h-15 items-center px-10'>

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

          <div>
           <div className="flex relative">
            {userData.map((items)=> {
              return <div key={items.id} className="flex">
                {items.role === role ? <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden"><img src={items.pfp} alt="pfp" className="object-cover object-center w-10 h-10" /></div>
                  <div>
                  <h1 className="text-xl font-bold">{items.name}</h1>
                  <h2 className="text-sm text-black/70">{items.role}</h2>
                  </div>
                </div>: null}
              </div>
            })}
            <div className="absolute -bottom-15 bg-black/20 w-30 h-13">
            {userData.map((items)=> {
              if (items.role !== role) {
                return <ul key={items.id}>
                <li>{items.role}</li>
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