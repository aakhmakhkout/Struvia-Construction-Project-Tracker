import {
  Contact,
  CalendarDays,
  MessageSquareMore,
  EllipsisVertical,
} from "lucide-react";
import { useSelector } from "react-redux";
import TaskCards from "./TaskCards/TaskCards";

const DetailedTasksInformation = ({ selectedPro, selectedPri }) => {
  const { todoTasks, inProgressTasks, inReviewTasks, completedTasks } =
    useSelector((state) => state.tasks);
  console.log(todoTasks);

  const filteredTodo =
    selectedPro === "All Projects"
      ? todoTasks
      : todoTasks.filter((items) => {
          return items.PName === selectedPro;
        });
  const filteredInProgressTasks =
    selectedPro === "All Projects"
      ? inProgressTasks
      : inProgressTasks.filter((items) => {
          return items.PName === selectedPro;
        });
  const filteredInReviewTasks =
    selectedPro === "All Projects"
      ? inReviewTasks
      : inReviewTasks.filter((items) => {
          return items.PName === selectedPro;
        });
  const filteredCompleted =
    selectedPro === "All Projects"
      ? completedTasks
      : completedTasks.filter((items) => {
          return items.PName === selectedPro;
        });

  const sFilterdTodo =
    selectedPri === "All Priorities"
      ? filteredTodo
      : filteredTodo.filter((items) => items.priority === selectedPri);
  const sFilterdInProg =
    selectedPri === "All Priorities"
      ? filteredInProgressTasks
      : filteredInProgressTasks.filter(
          (items) => items.priority === selectedPri,
        );
  const sFilterdInRev =
    selectedPri === "All Priorities"
      ? filteredInReviewTasks
      : filteredInReviewTasks.filter((items) => items.priority === selectedPri);

  const CardOptions = [
    {
      id: 1,
      label: "To Do",
      data: sFilterdTodo,
    },
    {
      id: 2,
      label: "In Progress",
      data: sFilterdInProg,
    },
    {
      id: 3,
      label: "In Review",
      data: sFilterdInRev,
    },
    {
      id: 4,
      label: "Completed",
      data: filteredCompleted,
    },
  ];
  return (
    <div className="flex justify-between max-h-160 min-h-100">
      {CardOptions.map((items) => {
        return <TaskCards data={items} key={items.id} />;
      })}
    </div>
  );
};

export default DetailedTasksInformation;
