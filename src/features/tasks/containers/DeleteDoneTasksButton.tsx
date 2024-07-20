import { useAppDispatch } from "../../../app/hooks";
import { Icon } from "../../shared/Icon";
import { deleteTask } from "../tasksSlice";
import type { Guid } from "../types";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const DeleteDoneTasksButton: React.FC<{
  readonly tasksIds: ReadonlyArray<Guid>;
}> = ({ tasksIds }) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="btn-outline btn-primary btn-error rounded-md"
      onClick={() => {
        tasksIds.forEach(id => dispatch(deleteTask(id)));
      }}
    >
      <Icon
        iconDefiniton={faTrash}
        size="lg"
        tooltipText="Delete all done tasks"
      />
    </button>
  );
};

DeleteDoneTasksButton.displayName = "DeleteDoneTasksButton";
