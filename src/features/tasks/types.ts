export type ServerTask = {
  readonly id: string;
  readonly text: string;
  readonly completed: boolean;
  readonly createdDate: number | null;
  readonly completedDate?: number;
};

export type ClientTask = {
  readonly id: string;
  readonly text: string;
  readonly completed: boolean;
  readonly createdDate: number | null;
  readonly completedDate: number | null;
  readonly error: string | null;
};

export type Guid = string;
export type Status = "idle" | "loading" | "succeeded" | "failed";

export type Store = {
  readonly allIds: ReadonlyArray<Guid>;
  readonly byId: ReadonlyArray<ClientTask>;
  readonly status: Status;
  readonly error: string | null;
};
