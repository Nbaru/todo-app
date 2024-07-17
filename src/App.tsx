import { AddNewTask } from "./features/tasks/containers/AddNewTask";
import { TaskList } from "./features/tasks/containers/TaskList";

export const App = () => {
  return (
    <div className="max-w-xl px-2.5 mx-auto my-10">
      <AddNewTask />
      <TaskList />
    </div>
  );
};
