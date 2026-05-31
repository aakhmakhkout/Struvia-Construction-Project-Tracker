import React from 'react'
import logo from "../../../assets/logos.png"
import {House, Building, ClipboardCheck, Image, List} from "lucide-react"
import {useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import { setActiveTab } from '../../../redux/features/layoutSlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector(state => state.layout.activeTab)
  console.log(activeTab)
  const PageTabs =[
    {
      id: 1,
      icon: <House size={25} strokeWidth={1.5} />,
      title: "Dashboard",
      linkAddr: "/home/dashboard"
    },
    {
      id: 2,
      icon: <Building size={25} strokeWidth={1.5} />,
      title: "Projects",
      linkAddr: "/home/projects"
    },
    {
      id: 3,
      icon: <ClipboardCheck size={25} strokeWidth={1.5} />,
      title: "Tasks",
      linkAddr: "/home/tasks"
    },
    {
      id: 4,
      icon: <Image size={25} strokeWidth={1.5} />,
      title: "Photos",
      linkAddr: "/home/photos"
    },
    {
      id: 5,
      icon:<List size={25} strokeWidth={1.5} />,
      title: "Punch List",
      linkAddr: "/home/punchlist"    }
  ]
  return (
  <div className='bg-[#14202e] min-h-screen w-65 text-white p-4 flex flex-col justify-between'>
      <div className='flex flex-col gap-10'>
        <div className='flex gap-3'>
        <div className='w-20'>
          <img src={logo} alt="logo" />
        </div>

        <div className='flex flex-col'>
        <h1 className='text-white font-bold text-3xl'>Struvia</h1>
        <p className='text-[10px]'>Construction Project Tracker</p>
        </div>
        </div>
        
        <div className='flex flex-col gap-10'>
        {PageTabs.map((items)=> {
          return <div key={items.id} >
            <Link to={items.linkAddr} className={`${activeTab === items.title ? "bg-[#7745a7] rounded-lg border border-white/20" : null} flex w-[80%] py-2 px-5 items-center gap-3`} onClick={()=> {
              dispatch(setActiveTab(items.title))
            }}>
            <div>{items.icon}</div>
            <div>{items.title}</div>
            </Link>
          </div>
        })}
      </div>
    </div>

    <div className='mb-20'>
      <h1>Project Progress</h1>
      <p>58%</p>
      
      <div>
        <h1>End Date</h1>
        <p>20 aug, 2026</p>
      </div>
    </div>
    </div>
  )
}

export default Sidebar