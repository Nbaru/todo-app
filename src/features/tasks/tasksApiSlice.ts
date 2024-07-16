import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Task = {
  readonly id: string;
  readonly text: string;
  readonly completed: boolean;
  readonly createdDate: number;
  readonly completedDate: number;
};

export const tasksApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  reducerPath: "tasksApi",
  tagTypes: ["Task"],
  endpoints: build => ({
    getTasks: build.query<ReadonlyArray<Task>, void>({
      query: () => "/tasks",
      providesTags: ["Task"],
    }),
    addNewTask: build.mutation<Task, string>({
      query: text => ({
        url: "/tasks",
        method: "POST",
        body: { text },
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const { useGetTasksQuery, useAddNewTaskMutation } = tasksApiSlice;
