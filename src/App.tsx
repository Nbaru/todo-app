import { Divider } from "./features/shared/Divider";
import { AddNewTask } from "./features/tasks/containers/AddNewTask";
import { TaskCounter } from "./features/tasks/containers/TaskCounter";
import { TaskList } from "./features/tasks/containers/TaskList";

export const App = () => {
  return (
    <div className="mx-auto my-10 max-w-xl px-2.5">
      <div className="flex items-center justify-between">
        <AddNewTask />
        <TaskCounter />
      </div>

      <Divider />

      <TaskList />
    </div>
  );
};
