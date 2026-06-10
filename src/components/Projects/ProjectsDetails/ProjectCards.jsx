import {EllipsisVertical, Contact, MapPin, CircleDashed, HandCoins} from "lucide-react"


const ProjectCards = ({data}) => {
  console.log(data)
  return (
    <div className="flex justify-between items-center w-[60%]">
     <div className="CPCards p-5 flex justify-between h-full border w-full border-black/20">
      <div className="flex flex-col rounded-lg  gap-3 w-[40%]">
        <h1 className="font-bold text-2xl">Project Overview</h1>
        <div className="flex flex-col gap-5 p-3 CPCards  border border-black/20">
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


      <div className="w-0.5 bg-black/20 h-80 flex"></div>


      <div className=" w-[50%] flex flex-col gap-3">
      <div><h1 className="font-bold text-2xl">Project Details</h1></div>
       <div className="flex flex-col gap-2 CPCards p-3 border border-black/20 bg-[#2a8a4713]">
       <div className="flex text-[#2a8a47] w-[45%] gap-2 text-lg items-center">
        <div><HandCoins /></div>
        <h1 className="border-b-2 border-black/20  pb-1 font-bold flex justify-center">Budget Summary</h1>
       </div>
          <div className="flex justify-between  p-3">
          <div>
            <h1 className="font-bold text-black/70">Total</h1>
            <p className="font-bold text-lg">20,00,000 Rs</p>
          </div>
          <div>
            <h1 className="font-bold text-black/70">Used</h1>
            <p className="font-bold text-lg">12,00,000 Rs</p>
          </div>
          <div>
            <h1 className="font-bold text-black/70">Remaining</h1>
            <p className="font-bold text-lg">8,00,000 Rs</p>
          </div>
          </div>
        </div>
        <div className="flex justify-between CPCards p-3 border border-black/20 bg-[#006eff17]">
          <div className="flex flex-col gap-3 justify-center items-center w-[45%]">
            <h1 className="font-bold text-black/70">Start Date</h1>
            <p className="font-bold text-lg text-[#006eff]">12 Jan 2026</p>
          </div>

          <div className="w-0.5 bg-black/20 h-20 flex"></div>

          <div className="flex flex-col gap-3 justify-center items-center w-[45%] ">
            <h1 className="font-bold text-black/70">End Date</h1>
            <p className="font-bold text-lg text-[#006eff]">23 Aug 2027</p>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default ProjectCards