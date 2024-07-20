import type { FilterCondition } from "../components/FilterTasks";
import { FilterTasks } from "../components/FilterTasks";
import type { ReactNode } from "react";

export const TaskListHeader: React.FC<{
  readonly setFilterCondition: (condition: FilterCondition) => void;
  readonly renderControl: () => ReactNode;
}> = ({ setFilterCondition, renderControl }) => (
  <div className="flex justify-between">
    <FilterTasks setFilterCondition={setFilterCondition} />

    {renderControl()}
  </div>
);
