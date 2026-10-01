import React, { useState } from "react";
import Welcome from "../components/dashboard/Top/Welcome.jsx";
import StatusCard from "../components/dashboard/Top/StatusCard.jsx";
import ActivityFeed from "../components/dashboard/ActivityFeed/ActivityFeed.jsx";
import ExtraInformation from "../components/dashboard/Bottom/ExtraInformation.jsx";
import { useSelector } from "react-redux";
import { userData } from "../data/usersData";
// import { getRole } from "../redux/features/authSlice";

const Dashboard = () => {
  const { projectsdata, navbarProjectId } = useSelector(
    (state) => state.projects,
  );
  const { recentupdates } = useSelector((state) => state.updates);
  const { todoTasks } = useSelector((state) => state.tasks);
  const { albumdata } = useSelector((state) => state.photos);
  console.log(navbarProjectId);
  // console.log(recentupdates);
  // console.log(todoTasks);
  // console.log(albumdata);
  const contratorPageData =
    projectsdata.length > 0
      ? projectsdata.find((items) => {
          return items.projectId === navbarProjectId;
        })
      : null;

  const contractorDashboardUpdates = recentupdates.filter((items) => {
    return items.projectid === contratorPageData?.projectid;
  });
  const contractorDashboardTasks = todoTasks.filter((items) => {
    return items.PName === contratorPageData?.projectid;
  });
  // const contractorDashboardPhotos = todoTasks.filter((items) => {
  //   return items.projectid === contractorDashboardData.projectid;
  // });

  return (
    <div>
      <Welcome location={contratorPageData?.location} />
      <StatusCard />
      <ActivityFeed
        recentActivity={contractorDashboardUpdates}
        projectCover={contratorPageData?.coverImgObj}
        upcomingTasks={contractorDashboardTasks}
      />
      <ExtraInformation team={contratorPageData?.team} />
    </div>
  );
};

export default Dashboard;
