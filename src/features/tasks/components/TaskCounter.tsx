import { getSingularOrPlural } from "../../../utils/text-utils";
import { Loader } from "../../shared/Loader";
import type { Status } from "../types";

export const TaskCounter: React.FC<{
  readonly taskCount: number;
  readonly doneTaskCount: number;
  readonly status: Status;
}> = ({ taskCount, doneTaskCount, status }) => {
  const doneTasksInPercent = (100 * doneTaskCount) / taskCount;

  if (status === "loading") {
    return <Loader size="md" color="secondary" />;
  }

  return (
    <div
      className="tooltip tooltip-info p-1"
      data-tip={`${doneTaskCount} ${getSingularOrPlural("task", doneTaskCount)} done from ${taskCount} ${getSingularOrPlural("task", taskCount)}`}
    >
      <div
        className="radial-progress text-secondary"
        style={{ "--value": doneTasksInPercent }}
        role="progressbar"
      >
        {`${doneTaskCount}/${taskCount}`}
      </div>
    </div>
  );
};

TaskCounter.displayName = "TaskCounter";
