import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchTasks,
  getActiveTasksIds,
  getDoneTasksIds,
  selectAllTasksIds,
  selectError,
  selectStatus,
} from "../tasksSlice";
import { TaskList as Component } from "../components/TaskList";
import type { FilterCondition } from "../components/FilterTasks";
import { TaskListHeader } from "./TaskListHeader";
import { CompleteActiveTasksButton } from "./CompleteActiveTasksButton";
import { DeleteDoneTasksButton } from "./DeleteDoneTasksButton";

export const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();

  const tasksIds = useAppSelector(selectAllTasksIds);
  const activeTasksIds = useAppSelector(getActiveTasksIds);
  const doneTasksIds = useAppSelector(getDoneTasksIds);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  const [filterCondition, setFilterCondition] =
    useState<FilterCondition>("all");

  const getTasksIds = (filterCondition: FilterCondition) => {
    switch (filterCondition) {
      case "all":
        return tasksIds;
      case "active":
        return activeTasksIds;
      case "done":
        return doneTasksIds;
      default:
        console.log(
          "The case value is wrong. Only [all, active, done] is accepted.",
        );
        return [];
    }
  };

  const getTasksHeaderControl = (filterCondition: FilterCondition) => {
    switch (filterCondition) {
      case "all":
        return null;
      case "active":
        return <CompleteActiveTasksButton tasksIds={getTasksIds("active")} />;
      case "done":
        return <DeleteDoneTasksButton tasksIds={getTasksIds("done")} />;
      default:
        console.log(
          "The case value is wrong. Only [all, active, done] is accepted.",
        );
        return null;
    }
  };

  // React intentionally renders components twice during development to help identify potential issues.
  // This double rendering triggers useEffect to run twice as well. This behavior is intentional and does not occur in production builds.
  //@todo: cancel fetchind data on unmount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  return (
    <div className="space-y-4">
      <TaskListHeader
        setFilterCondition={setFilterCondition}
        renderControl={() => getTasksHeaderControl(filterCondition)}
      />

      <Component
        status={status}
        error={error}
        ids={getTasksIds(filterCondition)}
      />
    </div>
  );
};

TaskList.displayName = "TaskList";
