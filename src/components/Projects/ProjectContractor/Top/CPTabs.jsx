import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../../redux/features/projectsSlice";

const CPTabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.projects.activeTab);
  const tabs = [
    {
      id: 1,
      title: "All Projects",
      color: "#3B82F6",
      bgColor: "#DBEAFE",
    },
    {
      id: 2,
      title: "In Progress",
      color: "#F59E0B",
      bgColor: "#FEF3C7",
    },
    {
      id: 3,
      title: "Completed",
      color: "#10B981",
      bgColor: "#D1FAE5",
    },
    {
      id: 4,
      title: "On Hold",
      color: "#EF4444",
      bgColor: "#FEE2E2",
    },
  ];
  return (
    <div className="h-15 flex items-center">
      <div className="flex gap-10">
        {tabs.map((items) => {
          return (
            <div key={items.id} className="">
              <button
                style={
                  activeTab === items.title
                    ? {
                        color: items.color,
                        backgroundColor: items.bgColor,
                        padding: "10px 20px",
                        borderRadius: "8px",
                        border: `1px solid ${items.color}`,
                        fontWeight: "bolder",
                      }
                    : null
                }
                className="py-2.5 px-5 border border-black/20 rounded-[9px] cursor-pointer"
                onClick={() => {
                  dispatch(setActiveTab(items.title));
                }}
              >
                {items.title}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CPTabs;
