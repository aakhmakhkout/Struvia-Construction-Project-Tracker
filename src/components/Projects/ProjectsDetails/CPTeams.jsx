import { useSelector } from "react-redux"

const TeamonSitepre = () => {
  const teamOnSiteData = useSelector(state => state.dashboard.teamOnSite)
  return (
    <div className='dashboardBottomCards border border-black/20 rounded-lg p-4 flex flex-col gap-3'>
       <div className='flex justify-between'>
        <h1 className='font-bold text-xl'>Team On Site</h1>
        <button className='text-sm text-[#ff4800]'>View All</button>
      </div>

    <div className="flex flex-col gap-3">
      {
        teamOnSiteData.map((items, idx)=> {
          return <div key={idx} className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="bg-black/20 p-2 rounded-full">{items.img}</div>
              <div>
                <h1 className="font-bold text-sm">{items.name}</h1>
                <p className="text-[12px] text-black/60">{items.field}</p>
              </div>
            </div>
            <div className={`w-2 h-2 rounded-full ${items.isPresent ? "bg-[green]": "bg-[red]"}`}></div>
          </div>
        })
      }
    </div>

    </div>
  )
}
export default TeamonSitepre