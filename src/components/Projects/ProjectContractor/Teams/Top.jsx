import {Users, X} from 'lucide-react'
import { useState } from 'react'
import TeamForm from './TeamForm'

export default function Top({teamsModalState, AddtmState}) {
    const {setisTeamModalOpen} = teamsModalState
    const {isATMformOpen, setisATMformOpen} = AddtmState
    
  return (
    <div className='flex flex-col'>
        <button className='absolute right-3 cursor-pointer active:scale-95' onClick={()=> setisTeamModalOpen(false)}><X /></button>
        <div className='flex gap-5 border-b border-black/20 items-center h-30'>
            <div className='text-[#7745a7] bg-[#7845a726] p-3 rounded-xl'><Users size={35} strokeWidth={2} /></div>
            <div>
            <h1 className='text-4xl font-bold'>Teams</h1>
            <p className='text-sm text-black/70'>Manage team members here</p>
            </div>
        </div>

        <div className='flex justify-between h-20 items-center'>
            <div className='flex gap-5'>
            <div className='border border-black/30 p-[8px_30px] rounded-lg'>Search Bar</div>
            <div className='border border-black/30 p-[8px_30px] rounded-lg'>Status</div>
            </div>

            <div>
                <button className='bg-[#e55707] text-white p-[8px_20px] rounded-lg font-bold cursor-pointer active:scale-95' onClick={()=> {
                    setisATMformOpen(true)
                }}>+ Add Team Member</button>
            </div>
            {isATMformOpen && <TeamForm state={{setisATMformOpen}} whichPage = {"topPage"} teamData = {{}}/>}
        </div>

    </div>
  )
}
