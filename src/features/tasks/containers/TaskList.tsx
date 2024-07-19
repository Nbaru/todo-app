import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchTasks,
  selectActiveTasksIds,
  selectAllTasksIds,
  selectDoneTasksIds,
  selectError,
  selectStatus,
} from "../tasksSlice";
import { TaskList as Component } from "../components/TaskList";
import { FilterTasks } from "../components/FilterTasks";
import type { FilterCondition } from "../components/FilterTasks";

export const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();

  const tasksIds = useAppSelector(selectAllTasksIds);
  const activeTasksIds = useAppSelector(selectActiveTasksIds);
  const doneTasksIds = useAppSelector(selectDoneTasksIds);
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
          "The value is wrong. Only [all, active, done] is accepted.",
        );
        return [];
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
      <FilterTasks setFilterCondition={setFilterCondition} />

      <Component
        status={status}
        error={error}
        ids={getTasksIds(filterCondition)}
      />
    </div>
  );
};

TaskList.displayName = "TaskList";
