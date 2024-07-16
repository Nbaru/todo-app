import type { ChangeEvent } from "react";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addNewTask } from "./tasksSlice";

export const AddNewTask = () => {
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();

  const onTaskTextChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onSaveTaskClicked = () => {
    if (!text) {
      return;
    }

    dispatch(addNewTask(text));
    setText("");
  };

  return (
    <section>
      <h2>Add a task</h2>
      <form>
        <label htmlFor="taskText">Task:</label>
        <input
          type="text"
          id="taskText"
          name="taskText"
          value={text}
          onChange={onTaskTextChanged}
        />
        <button onClick={onSaveTaskClicked} type="button">
          Save task
        </button>
      </form>
    </section>
  );
};
