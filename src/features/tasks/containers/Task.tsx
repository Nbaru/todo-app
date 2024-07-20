import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  deleteTask,
  selectError,
  selectTaskById,
  updateTask,
} from "../tasksSlice";
import { Task as Component } from "../components/Task";
import type { Guid } from "../types";
import { Icon } from "../../shared/Icon";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { EditTask } from "../components/EditTask";
import { TaskLabel } from "../containers/TaskLabel";
import { Error } from "../../shared/Error";

export const Task: React.FC<{ readonly id: Guid }> = ({ id }) => {
  const dispatch = useAppDispatch();

  const task = useAppSelector(s => selectTaskById(s, id));
  const error = useAppSelector(selectError);

  const [isEditing, setIsEditing] = useState(false);

  if (!task) {
    return null;
  }

  if (error) {
    return <Error errorText={`${error}. Try reload page or contact us.`} />;
  }

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
        <TaskLabel completed={task.completed} text={task.text} id={task.id} />
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
