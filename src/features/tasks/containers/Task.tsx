import { useAppSelector } from "../../../app/hooks";
import { selectTaskById } from "../tasksSlice";
import { Task as Component } from "../components/Task";
import type { Guid } from "../types";

export const Task: React.FC<{ readonly id: Guid }> = ({ id }) => {
  const task = useAppSelector(s => selectTaskById(s, id));

  return <Component task={task} />;
};

Task.displayName = "Task";
