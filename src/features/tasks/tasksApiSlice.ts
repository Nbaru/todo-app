import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Task = {
  readonly id: string;
  readonly text: string;
  readonly completed: boolean;
  readonly createdDate: null;
  readonly completedDate: null;
};

export const tasksApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  reducerPath: "todosApi",
  tagTypes: ["tasks"],
  endpoints: build => ({
    getTasks: build.query<ReadonlyArray<Task>, void>({
      query: () => "/tasks",
    }),
  }),
});

export const { useGetTasksQuery } = tasksApiSlice;
