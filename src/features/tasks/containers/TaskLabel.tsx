import { useAppDispatch } from "../../../app/hooks";
import { TaskLabel as Component } from "../components/TaskLabel";
import { completeTask, incompleteTask } from "../tasksSlice";
import type { Guid } from "../types";

export const TaskLabel: React.FC<{
  readonly completed: boolean;
  readonly text: string;
  readonly id: Guid;
}> = ({ completed, text, id }) => {
  const dispatch = useAppDispatch();

  const toggleDone = () => {
    if (completed) {
      dispatch(incompleteTask(id));
    } else {
      dispatch(completeTask(id));
    }
  };

  return (
    <Component completed={completed} text={text} toggleDone={toggleDone} />
  );
};
