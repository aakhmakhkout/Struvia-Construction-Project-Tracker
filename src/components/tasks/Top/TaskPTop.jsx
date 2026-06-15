import NewTask from "../CreateTask/NewTask"

const CreateNewTask = ({state}) => {
  const {isNTP, setisNTP} = state
  return (
    <div className='h-20 flex justify-between items-center' >
      <div>
        <h1 className='font-bold text-4xl'>Tasks</h1>
        <p className='text-black/70 text-sm'>Track and manage all tasks across your projects</p>
      </div>

      <div>
        <button className='bg-[#e55707] p-[8px_10px] rounded-lg text-white font-bold cursor-pointer active:scale-95' onClick={()=> {
          setisNTP(true)
        }}>+ New Task</button>

        {isNTP && <NewTask state={{setisNTP}}/>}
      </div>
    </div>
  )
}

export default CreateNewTask