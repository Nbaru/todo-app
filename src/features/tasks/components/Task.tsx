import type { ClientTask } from "../types";
import type { ReactNode } from "react";

export const Task: React.FC<{
  readonly task: ClientTask;
  readonly controls: ReactNode;
}> = ({ task, controls }) => (
  <div className="flex items-center justify-between space-x-4 rounded-xl bg-neutral px-4">
    <label className="label flex grow cursor-pointer justify-start space-x-2">
      <input
        type="checkbox"
        defaultChecked={!!task.completed}
        className="checkbox-primary checkbox"
      />
      <span className="label-text">{task.text}</span>
    </label>

    {controls}
  </div>
);

Task.displayName = "Task";
