import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import type { Store, ServerTask, Guid, ClientTask } from "./types";

const emptyTask: ClientTask = {
  id: "",
  text: "",
  completed: false,
  createdDate: null,
  completedDate: null,
  error: null,
};

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
    selectAllTasks: s => s.byId,
    selectTaskById: (s, id) => s.byId.find(t => t.id === id),
    selectStatus: s => s.status,
    selectError: s => s.error,
    selectTaskCount: s => s.allIds.length,
    selectDoneTaskCount: s => s.byId.filter(t => t.completed).length,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allIds = action.payload.map((task: ServerTask) => task.id);
        state.byId = action.payload.map((task: ServerTask) => ({
          ...emptyTask,
          ...task,
        }));
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      })

      .addCase(addNewTask.fulfilled, (state, action) => {
        state.allIds.unshift(action.payload.id);
        state.byId.unshift({ ...emptyTask, ...action.payload });
      })
      .addCase(addNewTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      })

      .addCase(updateTask.fulfilled, (state, action) => {
        state.byId = state.byId.map((task: ClientTask) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task,
        );
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      })

      .addCase(completeTask.fulfilled, (state, action) => {
        state.byId = state.byId.map((task: ClientTask) =>
          task.id === action.payload.id
            ? {
                ...task,
                completed: action.payload.completed,
                completedDate: action.payload.completedDate,
              }
            : task,
        );
      })
      .addCase(completeTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      })

      .addCase(incompleteTask.fulfilled, (state, action) => {
        state.byId = state.byId.map((task: ClientTask) =>
          task.id === action.payload.id
            ? {
                ...task,
                completed: action.payload.completed,
                completedDate: null,
              }
            : task,
        );
      })
      .addCase(incompleteTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      })

      .addCase(deleteTask.fulfilled, (state, action) => {
        const allIdsIndex = state.allIds.indexOf(action.payload);
        const byIdIndex = state.byId.findIndex(
          (task: ClientTask) => task.id === action.payload,
        );

        state.allIds.splice(allIdsIndex, 1);
        state.byId.splice(byIdIndex, 1);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export const {
  selectAllTasksIds,
  selectAllTasks,
  selectTaskById,
  selectStatus,
  selectError,
  selectTaskCount,
  selectDoneTaskCount,
} = tasksSlice.selectors;

export const getActiveTasksIds = createSelector([selectAllTasks], tasks =>
  tasks.filter(t => t.completed === false).map(t => t.id),
);
export const getDoneTasksIds = createSelector([selectAllTasks], tasks =>
  tasks.filter(t => t.completed).map(t => t.id),
);

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

type UpdateData = {
  readonly id: Guid;
  readonly text: string;
};
export const updateTask = createAsyncThunk(
  "tasks/update",
  async (data: UpdateData) => {
    const response = await fetch(`${baseUrl}/tasks/${data.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: data.text }),
    });

    return response.json();
  },
);

export const completeTask = createAsyncThunk(
  "tasks/complete",
  async (id: Guid) => {
    const response = await fetch(`${baseUrl}/tasks/${id}/complete`, {
      method: "POST",
    });

    return response.json();
  },
);

export const incompleteTask = createAsyncThunk(
  "tasks/incomplete",
  async (id: Guid) => {
    const response = await fetch(`${baseUrl}/tasks/${id}/incomplete`, {
      method: "POST",
    });

    return response.json();
  },
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: Guid) => {
    await fetch(`${baseUrl}/tasks/${id}`, {
      method: "DELETE",
    });

    return id;
  },
);
