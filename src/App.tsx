import { TaskList } from "./features/tasks/TaskList";
import { useAddNewTaskMutation } from "./features/tasks/tasksApiSlice";

export const App = () => {
  const [addNewTask] = useAddNewTaskMutation();
  return (
    <>
      <button onClick={() => addNewTask("hardcoded text")}>add new task</button>
      <div>
        Tasky:
        <TaskList />
      </div>
    </>
  );
};
