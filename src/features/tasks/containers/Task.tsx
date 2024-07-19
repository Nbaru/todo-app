import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deleteTask, selectTaskById, updateTask } from "../tasksSlice";
import { Task as Component } from "../components/Task";
import type { Guid } from "../types";
import { Icon } from "../../shared/Icon";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { EditTask } from "../components/EditTask";
import { TaskLabel } from "../components/TaskLabel";

export const Task: React.FC<{ readonly id: Guid }> = ({ id }) => {
  const dispatch = useAppDispatch();

  const task = useAppSelector(s => selectTaskById(s, id));
  const [isEditing, setIsEditing] = useState(false);

  if (!task) {
    return null;
  }

  //@todo: error state

  return isEditing ? (
    <EditTask
      text={task.text}
      saveTask={(text: string) => {
        setIsEditing(false);
        dispatch(updateTask({ id: task.id, text }));
      }}
      cancelEditing={() => setIsEditing(false)}
    />
  ) : (
    <Component
      renderContent={() => (
        <TaskLabel completed={task.completed} text={task.text} />
      )}
      renderControls={() => (
        <>
          <button
            className="btn-outline btn-primary rounded-md"
            onClick={() => setIsEditing(true)}
          >
            <Icon iconDefiniton={faPencil} tooltipText="Edit" />
          </button>

          <button
            className="btn-outline btn-error rounded-md"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            <Icon iconDefiniton={faTrash} tooltipText="Delete" />
          </button>
        </>
      )}
    />
  );
};

Task.displayName = "Task";
