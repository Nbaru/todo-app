import type { ChangeEvent } from "react";
import { useState } from "react";
import { Icon } from "../../shared/Icon";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

export const AddNewTask: React.FC<{
  readonly onSave: (text: string) => void;
}> = ({ onSave }) => {
  const [text, setText] = useState("");

  const onTaskTextChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  return (
    <form className="flex grow space-x-3">
      <input
        className="input input-md input-bordered w-full max-w-xs"
        type="text"
        id="taskText"
        name="taskText"
        value={text}
        onChange={onTaskTextChanged}
        placeholder="Add task ..."
      />

      <button
        className="btn btn-outline btn-primary btn-md"
        disabled={!text}
        onClick={e => {
          e.preventDefault();
          onSave(text);
          setText("");
        }}
        type="submit"
      >
        <Icon iconDefiniton={faPlus} tooltipText="Add task" />
      </button>
    </form>
  );
};

AddNewTask.displayName = "AddNewTask";
