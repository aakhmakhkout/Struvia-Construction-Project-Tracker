import { X } from 'lucide-react'
import React from 'react'

export default function TeamForm({state}) {
const {setisATMformOpen, setisTeamModalOpen} = state
  return (
    <div className='absolute inset-0 bg-black/20 backdrop-blur-[2px] rounded-lg z-60'>
        <div className='flex  justify-center items-center h-full w-full'>
            <form className='w-[60%] h-[75%] bg-[#14202e] relative text-white p-4 CPCards flex flex-col items-center'>
            <div className='w-full h-[20%] flex justify-center items-center'>
                <h1 className='text-3xl font-bold'>Add New Team Member</h1>
            </div>
                 <button type='button' className='absolute top-2 right-2 cursor-pointer active:scale-95' onClick={()=> setisATMformOpen(false)}><X /></button>
                 
                 <div className='w-[95%] h-[70%] flex flex-col justify-between'>
                <div className='flex justify-between items-center'>
                    <div className='w-[47%] flex flex-col gap-1'>
                    <label htmlFor="tmName" className='text-white/80'>Full Name <span>*</span></label>
                    <input type="text" id="tmName" placeholder='Kaneki Ken' className='bg-black/30 cursor-text p-3 rounded-lg border border-white/30 outline-none'/>
                    </div>

                    <div className='w-[47%] flex flex-col gap-1'>
                    <label htmlFor="tmRole" className='text-white/80'>Role <span>*</span></label>
                    <input type="text" placeholder='Electrical Engineer' className='bg-black/30 cursor-text p-3 rounded-lg border border-white/30 outline-none'/>
                    </div>
                </div>

                    <div className='flex justify-between'>
                        <div className='w-[47%] flex flex-col gap-1'>
                            <label htmlFor="tmAddress" className='text-white/80'> Contact Number <span>*</span></label>
                            <input type="text" placeholder="+91 8825065077" className='bg-black/30 cursor-text p-3 rounded-lg border border-white/30 outline-none'/>
                        </div>
                        <div className='w-[47%] flex flex-col gap-1'>
                            <label htmlFor="tmAddress" className='text-white/80'> Email <span>*</span></label>
                            <input type="text" placeholder="kenkaneki@struvia.com" className='bg-black/30 cursor-text p-3 rounded-lg border border-white/30 outline-none'/>
                        </div>
                    </div>
                <div className='flex justify-between items-center'>
                    <div className='w-[30%] flex flex-col gap-1'>
                    <label htmlFor="tmStatus" className='text-white/80'>Status <span>*</span></label>
                    <select name="tmStatus" id="tmStatus" className='bg-black/30 p-3 rounded-lg border border-white/30 outline-none cursor-pointer'>
                        <option value="" disabled>Select team member's status</option>
                        <option value="Active">Active</option>
                        <option value="On Leave">On Leave</option>
                        <option value="In Active">In Active</option>
                    </select>
                    </div>
                    <div className='w-[30%] flex flex-col gap-1'>
                        <label htmlFor="tmPfp" className='text-white/80'>Upload Profile Photo <span>*</span></label>
                        <input type="file" name="tmPfp" id="tmPfp" className='bg-black/30 cursor-pointer p-3 rounded-lg border border-white/30 outline-none'/>
                    </div>
                        <div className='w-[30%] flex flex-col gap-1'>
                            <label htmlFor="tmAddress" className='text-white/80'>Address <span>*</span></label>
                            <input type="text" placeholder="Thane, Mumbai, India" className='bg-black/30 cursor-text p-3 rounded-lg border border-white/30 outline-none'/>
                        </div>
                </div>


                    <div>
                        <button type="submit" className='bg-[#7745a7] w-full py-3 rounded-lg cursor-pointer font-bold border border-white/20 active:scale-95'>Add Team Member</button>
                    </div>
                 </div>
            </form>
        </div>
    </div>
  )
}
