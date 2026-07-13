import { current } from "@reduxjs/toolkit";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CPPagination = ({ indexesState, proLength }) => {
  const { indexes, setIndexes } = indexesState;
  const itemsPerPage = 4;
  const totalPages = Math.ceil(proLength / itemsPerPage);
  console.log(totalPages);

  return (
    <div className="flex justify-between">
      <div>
        <p className="text-sm text-black/70 font-bold">
          Showing {proLength > 0 ? 1 : 0} to {proLength <= 4 ? teamLength : 4}{" "}
          of {proLength} Projects{" "}
        </p>
      </div>

      <div className="flex gap-5">
        <button
          className={`CPCardsBtns border border-black/20 rounded-sm bg-[#5d7bdf27] cursor-pointer active:scale-95 ${indexes.currentPage === 1 ? "hidden" : "flex"}`}
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
            {indexes.currentPage}
          </h1>
        </div>
        <button
          className={`CPCardsBtns border border-black/20 rounded-sm bg-[#5d7bdf27] cursor-pointer active:scale-95 ${indexes.currentPage === totalPages ? "hidden" : "flex"}`}
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
