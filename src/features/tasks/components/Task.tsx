import type { ClientTask } from "../types";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../../shared/IconButton";

export const Task: React.FC<{ readonly task?: ClientTask }> = ({ task }) => (
  <div className="flex justify-between items-center space-x-4 bg-neutral rounded-xl px-4">
    <label className="label cursor-pointer grow flex justify-start space-x-2">
      <input
        type="checkbox"
        checked={!!task?.completed}
        className="checkbox checkbox-primary"
      />
      <span className="label-text">{task?.text}</span>
    </label>

    <div className="space-x-3">
      <IconButton iconDefiniton={faPencil} tooltipText="Edit" />

      <IconButton iconDefiniton={faTrash} tooltipText="Delete" />
    </div>
  </div>
);

Task.displayName = "Task";
