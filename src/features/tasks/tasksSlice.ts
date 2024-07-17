import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Store, ServerTask } from "./types";

const initialState: Store = {
  allIds: [],
  byId: [],
  status: "idle",
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  selectors: {
    selectAllTasksIds: s => s.allIds,
    selectTaskById: (s, id) => s.byId.find(task => task.id === id),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allIds = action.payload.map((task: ServerTask) => task.id);
        state.byId = action.payload;
        console.log(state.byId);
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      })

      .addCase(addNewTask.fulfilled, (state, action) => {
        state.allIds.push(action.payload.id);
        state.byId.push(action.payload);
      });
  },
});

export const { selectAllTasksIds, selectTaskById } = tasksSlice.selectors;

const baseUrl = "http://localhost:8080";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch(`${baseUrl}/tasks`);

  return response.json();
});

export const addNewTask = createAsyncThunk(
  "tasks/addNewTask",
  async (text: string) => {
    const response = await fetch(`${baseUrl}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    return response.json();
  },
);
