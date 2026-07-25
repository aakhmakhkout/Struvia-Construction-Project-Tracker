import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const PriorityOptions = () => {
  function handleSelectedPriority(elem) {
    console.log(elem.target.value);
  }
  return (
    <div className="border border-black/20  rounded-sm">
      <select
        className="w-full h-full p-[8px_15px] outline-none proDD cursor-pointer"
        name="priorityOptions"
        id="priorityOptions"
        onChange={(elem) => {
          handleSelectedPriority(elem);
        }}
      >
        <option value="All Priorities">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
};

export default PriorityOptions;
