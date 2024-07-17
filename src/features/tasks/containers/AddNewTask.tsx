import type { ChangeEvent, MouseEvent as ReactMouseEvent } from "react";
import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { addNewTask } from "../tasksSlice";

export const AddNewTask: React.FC = () => {
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();

  const onTaskTextChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onSaveTaskClicked = (
    e: ReactMouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (!text) {
      return;
    }

    e.preventDefault();
    dispatch(addNewTask(text));
    setText("");
  };

  return (
    <section>
      <form>
        <label htmlFor="taskText">Task:</label>
        <input
          type="text"
          id="taskText"
          name="taskText"
          value={text}
          onChange={onTaskTextChanged}
        />

        <button
          className="btn btn-primary"
          onClick={onSaveTaskClicked}
          type="submit"
        >
          Save task
        </button>
      </form>
    </section>
  );
};

AddNewTask.displayName = "AddNewTask";
