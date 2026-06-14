import {X} from 'lucide-react'
const NewTask = ({state}) => {
    const {setisNTP} = state
  return (
    <div className='fixed inset-0 bg-black/20 backdrop-blur-[2px] z-50 flex justify-center items-center text-white'>
        <div className='w-full flex items-center justify-center'>
          <form className='relative bg-[#14202e] w-[40%] CPCards border border-white p-5 flex flex-col justify-evenly h-170'>
          
          <div className='absolute top-5 right-5'>
            <button onClick={()=> {
              setisNTP(false)
            }} className='cursor-pointer active:scale-95 text-[#e55707]'><X size={25} strokeWidth={1.5} /></button>
          </div>

          <div className='flex justify-center items-center' >
            <h1 className='font-bold text-4xl'>Create Task</h1>
          </div>

            <div className='flex justify-between '>
              <div className='flex flex-col w-[60%] gap-2'>
                <label htmlFor="Task" className=' text-white/70 font-bold'>Task <span className='text-red-500'>*</span></label>
                <input type="text" placeholder='write your task here' className='bg-black/30 p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765]'/>
              </div>
              <div className='flex flex-col w-[35%] gap-2'>
                <label htmlFor="PName" className=' text-white/70 font-bold'>Project Name <span className='text-red-500'>*</span></label>
                <select name="PName" id="PName" className='bg-black/30 p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765] font-bold'>
                  <option value="skyvilla">Skyline Villa</option>
                  <option value="skyvilla">Skyline Villa</option>
                  <option value="skyvilla">Skyline Villa</option>
                  <option value="skyvilla">Skyline Villa</option>
                </select>
              </div>
            </div>

            <div className='flex justify-between '>
              <div className='flex flex-col w-[30%] gap-2'>
                <label htmlFor="team" className=' text-white/70 font-bold'>Select team member <span className='text-red-500'>*</span></label>
                <select name="team" id="team" className='bg-black/30 p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765] font-bold'>
                  <option value="worker 1">worker1</option>
                  <option value="worker 2">worker2</option>
                  <option value="worker 3">worker3</option>
                </select>
              </div>
              <div className='flex flex-col w-[30%] gap-2'>
                <label htmlFor="priority" className='font-bold text-white/70'>Select Priority <span className='text-red-500'>*</span></label>
                <select name="priority" id="priority" className='bg-black/30 p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765] font-bold'>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className='flex flex-col w-[30%] gap-2'>
                <label htmlFor="date" className='font-bold text-white/70'>Date <span className='text-red-500'>*</span></label>
                <input type="date" name="date" id="date" className='bg-black/30 p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765]'/>
              </div>
               
            </div>

         
               <div className='flex flex-col w-full gap-2'>
                <label htmlFor="comment" className='font-bold text-white/70'>Comment (Optional)</label>
                <textarea name="comment" id="comment" placeholder='write any comment' className='bg-black/30 p-3 rounded-lg border h-40 border-white/30 outline-none resize-none focus:border-[#7845a765]'></textarea>
              </div>
             

            <div className='w-full flex justify-center items-end'>
              
              <button className='bg-[#7745a7] w-full py-3 rounded-lg font-bold border border-white/20'>Add Task</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default NewTask