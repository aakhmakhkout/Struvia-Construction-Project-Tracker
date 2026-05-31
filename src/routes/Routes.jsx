import {Routes, Route} from "react-router-dom"
import Dashboard from "../pages/Dashboard.jsx"
import Projects from "../pages/Projects.jsx"
import Tasks from "../pages/Tasks.jsx"
import Photos from "../pages/Photos.jsx"
import PunchList from "../pages/PunchList.jsx"
import LandingPage from "../components/landingPage/LandingPage.jsx"
import Home from "../pages/Home.jsx"

const NavigationRoutes = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<LandingPage />}/>
        <Route path="/home" element={<Home />}>
        <Route path="/home/dashboard" element={<Dashboard />}/>
        <Route path="/home/projects" element={<Projects />}/>
        <Route path="/home/tasks" element={<Tasks />}/>
        <Route path="/home/photos" element={<Photos />}/>
        <Route path="/home/punchlist" element={<PunchList />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default NavigationRoutes