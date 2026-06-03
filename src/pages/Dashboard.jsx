import React from 'react'
import Welcome from "../components/dashboard/Top/Welcome.jsx"
import StatusCard from "../components/dashboard/Top/StatusCard.jsx"
import ActivityFeed from '../components/dashboard/ActivityFeed/ActivityFeed.jsx'
import ExtraInformation from '../components/dashboard/Bottom/ExtraInformation.jsx'

const Dashboard = () => {
  return (
    <div>
      <Welcome />
      <StatusCard />
      <ActivityFeed />
      <ExtraInformation />
    </div>
  )
}

export default Dashboard