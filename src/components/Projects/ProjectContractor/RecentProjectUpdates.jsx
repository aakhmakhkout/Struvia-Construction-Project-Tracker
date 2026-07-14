import { EllipsisVertical } from "lucide-react";

const RecentProjectUpdates = () => {
  const recentUpdates = [
    {
      id: 1,
      icon: "icon",
      update: "18 new photos uploaded to skyline Villa",
      by: "kaneki ken",
      time: "2 hours ago",
    },
    {
      id: 2,
      icon: "icon",
      update: "Payment of Rs 2,00,000 approved for Greenfield Commercial",
      by: "Kaneki ken",
      time: "1 day ago",
    },
    {
      id: 3,
      icon: "icon",
      update: "Punch list updated for Maple Residence",
      by: "isagi yoichi",
      time: "2 days ago",
    },
    {
      id: 4,
      icon: "icon",
      update:
        "Eren Yeager Completed Task 'Second Floor Slab' in Greenfield Commercial",
      by: "Eren Yeager",
      time: "3 days ago",
    },
  ];
  return (
    <div className="CPCards p-3 w-[50%] flex flex-col gap-5 border border-black/20">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Recent Project Updates</h1>
        <button className="text-[#e55707] text-sm">View All Updates</button>
      </div>

      <div className="flex flex-col ">
        {recentUpdates.map((items) => {
          return (
            <div
              key={items.id}
              className="flex justify-between border-t border-black/10 py-3"
            >
              <div className="flex gap-5 items-center">
                <div className="bg-black/20 w-10 h-10 flex items-center justify-center rounded-sm">
                  {items.icon}
                </div>
                <div>
                  <h1 className="font-bold">{items.update}</h1>
                  <div className="flex gap-3 text-sm text-black/70">
                    <h3>{items.by}</h3>
                    <p>{items.time}</p>
                  </div>
                </div>
              </div>

              <div>
                <button>
                  <EllipsisVertical size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjectUpdates;
