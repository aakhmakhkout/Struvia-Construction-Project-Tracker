import { useSelector } from "react-redux";

const UpcomingTasks = ({ data }) => {
  // console.table(data);

  // const upcomingTasksData = useSelector(
  //   (state) => state.dashboard.upcomingTasks,
  // );
  const filteredUpcomingTasksData = data.reverse().slice(0, 4);
  return (
    <div className="w-[45%] activityfeed py-3 px-5 flex flex-col gap-5 border border-black/20">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Upcoming Tasks</h1>
        <button className="text-[#ff4800] text-sm">View All</button>
      </div>
      <div className="bg-black/20 w-full h-0.5"></div>
      {filteredUpcomingTasksData.length > 0 ? (
        filteredUpcomingTasksData.map((items, idx) => {
          return (
            <div key={idx} className="flex justify-between">
              <div className="flex gap-3">
                <div>
                  <h1 className="font-bold mb-1">{items.Task}</h1>
                  <p className="text-sm text-black/60">
                    Assigneed to {items.assignee}
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-20">
                <div className="font-bold">{items.priority}</div>
                <div className="text-black/60 text-sm">{items.date}</div>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="text-black/70 text-sm">
          No Upcoming Tasks for the current Project
        </h1>
      )}
    </div>
  );
};

export default UpcomingTasks;
