import { Alert } from "../../shared/Alert";
import { Loader } from "../../shared/Loader";
import { Task } from "../containers/Task";
import type { Guid, Status } from "../types";

export const TaskList: React.FC<{
  readonly ids: ReadonlyArray<Guid>;
  readonly status: Status;
  readonly error: string | null;
}> = ({ ids, status, error }) => {
  if (error) {
    return (
      <Alert text={`${error}. Try reload page or contact us.`} type="error" />
    );
  }

  if (status === "loading") {
    return <Loader />;
  }

  if (!ids.length) {
    return <Alert text="There are no tasks." type="info" />;
  }

  return (
    <ul className="space-y-3">
      {ids.map((id: Guid) => (
        <Task key={id} id={id} />
      ))}
    </ul>
  );
};

TaskList.displayName = "TaskList";
