import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../../app/hooks";
import { Icon } from "../../shared/Icon";
import { completeTask } from "../tasksSlice";
import type { Guid } from "../types";

export const CompleteActiveTasksButton: React.FC<{
  readonly tasksIds: ReadonlyArray<Guid>;
}> = ({ tasksIds }) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="btn-outline btn-primary rounded-md"
      onClick={() => {
        tasksIds.forEach(id => dispatch(completeTask(id)));
      }}
    >
      <Icon
        iconDefiniton={faCheck}
        size="lg"
        tooltipText="Complete all active tasks"
      />
    </button>
  );
};

CompleteActiveTasksButton.displayName = "CompleteActiveTasksButton";
