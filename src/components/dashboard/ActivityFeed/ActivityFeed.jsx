import RecentActivites from "./RecentActivities.jsx";
import UpcomingTasks from "./UpcomingTasks.jsx";

const ActivityFeed = ({ recentActivity, upcomingTasks }) => {
  return (
    <div className="flex justify-between mt-5">
      <RecentActivites data={recentActivity} />
      <UpcomingTasks data={upcomingTasks} />
    </div>
  );
};

export default ActivityFeed;
