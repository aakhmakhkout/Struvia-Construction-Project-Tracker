import {ChevronLeft, ChevronRight} from "lucide-react"

const CPPagination = () => {
  return (
    <div className="flex justify-between">
        <div>
          <p className="text-sm text-black/70 font-bold">Showing 1 to 4 of 7 Projects</p>
        </div>

        <div className="flex gap-5">
          <div className="CPCardsBtns border border-black/20 rounded-sm bg-[#5d7bdf27]">
          <ChevronLeft size={25} strokeWidth={1.5} />
          </div>
          <div><h1 className="text-[#e55707] border border-[#e55707] px-2.5 rounded-sm CPCardsBtns">1</h1></div>
          <div className="CPCardsBtns border border-black/20 rounded-sm bg-[#5d7bdf27]">
          <ChevronRight size={25} strokeWidth={1.5} />
          </div>
        </div>
      </div>
  )
}

export default CPPagination