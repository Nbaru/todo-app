import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Task = {
  readonly id: string;
  readonly text: string;
  readonly completed: boolean;
  readonly createdDate: number | null;
  readonly completedDate?: number;
};

type Store = {
  readonly allTasks: ReadonlyArray<Task>;
  readonly status: "idle" | "loading" | "succeeded" | "failed";
  readonly error: string | null;
};

const initialState: Store = {
  allTasks: [],
  status: "idle",
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  selectors: {
    selectAllTasks: s => s.allTasks,
    selectTaskById: (s, id) => s.allTasks.find(task => task.id === id),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allTasks = [...action.payload]; //@todo: map is better (allIds, byId)
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      })

      .addCase(addNewTask.fulfilled, (state, action) => {
        state.allTasks.push(action.payload);
      });
  },
});

export const { selectAllTasks, selectTaskById } = tasksSlice.selectors;

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
