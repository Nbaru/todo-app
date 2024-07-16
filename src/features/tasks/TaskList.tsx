import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTasks, selectAllTasks } from "./tasksSlice";

export const TaskList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectAllTasks);

  const status = useAppSelector(s => s.tasks.status);
  const error = useAppSelector(s => s.tasks.error);

  // React intentionally renders components twice during development to help identify potential issues.
  // This double rendering triggers useEffect to run twice as well. This behavior is intentional and does not occur in production builds.
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);
  //todo cancel

  if (error) {
    return (
      <div>
        <h1>{error}. Try reload page or contact us.</h1>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      {tasks.map(({ text, id }) => (
        <div key={id}>{text}</div>
      ))}
    </div>
  );
};
