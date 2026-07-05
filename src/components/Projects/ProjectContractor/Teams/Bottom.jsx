import {ChevronLeft, ChevronRight} from 'lucide-react'
export default function Bottom({data}) {
  const teamLength = data.length
  return (
    <div className='flex justify-between border-t border-black/20 pt-3'>
      <div>
        <h1 className='text-sm font-bold text-black/60'>Showing {teamLength > 0 ? 1 : 0} to 8 of {teamLength} team members </h1>
      </div>
       <div className="flex gap-5 items-center">
          <div className="CPCardsBtns border border-black/20 rounded-sm bg-[#5d7bdf27]">
          <ChevronLeft size={20} strokeWidth={1.5} />
          </div>
          <div><h1 className="text-[#e55707] border border-[#e55707] px-2 rounded-sm CPCardsBtns text-sm">1</h1></div>
          <div className="CPCardsBtns border border-black/20 rounded-sm bg-[#5d7bdf27]">
          <ChevronRight size={20} strokeWidth={1.5} />
          </div>
        </div>
    </div>
  )
}
