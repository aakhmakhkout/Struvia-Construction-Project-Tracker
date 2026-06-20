import {CloudUpload} from "lucide-react"

const PhotoTabs = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-5'>
      <div className='border border-black/30 p-[5px_15px] font-bold rounded-sm'>All Projects</div>
      <div className='border border-black/30 p-[5px_15px] font-bold rounded-sm'>All Locations</div>
      <div className='border border-black/30 p-[5px_15px] font-bold rounded-sm'>Search Bar</div>
      </div>

      <div>
        <button className='bg-[#e55707] p-[10px_15px] text-white  rounded-lg flex gap-2 items-center'>
          <div><CloudUpload size={20} strokeWidth={1.5} /></div>
          <h1>Upload Photos</h1></button>
      </div>
    </div>
  )
}

export default PhotoTabs