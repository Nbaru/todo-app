import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deleteTask, selectTaskById } from "../tasksSlice";
import { Task as Component } from "../components/Task";
import type { Guid } from "../types";
import { IconButton } from "../../shared/IconButton";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Task: React.FC<{ readonly id: Guid }> = ({ id }) => {
  const dispatch = useAppDispatch();
  const task = useAppSelector(s => selectTaskById(s, id));

  if (!task) {
    return null;
  }

  return (
    <Component
      task={task}
      controls={
        <div className="space-x-3">
          <IconButton iconDefiniton={faPencil} tooltipText="Edit" />
          <IconButton
            iconDefiniton={faTrash}
            tooltipText="Delete"
            onClick={() => dispatch(deleteTask(task.id))}
          />
        </div>
      }
    />
  );
};

Task.displayName = "Task";
