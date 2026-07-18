import {
  ChevronRight,
  SquareArrowOutUpRight,
  BatteryMedium,
  Delete,
  SquarePen,
  Trash2,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../../../redux/features/projectsSlice";

const Actions = ({ state, proData, supabaseClient }) => {
  console.log(proData, supabaseClient);
  const { setisOptionsID } = state;
  const dispatch = useDispatch();

  const handleDeleteProject = async () => {
    const { data, error } = await supabaseClient.storage
      .from("struvia-media")
      .remove([proData.coverImgObj.path]);
    if (error) {
      return;
    }
    console.log(data, error);
    dispatch(deleteProject(proData.projectid));
    setisOptionsID(null);
  };

  return (
    <div className="w-50 bg-[#e7f0fa] text-black absolute right-15 top-8 rounded-lg flex z-10 CPCards border border-black/20">
      <div className="p-2 flex flex-col justify-start items-start w-full gap-2">
        <button className="flex justify-between items-center w-full cursor-pointer">
          <div className="flex gap-3 items-center">
            <div>
              <SquareArrowOutUpRight size={15} strokeWidth={1.5} />
            </div>
            <h1>Open</h1>
          </div>
          <div>
            <ChevronRight size={15} strokeWidth={1.25} />
          </div>
        </button>

        <button className="flex justify-between items-center w-full cursor-pointer">
          <div className="flex gap-3 items-center">
            <div>
              <SquarePen size={15} strokeWidth={1.25} />
            </div>
            <h1>Edit</h1>
          </div>
          <div>
            <ChevronRight size={15} strokeWidth={1.25} />
          </div>
        </button>

        <button
          className="flex w-full justify-between items-center cursor-pointer"
          onClick={handleDeleteProject}
        >
          <div className="flex gap-3 items-center">
            <div>
              <Trash2 size={15} strokeWidth={1.25} />
            </div>
            <h1 className="cursor-pointer">Delete</h1>
          </div>
          <div>
            <ChevronRight size={15} strokeWidth={1.25} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Actions;
