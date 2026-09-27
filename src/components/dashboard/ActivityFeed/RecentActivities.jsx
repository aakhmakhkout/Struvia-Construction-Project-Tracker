import { useSelector } from "react-redux";
import rp1 from "../../../assets/rp1.jpg";

const RecentActivities = ({ data }) => {
  // console.log(data);
  // const recentActivitesData = useSelector(
  //   (state) => state.dashboard.recentActivites,
  // );

  return (
    <div className="w-[50%] activityfeed flex flex-col gap-5 py-3 px-5 border border-black/20">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Recent Activity</h1>
        <button className="text-[#ff4800] text-sm">View All</button>
      </div>
      {data.map((items, idx) => {
        const date = new Date(items.timestamp);
        const formattedDate = date.toLocaleDateString([], {
          day: "numeric",
          month: "short",
          year: "numeric",
        });

        const formattedTime = date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        return (
          <div key={idx} className="flex justify-between">
            <div className="flex gap-3">
              <div className="w-15 h-10 flex items-center justify-center rounded-lg">
                <img src={items.img} alt="img" className="rounded-lg" />
              </div>
              <div>
                <h1 className="font-bold mb-1">{items.label}</h1>
                <p className="text-sm text-black/60">{items.subtitle}</p>
              </div>
            </div>
            <div className="text-black/60 text-sm">{`${formattedDate}, ${formattedTime}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentActivities;
