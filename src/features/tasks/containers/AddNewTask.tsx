import { useAppDispatch } from "../../../app/hooks";
import { addNewTask } from "../tasksSlice";
import { AddNewTask as Component } from "../components/AddNewTask";

export const AddNewTask: React.FC = () => {
  const dispatch = useAppDispatch();

  return <Component onSave={text => dispatch(addNewTask(text))} />;
};

AddNewTask.displayName = "AddNewTask";
