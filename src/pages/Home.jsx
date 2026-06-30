import { Outlet } from 'react-router-dom'
import Navbar from "../components/layout/Navbar/Navbar.jsx"
import Sidebar from "../components/layout/Sidebar/Sidebar.jsx"

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-[#f0f5ff]'>
        <div className='flex'>
            <div>
             <Sidebar />
            </div>

              <div className='w-full'>
                <div className='h-[6%]'>
                <Navbar />
                </div>
              <div className='w-full flex justify-center h-[94%]'>
                <div className='w-[95%] h-full'>
                <Outlet/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home