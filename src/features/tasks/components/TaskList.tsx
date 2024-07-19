import { Task } from "../containers/Task";
import type { Guid, Status } from "../types";

export const TaskList: React.FC<{
  readonly ids: ReadonlyArray<Guid>;
  readonly status: Status;
  readonly error: string | null;
}> = ({ ids, status, error }) => {
  if (error) {
    return <div>{error}. Try reload page or contact us.</div>;
  }

  if (status === "loading") {
    return (
      <div className="mt-10 flex justify-center align-middle">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
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
