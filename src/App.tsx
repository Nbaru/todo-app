import { TaskList } from "./features/tasks/TaskList";
import { AddNewTask } from "./features/tasks/AddNewTask";

export const App = () => {
  return (
    <>
      <AddNewTask />
      <div>
        Tasky:
        <TaskList />
      </div>
    </>
  );
};
