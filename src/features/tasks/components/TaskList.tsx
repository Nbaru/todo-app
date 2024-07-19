import { Loader } from "../../shared/Loader";
import { Task } from "../containers/Task";
import type { Guid, Status } from "../types";

export const TaskList: React.FC<{
  readonly ids: ReadonlyArray<Guid>;
  readonly status: Status;
  readonly error: string | null;
}> = ({ ids, status, error }) => {
  //@todo: empty state
  if (error) {
    return <div>{error}. Try reload page or contact us.</div>;
  }

  if (status === "loading") {
    return <Loader />;
  }
  return (
    <div className="space-y-3">
      {ids.map((id: Guid) => (
        <Task key={id} id={id} />
      ))}
    </div>
  );
};

TaskList.displayName = "TaskList";
