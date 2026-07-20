import { X } from "lucide-react";
import { useState } from "react";
import { setToDoTask } from "../../../redux/features/tasksSlice";
import { setRecentUpdates } from "../../../redux/features/projectsSlice";
import { useDispatch, useSelector } from "react-redux";

const NewTask = ({ state, teamMember, whichPage }) => {
  const initialTaskData = teamMember === "" ? {} : { assignee: teamMember };
  const teamMembersData = useSelector((state) => state.teams.teamsMembers);
  const finalProjectData = useSelector((state) => state.projects.projectsdata);
  const { setisNTP } = state;
  console.log(teamMember);
  const UUID = crypto.randomUUID();
  const [todoTaskData, settodoTaskData] = useState(initialTaskData);
  const dispatch = useDispatch();

  function getData(targetElement) {
    settodoTaskData((prev) => {
      return { ...prev, id: UUID, [targetElement.name]: targetElement.value };
    });
  }

  function submitHandler(element) {
    element.preventDefault();
    const recentUpdatesObj = {
      updateId: crypto.randomUUID(),
      taskUUID: todoTaskData.id,
      type: "tasks",
      projectid: todoTaskData.PName,
      label: todoTaskData.Task,
      timestamp: Date.now(),
    };
    dispatch(setToDoTask(todoTaskData));
    dispatch(setRecentUpdates(recentUpdatesObj));
    settodoTaskData({});
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50 flex justify-center items-center text-white">
      <div className="w-full flex items-center justify-center ">
        <div className="w-[40%] relative">
          <div className="absolute top-5 right-5">
            <button
              onClick={() => {
                setisNTP(false);
              }}
              className="cursor-pointer active:scale-95 text-[#e55707]"
            >
              <X size={25} strokeWidth={1.5} />
            </button>
          </div>
          <form
            className=" bg-[#14202e] CPCards border border-white p-5 flex flex-col justify-evenly h-170"
            onSubmit={(elem) => {
              submitHandler(elem);
            }}
          >
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-4xl">
                {whichPage === "taskPage" ? "Create Task" : "Assign Task"}
              </h1>
            </div>

            <div className="flex justify-between ">
              <div className="flex flex-col w-[60%] gap-2">
                <label htmlFor="Task" className=" text-white/70 font-bold">
                  Task <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="write your task here"
                  required
                  name="Task"
                  className="bg-black/30 cursor-text p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765]"
                  value={todoTaskData.Task || ""}
                  onChange={(elem) => {
                    getData(elem.target);
                  }}
                />
              </div>
              <div className="flex flex-col w-[35%] gap-2">
                <label htmlFor="PName" className=" text-white/70 font-bold">
                  Project Name <span className="text-red-500">*</span>
                </label>
                <select
                  name="PName"
                  id="PName"
                  className="bg-black/30 cursor-pointer p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765] font-bold"
                  required
                  value={todoTaskData.PName || ""}
                  onChange={(elem) => {
                    getData(elem.target);
                  }}
                >
                  <option
                    value=""
                    className="text-white/60 font-bold "
                    disabled
                    selected
                  >
                    Select your project
                  </option>
                  {finalProjectData.map((items) => {
                    return (
                      <option key={items.projectid} value={items.project}>
                        {items.project}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="flex justify-between ">
              <div className="flex flex-col w-[30%] gap-2">
                <label htmlFor="assignee" className=" text-white/70 font-bold">
                  Select team member <span className="text-red-500">*</span>
                </label>
                <select
                  name="assignee"
                  id="assignee"
                  value={todoTaskData.assignee || ""}
                  className="bg-black/30 cursor-pointer p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765] font-bold"
                  required
                  onChange={(elem) => {
                    getData(elem.target);
                  }}
                >
                  <option
                    value=""
                    className="text-white/60 font-bold "
                    disabled
                    selected
                  >
                    Select team member
                  </option>
                  {teamMembersData.map((items) => {
                    return (
                      <option key={items.UUID} value={items.tmName}>
                        {items.tmName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-col w-[30%] gap-2">
                <label htmlFor="priority" className="font-bold text-white/70">
                  Select Priority <span className="text-red-500">*</span>
                </label>
                <select
                  name="priority"
                  id="priority"
                  required
                  className="bg-black/30 p-3 cursor-pointer rounded-lg border border-white/30 outline-none focus:border-[#7845a765] font-bold"
                  value={todoTaskData.priority || ""}
                  onChange={(elem) => {
                    getData(elem.target);
                  }}
                >
                  <option
                    value=""
                    className="text-white/60 font-bold "
                    disabled
                    selected
                  >
                    Select task priority
                  </option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="flex flex-col w-[30%] gap-2">
                <label htmlFor="date" className="font-bold text-white/70">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  className="bg-black/30 cursor-text p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765]"
                  value={todoTaskData.date || ""}
                  onChange={(elem) => {
                    getData(elem.target);
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <label htmlFor="comment" className="font-bold text-white/70">
                Comment (Optional)
              </label>
              <textarea
                name="comment"
                id="comment"
                placeholder="write any comment"
                value={todoTaskData.comment || ""}
                className="bg-black/30 p-3 rounded-lg border h-40 border-white/30 outline-none resize-none focus:border-[#7845a765]"
                onChange={(elem) => {
                  getData(elem.target);
                }}
              ></textarea>
            </div>

            <div className="w-full flex justify-center items-end">
              <button className="bg-[#7745a7] w-full py-3 rounded-lg cursor-pointer font-bold border border-white/20 active:scale-95">
                {whichPage === "taskPage" ? "Add Task" : "Assign Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
