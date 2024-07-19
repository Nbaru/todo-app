export const TaskLabel: React.FC<{
  readonly completed: boolean;
  readonly text: string;
  readonly toggleDone: () => void;
}> = ({ completed, text, toggleDone }) => (
  <label className="label flex grow cursor-pointer justify-start space-x-2">
    <input
      type="checkbox"
      checked={completed}
      className="checkbox-primary checkbox"
      onChange={() => toggleDone()}
    />
    <span className="label-text">{text}</span>
  </label>
);

TaskLabel.displayName = "TaskLabel";
