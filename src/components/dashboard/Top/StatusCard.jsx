import {
  CalendarCheck,
  BookCheck,
  Users,
  Wallet,
  IndianRupee,
} from "lucide-react";
import { useSelector } from "react-redux";
const StatusCard = () => {
  const dashboardProjectData = useSelector(
    (state) => state.projects.contractorDashboardData,
  );
  const { todoTasks, inProgressTasks, inReviewTasks, completedTasks } =
    useSelector((state) => state.tasks);
  const allTasks = [
    ...todoTasks,
    ...inProgressTasks,
    ...inReviewTasks,
    ...completedTasks,
  ];
  // console.log(allTasks);

  const currentProjectTasks = allTasks.filter((items) => {
    return items.PName === dashboardProjectData.projectid;
  });
  const SelectedCompletedTasks = completedTasks.filter((items) => {
    return items.PName === dashboardProjectData.projectid;
  });
  const progressData =
    currentProjectTasks.length > 0
      ? (SelectedCompletedTasks.length / currentProjectTasks.length) * 100
      : 0;

  // console.log(progressData);
  // console.log(currentProjectTasks);

  console.log(dashboardProjectData);

  const totalTasksLength =
    currentProjectTasks.length > 0 ? currentProjectTasks.length : 0;
  const dashboardStatusData = [
    {
      id: 1,
      title: "Project Progress",
      data: `${progressData}%`,
      subtitle: dashboardProjectData.status,
      icon: <CalendarCheck size={20} strokeWidth={1.5} />,
      color: "#fd4f0e",
      bgColor: "#fef2e3",
    },
    {
      id: 2,
      title: "Tasks",
      data: totalTasksLength,
      subtitle: "Total Tasks",
      icon: <BookCheck size={20} strokeWidth={1.5} />,
      color: "#1c7a49",
      bgColor: "#e7f6ed",
    },
    {
      id: 3,
      title: "On Site",
      data: 8,
      subtitle: "Workers",
      icon: <Users size={20} strokeWidth={1.5} />,
      color: "#2f71e6",
      bgColor: "#eff6fe",
    },
    {
      id: 4,
      title: "Budget Used",
      data: "12,45,000 Rs",
      subtitle: "of 20,00,000",
      icon: <Wallet size={20} strokeWidth={1.5} />,
      color: "#420ca5",
      bgColor: "#efe5fc ",
    },
    {
      id: 5,
      title: "Budget Remaining",
      data: "7,55,000 Rs",
      subtitle: "Remaining",
      icon: <IndianRupee size={20} strokeWidth={1.5} />,
      color: "#074e28 ",
      bgColor: "#e9f7ef",
    },
  ];
  return (
    <div className="flex justify-between h-30 items-center">
      {dashboardStatusData.map((items) => {
        return (
          <div
            key={items.id}
            className="p-4 flex gap-10 rounded-lg weatherandlocation min-w-50 justify-between border border-black/20"
          >
            <div className="flex flex-col gap-1 ">
              <h1 className="font-bold">{items.title}</h1>
              <h2 className="text-2xl font-bold">{items.data}</h2>
              <h5 className="text-sm text-black/60">{items.subtitle}</h5>
            </div>
            <div>
              <p
                style={{ color: items.color, backgroundColor: items.bgColor }}
                className="w-8 h-8 flex items-center justify-center rounded-md "
              >
                {items.icon}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatusCard;
