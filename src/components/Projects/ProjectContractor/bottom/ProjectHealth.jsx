const ProjectHealth = () => {
  const projectHealthData = [
    {
      id: 1,
      img: "img",
      projectName: "Skyline Villa",
      status: "On track",
    },
    {
      id: 2,
      img: "img",
      projectName: "Greenfield Commercial",
      status: "On track",
    },
    {
      id: 3,
      img: "img",
      projectName: "Maple Residence",
      status: "Completed",
    },
    {
      id: 4,
      img: "img",
      projectName: "Lakeview Interiors",
      status: "On hold",
    },
  ];
  return (
    <div className="w-[25%] CPCards p-3 flex flex-col gap-5 border border-black/20">
      <div>
        <h1 className="font-bold text-xl">Project Health</h1>
      </div>

      <div className="flex flex-col gap-2">
        {projectHealthData.map((items) => {
          return (
            <div
              key={items.id}
              className="flex justify-between border border-black/10 p-[10px_5px] items-center rounded-lg"
            >
              <div className="flex gap-5 items-center">
                <div className="bg-black/20 w-10 h-10 flex items-center justify-center rounded-sm">
                  {items.img}
                </div>
                <div>
                  <h1 className="font-bold">{items.projectName}</h1>
                  <h3 className="text-sm text-black/70">{items.status}</h3>
                </div>
              </div>

              <div>{">"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectHealth;
