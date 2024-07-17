import type { ClientTask } from "../types";
import type { ReactNode } from "react";

export const Task: React.FC<{
  readonly task: ClientTask;
  readonly controls: ReactNode;
}> = ({ task, controls }) => (
  <div className="flex justify-between items-center space-x-4 bg-neutral rounded-xl px-4">
    <label className="label cursor-pointer grow flex justify-start space-x-2">
      <input
        type="checkbox"
        defaultChecked={!!task.completed}
        className="checkbox checkbox-primary"
      />
      <span className="label-text">{task.text}</span>
    </label>

    {controls}
  </div>
);

Task.displayName = "Task";
