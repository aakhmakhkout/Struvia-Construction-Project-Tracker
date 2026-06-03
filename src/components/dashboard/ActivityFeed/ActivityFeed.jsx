import RecentActivites from "./RecentActivities.jsx"
import UpcomingTasks from "./UpcomingTasks.jsx"

const ActivityFeed = () => {
  return (
    <div className="flex justify-between mt-5">
      <RecentActivites />
      <UpcomingTasks />
    </div>
  )
}

export default ActivityFeed