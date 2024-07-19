import { useAppSelector } from "../../../app/hooks";
import { TaskCounter as Component } from "../components/TaskCounter";
import {
  selectDoneTaskCount,
  selectStatus,
  selectTaskCount,
} from "../tasksSlice";

export const TaskCounter: React.FC = () => {
  const taskCount = useAppSelector(selectTaskCount);
  const doneTaskCount = useAppSelector(selectDoneTaskCount);
  const status = useAppSelector(selectStatus);

  return (
    <Component
      taskCount={taskCount}
      doneTaskCount={doneTaskCount}
      status={status}
    />
  );
};
