import { useSelector } from "react-redux"
import CPPagination from "../ProjectContractor/CPPagination"

const TeamonSitepre = () => {
  const teamOnSiteData = useSelector(state => state.dashboard.teamOnSite)
  return (
    <div className='dashboardBottomCards border border-black/20 rounded-lg p-4 flex flex-col gap-5'>
       <div className='flex justify-between items-center'>
        <h1 className='font-bold text-xl w-[30%]'>Team On Site</h1>
        <h3 className="w-[30%] font-bold text-xl">Current Task</h3>
        <div className="w-[10%]">
        <button className='text-sm text-[#ff4800]'>Status</button>
        </div>
      </div>

    <div className="flex flex-col gap-3 CPCards p-3 border border-black/20">
      {
        teamOnSiteData.map((items, idx)=> {
          return <div key={idx} className="flex justify-between items-center">
            <div className="flex gap-3 items-center w-[30%]">
              <div className="bg-black/20 p-2 rounded-full">{items.img}</div>
              <div>
                <h1 className="font-bold text-sm">{items.name}</h1>
                <p className="text-[12px] text-black/60">{items.field}</p>
              </div>
            </div>
            <div className="w-[40%] font-bold border border-black/20 p-2 rounded-lg"><h1>{items.currentTask}</h1></div>
            <div className="w-[10%] flex items-center justify-center"><p className={`w-2 h-2 rounded-full ${items.isPresent ? "bg-[green]": "bg-[red]"}`}></p></div>
          </div>
        })
      }
    </div>
    <div>
     <CPPagination />
    </div>
    </div>
  )
}
export default TeamonSitepre