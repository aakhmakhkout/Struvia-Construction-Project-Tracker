import { Outlet } from 'react-router-dom'
import Navbar from "../components/layout/Navbar/Navbar.jsx"
import Sidebar from "../components/layout/Sidebar/Sidebar.jsx"

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
        <div className='flex'>
            <div>
             <Sidebar />
            </div>

              <div className='w-full'>
              <Navbar />
              <div className='w-full flex justify-center'>
                <div className='w-[95%]'>
                <Outlet/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home