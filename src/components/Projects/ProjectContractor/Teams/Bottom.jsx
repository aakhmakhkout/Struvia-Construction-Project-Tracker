import { current } from "@reduxjs/toolkit";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function Bottom({ data, paginationState }) {
  const { Pagination, setPagination } = paginationState;
  const teamLength = data.length;
  const itemsPerPage = 8;
  const pageNumbers = teamLength / itemsPerPage;
  const pages = Math.ceil(pageNumbers);
  return (
    <div className="flex justify-between border-t border-black/20 pt-3">
      <div>
        <h1 className="text-sm font-bold text-black/60">
          Showing {teamLength > 0 ? 1 : 0} to 8 of {teamLength} team
          members{" "}
        </h1>
      </div>

      <div className="flex gap-5 items-center">
        <button
          className={`CPCardsBtns border border-black/20 rounded-sm bg-[#5d7bdf27] ${Pagination.currentPage === 1 ? "hidden" : "flex"}`}
          onClick={() => {
            setPagination(() => {
              return {
                startIdx: Pagination.startIdx - 8,
                endIdx: Pagination.startIdx,
                currentPage: Pagination.currentPage - 1,
              };
            });
            console.log(Pagination);
          }}
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>
        <div>
          <h1 className="text-[#e55707] border border-[#e55707] px-2 rounded-sm CPCardsBtns text-sm">
            {Pagination.currentPage}
          </h1>
        </div>
        <button
          className={`CPCardsBtns border border-black/20 rounded-sm bg-[#5d7bdf27] ${Pagination.currentPage === pages ? "hidden" : "flex"}`}
          onClick={() => {
            setPagination(() => {
              return {
                startIdx: Pagination.endIdx,
                endIdx: Pagination.endIdx + 8,
                currentPage: Pagination.currentPage + 1,
              };
            });
            console.log(Pagination);
          }}
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
