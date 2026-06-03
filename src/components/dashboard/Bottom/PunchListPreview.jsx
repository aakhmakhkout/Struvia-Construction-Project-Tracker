import { useSelector } from "react-redux"


const PunchListPreview = () => {
  const punchlistData = useSelector(state => state.punchlist.punchListData)
  return (
    <div className='w-[33%]  rounded-lg p-4 dashboardBottomCards flex flex-col gap-4 border border-black/20'>
       <div className='flex justify-between'>
        <h1 className='font-bold text-xl'>Punch List</h1>
        <button className='text-sm text-[#ff4800]'>View All</button>
      </div>
      <div className="flex flex-col gap-5">
        {punchlistData.map((items)=> {
          return <div key={items.id} className="flex justify-between">
            <div className="flex gap-3 w-[70%]">
            <div><button className="border border-black/80 w-3 h-3 rounded-sm"></button></div>
              <h1>{items.item}</h1>
            </div>

            <div className="flex gap-3 w-[30%]">
            <div className={`text-sm w-[50%] flex justify-center items-center rounded-sm ${items.priority === "High" ? "text-[red] bg-[#ff00001f]" : null} ${items.priority === "Medium" ? "text-[#ff5e00] bg-[#ffa6002d]" : null} ${items.priority === "Low" ? "text-[green] bg-[#0080001c]" : null}` } >{items.priority}</div>
            <div className="w-[50%] text-sm"><p>{items.time}</p></div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default PunchListPreview