import React from "react";
import Welcome from "../components/dashboard/Top/Welcome.jsx";
import StatusCard from "../components/dashboard/Top/StatusCard.jsx";
import ActivityFeed from "../components/dashboard/ActivityFeed/ActivityFeed.jsx";
import ExtraInformation from "../components/dashboard/Bottom/ExtraInformation.jsx";
import { useSelector } from "react-redux";
import { userData } from "../data/usersData";
// import { getRole } from "../redux/features/authSlice";

const Dashboard = () => {
  const { contractorDashboardData } = useSelector((state) => state.projects);
  const { recentupdates } = useSelector((state) => state.updates);
  const { todoTasks } = useSelector((state) => state.tasks);
  const { albumdata } = useSelector((state) => state.photos);
  // console.log(contractorDashboardData);
  // console.log(recentupdates);
  // console.log(todoTasks);
  // console.log(albumdata);

  const contractorDashboardUpdates = recentupdates.filter((items) => {
    return items.projectid === contractorDashboardData.projectid;
  });
  const contractorDashboardTasks = todoTasks.filter((items) => {
    return items.PName === contractorDashboardData.projectid;
  });
  // const contractorDashboardPhotos = todoTasks.filter((items) => {
  //   return items.projectid === contractorDashboardData.projectid;
  // });

  return (
    <div>
      <Welcome />
      <StatusCard />
      <ActivityFeed
        recentActivity={contractorDashboardUpdates}
        upcomingTasks={contractorDashboardTasks}
      />
      <ExtraInformation />
    </div>
  );
};

export default Dashboard;
