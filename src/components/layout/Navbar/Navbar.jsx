import { useSelector } from "react-redux"



const Navbar = () => {
  let navTabs = useSelector(state => state.layout.activeTab)

  if(navTabs === "Dashboard") {
    navTabs = "Skyline Villa Project"
  }

  return (
    <div>
      <div className='flex justify-between w-full bg-[#eae9f0] h-15 items-center px-10'>

        <div className='flex gap-10'>
          <div >
            <h1>{navTabs}</h1>
          </div>
          <div>
            <h1>In progress</h1>
          </div>
        </div>

        <div className='flex gap-10'>
          <div><button>Notifications</button></div>
          <div>Roles</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar