import { Loader } from "../../shared/Loader";
import type { Status } from "../types";

export const TaskCounter: React.FC<{
  readonly taskCount: number;
  readonly doneTaskCount: number;
  readonly status: Status;
}> = ({ taskCount, doneTaskCount, status }) => {
  const doneTaskInPercent = (100 * doneTaskCount) / taskCount;

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div
      className="tooltip tooltip-info p-1"
      data-tip={`${doneTaskCount} tasks done from ${taskCount} tasks`}
    >
      <div
        className="radial-progress text-secondary"
        style={{ "--value": doneTaskInPercent }}
        role="progressbar"
      >
        {`${doneTaskCount}/${taskCount}`}
      </div>
    </div>
  );
};
