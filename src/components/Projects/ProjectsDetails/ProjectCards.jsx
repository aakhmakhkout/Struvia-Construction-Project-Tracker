import {EllipsisVertical, Contact, MapPin, CircleDashed} from "lucide-react"


const ProjectCards = ({data}) => {
  console.log(data)
  return (
    <div className="flex justify-between items-center">
     <div className="CPCards p-3 flex w-[60%] items-center justify-between">
      <div className="flex flex-col rounded-lg p-3 gap-3 w-[40%]">
        <h1 className="font-bold text-2xl">Project Details</h1>
        <div className="flex flex-col gap-5 p-3 CPCards  border-t border-black/20">
        <div className="flex gap-5 items-center">
          <p className="w-15 h-10 bg-black/20 flex items-center justify-center rounded-lg">img</p>
          <div>
            <h1 className="font-bold text-sm text-black/60">Project Name</h1>
            <h1 className="font-bold text-lg">Skyline Villa</h1>
          </div>
        </div>

        <div className="flex gap-5 items-center">
        <div className="w-15 flex justify-center bg-[#0000ff21] h-10 items-center rounded-lg text-[#6f00ff]"><Contact size={25} strokeWidth={1.5} /></div>
        <div>
        <h1 className="font-bold text-sm text-black/60">Contractor</h1>
        <h1 className="font-bold text-lg">Kaneki Ken</h1>
        </div>
        </div>

        <div className="flex gap-5 items-center">
        <div className="w-15 flex justify-center bg-[#ff88002d] text-[#ff8800] h-10 items-center rounded-lg"><MapPin size={25} strokeWidth={1.5} /></div>
        <div>
        <h1 className="font-bold text-sm text-black/60">Location</h1>
        <h1 className="font-bold text-lg">Somewhere in India</h1>
        </div>
        </div>

        <div className="flex gap-5 items-center">
        <div className="w-15 flex justify-center bg-[#00ff222c] text-[#0c5a05] h-10 items-center rounded-lg"><CircleDashed size={25} strokeWidth={1.5} /></div>
        <div>
        <h1 className="font-bold text-sm text-black/60">Status</h1>
        <h1 className="bg-[#51ff002d] p-[5px_15px] rounded-lg text-[#026602] font-bold border border-[green]">In Progress</h1>
        </div>
        </div>
        </div>
      </div>


      <div className="w-[2px] bg-black/20 h-80 flex "></div>

      <div className="bg-black/20 w-[50%] flex flex-col gap-5">

       <div className="flex flex-col gap-2">
        <h1>Budget Summary</h1>
          <div className="flex justify-between CPCards p-3">
          <div>
            <h1>Total</h1>
            <p>20,00,000 Rs</p>
          </div>
          <div>
            <h1>Used</h1>
            <p>12,00,000 Rs</p>
          </div>
          <div>
            <h1>Remaining</h1>
            <p>8,00,000 Rs</p>
          </div>
          </div>
        </div>
        <div className="flex justify-between CPCards p-3">
          <div className="flex flex-col gap-3">
            <h1>Start Date</h1>
            <p>12 Jan 2026</p>
          </div>
          <div className="w-[2px] bg-black/20 h-20 flex"></div>
          <div className="flex flex-col gap-3">
            <h1>End Date</h1>
            <p>23 Aug 2027</p>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default ProjectCards