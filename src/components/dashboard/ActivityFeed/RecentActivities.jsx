import { useSelector } from "react-redux";
import rp1 from "../../../assets/rp1.jpg";
import { ClipboardList, CircleEllipsis } from "lucide-react";

const RecentActivities = ({ data, pc }) => {
  console.log(data);
  // const recentActivitesData = useSelector(
  //   (state) => state.dashboard.recentActivites,
  // );
  const reversedData = data.reverse().slice(0, 4);

  return (
    <div className="w-[50%] activityfeed flex flex-col gap-5 py-3 px-5 border border-black/20">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Recent Activity</h1>
        <button className="text-[#ff4800] text-sm">View All</button>
      </div>
      <div className="bg-black/20 w-full h-0.5"></div>
      {reversedData.length > 0 ? (
        reversedData.map((items, idx) => {
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
              <div className="flex gap-5  w-[70%]">
                {items.type === "tasks" ? (
                  <div className=" w-[10%] p-2 h-full flex justify-center items-center bg-black/10">
                    <ClipboardList size={30} strokeWidth={1.25} />
                  </div>
                ) : items.type === "album" ? (
                  <div className="w-[10%] h-full flex items-center justify-center">
                    <img
                      className="w-12 h-10 rounded-lg"
                      src={items.coverImg.src}
                      alt={items.coverImg.orginalName}
                    />
                  </div>
                ) : items.type === "other" ? (
                  <div className=" w-[10%] h-full flex justify-center items-center bg-black/10">
                    <CircleEllipsis size={30} strokeWidth={1.5} />
                  </div>
                ) : null}
                <div>
                  <h1 className="font-bold mb-1">{items.label}</h1>
                  <p className="text-sm text-black/60 capitalize">
                    {items.type}
                  </p>
                </div>
              </div>
              <div className="text-black/60 text-sm">{`${formattedDate}, ${formattedTime}`}</div>
            </div>
          );
        })
      ) : (
        <h1 className="text-black/70 text-sm">
          No Recent Activity for the current Project
        </h1>
      )}
    </div>
  );
};

export default RecentActivities;
