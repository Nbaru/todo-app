export const TaskLabel: React.FC<{
  readonly completed: boolean;
  readonly text: string;
}> = ({ completed, text }) => (
  <label className="label flex grow cursor-pointer justify-start space-x-2">
    <input
      type="checkbox"
      defaultChecked={!!completed}
      className="checkbox-primary checkbox"
    />
    <span className="label-text">{text}</span>
  </label>
);

TaskLabel.displayName = "TaskLabel";
