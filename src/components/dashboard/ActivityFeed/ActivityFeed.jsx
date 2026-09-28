import RecentActivites from "./RecentActivities.jsx";
import UpcomingTasks from "./UpcomingTasks.jsx";

const ActivityFeed = ({ recentActivity, upcomingTasks, projectCover }) => {
  return (
    <div className="flex justify-between mt-5 min-h-60 max-h-100">
      <RecentActivites data={recentActivity} pc={projectCover} />
      <UpcomingTasks data={upcomingTasks} />
    </div>
  );
};

export default ActivityFeed;
