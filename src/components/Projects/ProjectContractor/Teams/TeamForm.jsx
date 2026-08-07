import { X, Loader } from "lucide-react";
import React, { useState } from "react";
import supabase from "../../../../lib/supabase";
import { addTeamMember } from "../../../../redux/features/teamsSlice";
import { useDispatch } from "react-redux";

export default function TeamForm({ state, whichPage, teamData }) {
  console.log(teamData);
  const dispatch = useDispatch();
  const { setisATMformOpen } = state;
  const [teamMembersData, setteamMembersData] = useState(teamData);
  const [selectedFile, setselectedFile] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  async function submitHandler(elem) {
    elem.preventDefault();
    setisLoading(true);
    const teamMemberUUID = crypto.randomUUID();
    const teamMemberPfpUUID = crypto.randomUUID();
    const Imagepath = `team/${teamMemberUUID}/pfp/${teamMemberPfpUUID}-${selectedFile.name}`;
    const { data, error } = await supabase.storage
      .from("struvia-media")
      .upload(Imagepath, selectedFile);
    if (error) {
      setisLoading(false);
      return;
    }

    const publicUrl = supabase.storage
      .from("struvia-media")
      .getPublicUrl(data.path);
    const pfpUrl = publicUrl.data.publicUrl;

    const finalTeamMemberObj = {
      ...teamMembersData,
      UUID: teamMemberUUID,
      pfpUUID: teamMemberPfpUUID,
      path: data.path,
      url: pfpUrl,
      orginalName: selectedFile.name,
    };

    dispatch(addTeamMember(finalTeamMemberObj));
    setteamMembersData({});
    setselectedFile(null);
    setisLoading(false);
  }

  function handleInputData(targetElem) {
    setteamMembersData((prev) => {
      return { ...prev, [targetElem.name]: targetElem.value };
    });
  }

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] rounded-lg z-60">
      <div className="flex  justify-center items-center h-full w-full ">
        <form
          className="w-[40%] h-[60%] bg-[#14202e] relative text-white p-4 CPCards flex flex-col items-center"
          onSubmit={(elem) => {
            submitHandler(elem);
          }}
        >
          <div className="w-full h-[20%] flex justify-center items-center">
            <h1 className="text-3xl font-bold">
              {whichPage === "topPage"
                ? "Add New Team Member"
                : "Edit Team Members Details"}
            </h1>
          </div>
          <button
            type="button"
            className="absolute top-2 right-2 cursor-pointer active:scale-95"
            onClick={() => setisATMformOpen(false)}
          >
            <X />
          </button>

          <div className="w-[95%] h-[70%] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="w-[47%] flex flex-col gap-1">
                <label htmlFor="tmName" className="text-white/80">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="tmName"
                  id="tmName"
                  placeholder="Kaneki Ken"
                  required
                  className="bg-black/30 cursor-text p-3  rounded-lg border border-white/30 outline-none"
                  value={teamMembersData.tmName || ""}
                  onChange={(elem) => {
                    handleInputData(elem.target);
                  }}
                />
              </div>

              <div className="w-[47%] flex flex-col gap-1">
                <label htmlFor="tmRole" className="text-white/80">
                  Role <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Electrical Engineer"
                  name="tmRole"
                  id="tmRole"
                  required
                  className="bg-black/30  cursor-text p-3 rounded-lg border border-white/30 outline-none"
                  value={teamMembersData.tmRole || ""}
                  onChange={(elem) => {
                    handleInputData(elem.target);
                  }}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="w-[47%] flex flex-col gap-1">
                <label htmlFor="tmContact" className="text-white/80">
                  {" "}
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="+91 8825065077"
                  name="tmContact"
                  id="tmContact"
                  required
                  className="bg-black/30 cursor-text  p-3 rounded-lg border border-white/30 outline-none"
                  value={teamMembersData.tmContact || ""}
                  onChange={(elem) => {
                    handleInputData(elem.target);
                  }}
                />
              </div>
              <div className="w-[47%] flex flex-col gap-1">
                <label htmlFor="tmEmail" className="text-white/80">
                  {" "}
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="kenkaneki@struvia.com"
                  name="tmEmail"
                  id="tmEmail"
                  required
                  className="bg-black/30 cursor-text p-3 rounded-lg border border-white/30 outline-none"
                  value={teamMembersData.tmEmail || ""}
                  onChange={(elem) => {
                    handleInputData(elem.target);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-[30%] flex flex-col gap-1">
                <label htmlFor="tmStatus" className="text-white/80">
                  Status <span className="text-red-500">*</span>
                </label>
                <select
                  name="tmStatus"
                  id="tmStatus"
                  required
                  className="bg-black/30 p-3 rounded-lg border border-white/30 outline-none cursor-pointer"
                  value={teamMembersData.tmStatus || ""}
                  onChange={(elem) => {
                    handleInputData(elem.target);
                  }}
                >
                  <option value="" disabled>
                    Select team member's status
                  </option>
                  <option value="Active">Active</option>
                  <option value="On Leave">On Leave</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="w-[30%] flex flex-col gap-1">
                <label htmlFor="tmPfp" className="text-white/80">
                  Upload Profile Photo <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="tmPfp"
                  id="tmPfp"
                  required
                  className="bg-black/30 cursor-pointer p-3 rounded-lg border border-white/30 outline-none"
                  onChange={(elem) => {
                    setselectedFile(elem.target.files[0]);
                  }}
                />
              </div>
              <div className="w-[30%] flex flex-col gap-1">
                <label htmlFor="tmAddress" className="text-white/80">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Thane, Mumbai, India"
                  name="tmAddress"
                  id="tmAddress"
                  required
                  className="bg-black/30 cursor-text p-3 rounded-lg border border-white/30 outline-none"
                  value={teamMembersData.tmAddress || ""}
                  onChange={(elem) => {
                    handleInputData(elem.target);
                  }}
                />
              </div>
            </div>

            <div className="w-full flex justify-center items-end">
              {!isLoading ? (
                <button
                  type="submit"
                  className="bg-[#7745a7] w-full py-3 cursor-pointer font-bold border border-white/20 active:scale-95 CPCards"
                >
                  {whichPage === "topPage"
                    ? "Add Team Member"
                    : "Update Details"}
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
          </div>
        </form>
      </div>
    </div>
  );
}
