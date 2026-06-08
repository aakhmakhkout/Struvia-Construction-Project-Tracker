import {EllipsisVertical} from "lucide-react"


const ProjectCards = ({data}) => {
  console.log(data)
  return (
    <div className="flex justify-between items-center">
     <div className="CPCards p-3 gap-5 flex flex-col w-[30%]">
      <div className="flex flex-col rounded-lg border border-black/20 p-3 gap-3">
        <h1 className="font-bold text-lg">Project Name</h1>
        <div className="flex gap-3 p-3 CPCards  border-t border-black/20 items-center">
          <p className="w-15 h-10 bg-black/20 flex items-center justify-center rounded-lg">img</p>
          <div>
            <h1 className="font-bold text-lg">Skyline Villa</h1>
            <p className="text-sm text-black/70">Check your project details here</p>
          </div>
        </div>
      </div>


      <div className="flex flex-col rounded-lg border border-black/20 p-3 gap-3">
        <h1 className="font-bold text-lg">Contractor</h1>
        <div className="flex gap-3 CPCards p-3  border-t border-black/20">
        <h1 className="font-bold text-lg">Contractor Name</h1>
        </div>
      </div>

      <div className="flex flex-col rounded-lg  border border-black/20 p-3 gap-3">
        <h1 className="font-bold text-lg">Location</h1>
        <div className="flex gap-3 CPCards p-3  border-t border-black/20">
        <h1 className="font-bold text-lg">Somewhere in India</h1>
        </div>
      </div>

      <div className="flex flex-col rounded-lg border border-black/20 p-3 gap-3">
        <h1 className="font-bold text-lg">Status</h1>
        <div className="flex gap-3 CPCards p-3  border-t border-black/20">
        <h1 className="bg-[#51ff002d] p-[10px_20px] rounded-lg text-[#026602] font-bold border border-[green]">In Progress</h1>
        </div>
      </div>
     </div>
    </div>
  )
}

export default ProjectCards