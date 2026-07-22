import {
  ChevronRight,
  Plus,
  BatteryMedium,
  Delete,
  SquarePen,
  Trash2,
} from "lucide-react";
import { setRemoveRecentUpdates } from "../../../../redux/features/updatesSlice";
import { useDispatch } from "react-redux";

const Actions = ({ state, data }) => {
  const { setrecentProjectsIdx } = state;
  const dispatch = useDispatch();
  return (
    <div className="w-50 bg-[#e7f0fa] text-black absolute right-7 top-0 rounded-lg flex z-10 CPCards border border-black/20">
      <div className="p-2 flex flex-col justify-start items-start w-full gap-1">
        <button
          className="flex w-full justify-between items-center cursor-pointer"
          onClick={() => {
            dispatch(setRemoveRecentUpdates(data.updateId));
            setrecentProjectsIdx(null);
          }}
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
