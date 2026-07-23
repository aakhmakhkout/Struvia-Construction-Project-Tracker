import { current } from "@reduxjs/toolkit";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";

const CPPagination = ({
  indexesState,
  proLength,
  slicedLength,
  searchData,
}) => {
  const activeTab = useSelector((state) => state.projects.activeTab);
  const { indexes, setIndexes } = indexesState;
  const itemsPerPage = 4;
  const totalPages = Math.ceil(proLength / itemsPerPage);
  console.log("project length", proLength);
  console.log("sliced length", slicedLength);
  console.log("active tab", activeTab);
  console.log(searchData);

  return (
    <div className="flex justify-between">
      <div>
        {activeTab === "All Projects" && searchData === "" ? (
          <p className="text-sm text-black/70 font-bold">
            Showing {proLength > 0 ? 1 : 0} to {proLength <= 4 ? proLength : 4}{" "}
            of {proLength} Projects {`(${activeTab})`}
          </p>
        ) : (
          <p className="text-sm text-black/70 font-bold">
            Showing {slicedLength > 0 ? 1 : 0} to{" "}
            {slicedLength <= 4 ? slicedLength : slicedLength} of {slicedLength}{" "}
            Projects {`(${activeTab})`}
          </p>
        )}
      </div>

      <div className="flex gap-5">
        <button
          className={`CPCardsBtns border border-black/20 rounded-sm bg-[#5d7bdf27] cursor-pointer active:scale-95 ${proLength <= 0 ? "hidden" : "flex"} ${indexes.currentPage === 1 ? "hidden" : "flex"}`}
          onClick={() => {
            setIndexes(() => {
              return {
                startIDX: indexes.startIDX - 4,
                endIDX: indexes.startIDX,
                currentPage: indexes.currentPage - 1,
              };
            });
          }}
        >
          <ChevronLeft size={25} strokeWidth={1.5} />
        </button>
        <div>
          <h1 className="text-[#e55707] border border-[#e55707] px-2.5 rounded-sm CPCardsBtns">
            {proLength > 0 ? indexes.currentPage : 0}
          </h1>
        </div>
        <button
          className={`CPCardsBtns border border-black/20 rounded-sm bg-[#5d7bdf27] cursor-pointer active:scale-95 ${proLength <= 0 ? "hidden" : "flex"} ${
            activeTab === "All Projects" && searchData === ""
              ? indexes.currentPage === totalPages
                ? "hidden"
                : "flex"
              : slicedLength <= 4
                ? "hidden"
                : "flex"
          }`}
          onClick={() => {
            setIndexes(() => {
              return {
                startIDX: indexes.endIDX,
                endIDX: indexes.endIDX + 4,
                currentPage: indexes.currentPage + 1,
              };
            });
          }}
        >
          <ChevronRight size={25} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};
export default CPPagination;
