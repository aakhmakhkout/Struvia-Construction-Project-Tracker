import { useSelector } from "react-redux";

const ProjectHealth = () => {
  const projectsData = useSelector((state) => state.projects.projectsdata);
  const filteredData = [...projectsData].reverse().slice(0, 4);
  return (
    <div className="w-[25%] CPCards p-3 flex flex-col gap-5 border border-black/20">
      <div>
        <h1 className="font-bold text-xl">Project Health</h1>
      </div>

      <div className="flex flex-col gap-2">
        {filteredData.map((items) => {
          return (
            <div
              key={items.projectid}
              className="flex justify-between border border-black/10 p-[10px_5px] items-center rounded-lg"
            >
              <div className="flex gap-5 items-center">
                <div className="bg-black/20 w-10 h-10 flex items-center justify-center rounded-sm overflow-hidden">
                  <img
                    src={items.coverImgObj.src}
                    alt={items.coverImgObj.originalName}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h1 className="font-bold">{items.project}</h1>
                  <h3 className="text-sm text-black/70">{items.status}</h3>
                </div>
              </div>

              <div>
                {items.status === "Completed" ? (
                  <p className="w-3 h-3 bg-[green] rounded-full"></p>
                ) : items.status === "On Hold" ? (
                  <p className="w-3 h-3 bg-[red] rounded-full"></p>
                ) : items.status === "In Progress" ? (
                  <p className="w-3 h-3 bg-[orange] rounded-full"></p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectHealth;
