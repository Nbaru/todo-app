import { useGetTasksQuery } from "./tasksApiSlice";

export const TaskList = () => {
  const { data: tasks, isError, isLoading, isSuccess } = useGetTasksQuery();

  if (isError) {
    return (
      <div>
        <h1>There was an error. Try reload page or contact us.</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div>
        {tasks.map(({ text }, i) => (
          <div key={i}>{text}</div>
        ))}
      </div>
    );
  }

  return null;
};
