import { Outlet } from 'react-router-dom'
import Navbar from "../components/layout/Navbar/Navbar.jsx"
import Sidebar from "../components/layout/Sidebar/Sidebar.jsx"

const Home = () => {
  return (
    <div>
        <div className='flex'>
            <div>
             <Sidebar />
            </div>

              <div className='w-full'>
              <Navbar />
              <div>
                <Outlet/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home