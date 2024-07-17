import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchTasks, selectAllTasksIds } from "../tasksSlice";
import { TaskList as Component } from "../components/TaskList";

export const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();

  const tasksIds = useAppSelector(selectAllTasksIds);
  const status = useAppSelector(s => s.tasks.status);
  const error = useAppSelector(s => s.tasks.error);

  // React intentionally renders components twice during development to help identify potential issues.
  // This double rendering triggers useEffect to run twice as well. This behavior is intentional and does not occur in production builds.
  //@todo: cancel fetchind data on unmount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  return <Component status={status} error={error} ids={tasksIds} />;
};

TaskList.displayname = "TaskList";
