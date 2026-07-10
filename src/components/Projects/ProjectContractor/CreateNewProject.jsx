import { X, Loader } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjectsData } from "../../../redux/features/projectsSlice";
import supabase from "../../../lib/supabase";

const CreateNewProject = ({ state }) => {
  const teamMembersData = useSelector((state) => state.teams.teamsMembers);
  const { setisNPFO } = state;
  const [projectData, setProjectData] = useState({});
  const [selectedMembers, setselectedMembers] = useState([]);
  const [selectFile, setselectFile] = useState(null);
  const dispatch = useDispatch();
  const fpData = useSelector((state) => state.projects.projectsdata);
  console.log(fpData);
  const [isLoading, setisLoading] = useState(false);

  function handleInputChanges(targetElement) {
    setProjectData((prev) => {
      return { ...prev, [targetElement.name]: targetElement.value };
    });
  }

  function addTeamMembers(element) {
    const selectedTM = teamMembersData.find((items) => {
      return items.UUID === element.target.value;
    });

    const finalTMarr = selectedMembers.some((items) => {
      return items.UUID === selectedTM.UUID;
    });

    setselectedMembers((prev) => {
      return !finalTMarr ? [...prev, selectedTM] : [...prev];
    });
  }

  function removeTeamMembers(UUID) {
    const updatedTeamMembers = selectedMembers.filter(
      (items) => items.UUID !== UUID,
    );
    setselectedMembers(updatedTeamMembers);
  }

  async function submitHandler(element) {
    element.preventDefault();

    setisLoading(true);
    const projectID = crypto.randomUUID();
    const pfpID = crypto.randomUUID();

    const imagePath = `projects/${projectID}/cover/${pfpID}-${selectFile.name}`;

    const { data, error } = await supabase.storage
      .from("struvia-media")
      .upload(imagePath, selectFile);

    if (error) {
      setisLoading(false);
      return;
    }

    const publicUrlObject = supabase.storage
      .from("struvia-media")
      .getPublicUrl(data.path);
    const pfpUrl = publicUrlObject.data.publicUrl;

    const finalProjectData = {
      ...projectData,
      projectid: projectID,
      team: selectedMembers,
      coverImgObj: {
        pfpid: pfpID,
        path: data.path,
        src: pfpUrl,
        originalName: selectFile.name,
      },
    };

    dispatch(setProjectsData(finalProjectData));
    setProjectData({});
    setteamMembers([]);
    setselectFile(null);
    setteamMembers([]);
    setisLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50 flex justify-center items-center text-white">
      <div className="w-full flex items-center justify-center ">
        <div className="w-[50%] relative">
          <div className="absolute top-5 right-5">
            <button
              onClick={() => {
                setisNPFO(false);
              }}
              className="cursor-pointer active:scale-95 text-[#e55707]"
            >
              <X size={25} strokeWidth={1.5} />
            </button>
          </div>
          <form
            className=" bg-[#14202e] CPCards border border-white p-5 flex flex-col justify-evenly h-190"
            onSubmit={(elem) => {
              submitHandler(elem);
            }}
          >
            {/* heading */}
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-4xl">Create New Project</h1>
            </div>

            {/* Project Name and Project Type input field */}
            <div className="flex justify-between bg-black/30 backdrop-blur-2xl CPCards p-3 items-center">
              <div className="flex flex-col w-[50%] gap-2">
                <label htmlFor="project" className=" text-white/70 font-bold">
                  Project Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="write your project name here"
                  required
                  name="project"
                  value={projectData.project || ""}
                  id="project"
                  className="bg-black/30 cursor-text p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765] capitalize"
                  onChange={(elem) => {
                    handleInputChanges(elem.target);
                  }}
                />
              </div>

              <div className="flex flex-col w-[45%] gap-2">
                <label htmlFor="PType" className=" text-white/70 font-bold">
                  Project Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="write project type here"
                  required
                  name="PType"
                  value={projectData.PType || ""}
                  id="PType"
                  className="bg-black/30 cursor-text capitalize p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765]"
                  onChange={(elem) => {
                    handleInputChanges(elem.target);
                  }}
                />
              </div>
            </div>

            {/* Location + TotalBudget + Project Status */}
            <div className="flex justify-between bg-black/30 p-3 backdrop-blur-2xl CPCards items-center">
              <div className="flex flex-col w-[35%] gap-2">
                <label htmlFor="location" className=" text-white/70 font-bold">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="town, city, state"
                  required
                  name="location"
                  id="location"
                  value={projectData.location || ""}
                  className="bg-black/30 cursor-text p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765]"
                  onChange={(elem) => {
                    handleInputChanges(elem.target);
                  }}
                />
              </div>

              <div className="flex flex-col w-[30%] gap-2">
                <label htmlFor="budget" className=" text-white/70 font-bold">
                  Total Budget <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="20,000,00 INR"
                  required
                  name="budget"
                  id="budget"
                  value={projectData.budget || ""}
                  className="bg-black/30 cursor-text p-3 rounded-lg border border-white/30 uppercase outline-none focus:border-[#7845a765]"
                  onChange={(elem) => {
                    handleInputChanges(elem.target);
                  }}
                />
              </div>

              <div className="flex flex-col w-[30%] gap-2">
                <label htmlFor="status" className="font-bold text-white/70">
                  Project Status<span className="text-red-500">*</span>
                </label>
                <select
                  name="status"
                  id="status"
                  value={projectData.status || ""}
                  required
                  className="bg-black/30 p-3  cursor-pointer rounded-lg border border-white/30 outline-none focus:border-[#7845a765]"
                  onChange={(elem) => {
                    handleInputChanges(elem.target);
                  }}
                >
                  <option
                    value=""
                    className="text-white/60 font-bold "
                    disabled
                  >
                    Select Project Status
                  </option>
                  <option value="Completed">Completed</option>
                  <option value="In Progress">In Progress</option>
                  <option value="On Hold">On Hold</option>
                </select>
              </div>
            </div>

            {/* Start date + End date + upload project pfp + select team member */}
            <div className="flex flex-col  bg-black/30 p-3 backdrop-blur-2xl CPCards gap-10">
              <div className="flex justify-between items-center ">
                <div className="flex flex-col gap-2 w-[20%]">
                  <label htmlFor="stdate" className="font-bold text-white/70">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="stdate"
                    id="stdate"
                    value={projectData.stdate || ""}
                    required
                    className="bg-black/30 cursor-text p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765]"
                    onChange={(elem) => {
                      handleInputChanges(elem.target);
                    }}
                  />
                </div>
                <div className="flex flex-col  gap-2 w-[20%]">
                  <label htmlFor="endate" className="font-bold text-white/70">
                    End Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="endate"
                    id="endate"
                    value={projectData.endate || ""}
                    required
                    className="bg-black/30 cursor-text p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765]"
                    onChange={(elem) => {
                      handleInputChanges(elem.target);
                    }}
                  />
                </div>

                <div className="flex flex-col  gap-2 w-[25%]">
                  <label
                    htmlFor="projectImgIcon"
                    className="font-bold text-white/70"
                  >
                    Upload Project pfp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    name="projectImgIcon"
                    id="projectImgIcon"
                    required
                    className="bg-black/30 p-3 cursor-pointer rounded-lg border border-white/30 outline-none focus:border-[#7845a765]"
                    onChange={(elem) => {
                      setselectFile(elem.target.files[0]);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="team" className=" text-white/70 font-bold">
                    Select team member <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="team"
                    id="team"
                    value={projectData.team || ""}
                    className="bg-black/30 cursor-pointer   p-3 rounded-lg border border-white/30 outline-none focus:border-[#7845a765]"
                    onChange={(elem) => {
                      addTeamMembers(elem);
                    }}
                  >
                    <option
                      value=""
                      className="text-white/60 font-bold "
                      disabled
                    >
                      Select team member
                    </option>
                    {teamMembersData.map((items) => {
                      return (
                        <option value={items.UUID} key={items.UUID}>
                          {items.tmName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* Team members */}

              <div className="flex flex-col gap-2">
                <h1 className=" text-white/70 font-bold">Team Members</h1>
                <div className="flex bg-black/30 h-15 p-2 border border-white/20 rounded-lg gap-3 overflow-x-scroll createNewProjectsTM">
                  {selectedMembers.map((items, idx) => {
                    return (
                      <div
                        key={idx}
                        className="bg-white/20 p-[5px_15px] rounded-lg border border-white/30 flex items-center gap-2 capitalize"
                      >
                        <h1>{items.tmName}</h1>
                        <button
                          type="button"
                          className="cursor-pointer active:scale-95 text-[#e55707]"
                        >
                          <X
                            size={20}
                            strokeWidth={1.5}
                            onClick={() => {
                              removeTeamMembers(items.UUID);
                            }}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-end">
              {!isLoading ? (
                <button
                  type="submit"
                  className="bg-[#7745a7] w-full py-3 cursor-pointer font-bold border border-white/20 active:scale-95 CPCards"
                >
                  Create Project
                </button>
              ) : (
                <button
                  type="submit"
                  disabled
                  className="bg-[#7745a7] w-full py-3 flex justify-center items-center font-bold border border-white/20 active:scale-95 CPCards"
                >
                  <Loader
                    size={20}
                    strokeWidth={1.5}
                    className="animate-spin"
                  />{" "}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewProject;
