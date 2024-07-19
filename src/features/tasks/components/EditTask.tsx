import { useState } from "react";
import { Icon } from "../../shared/Icon";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";

export const EditTask: React.FC<{
  readonly text: string;
  readonly saveTask: (text: string) => void;
  readonly cancelEditing: () => void;
}> = ({ text, saveTask, cancelEditing }) => {
  const [taskText, setTaskText] = useState(text);

  return (
    <form className="flex min-h-10 items-center justify-between space-x-4 rounded-xl bg-neutral px-4">
      <input
        className="input input-sm input-bordered flex w-full max-w-xs grow"
        type="text"
        id="edit-task"
        name="edit-task"
        onChange={e => setTaskText(e.target.value)}
        value={taskText}
      ></input>

      <div className="space-x-3">
        <button
          className="btn-outline btn-primary rounded-md"
          onClick={e => {
            e.preventDefault();
            saveTask(taskText);
          }}
        >
          <Icon iconDefiniton={faCheck} tooltipText="Save task" />
        </button>

        <button
          className="btn-outline btn-error rounded-md"
          onClick={cancelEditing}
        >
          <Icon iconDefiniton={faClose} tooltipText="Cancel" />
        </button>
      </div>
    </form>
  );
};

EditTask.displayName = "EditTask";
