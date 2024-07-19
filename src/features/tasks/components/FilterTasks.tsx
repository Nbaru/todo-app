export type FilterCondition = "all" | "active" | "done";

export const FilterTasks: React.FC<{
  readonly setFilterCondition: (condition: FilterCondition) => void;
}> = ({ setFilterCondition }) => (
  <div className="join">
    <input
      className="btn join-item btn-sm"
      type="radio"
      defaultChecked={true}
      name="options"
      aria-label="Show all"
      onClick={() => setFilterCondition("all")}
    />
    <input
      className="btn join-item btn-sm"
      type="radio"
      name="options"
      aria-label="Show active"
      onClick={() => setFilterCondition("active")}
    />
    <input
      className="btn join-item btn-sm"
      type="radio"
      name="options"
      aria-label="Show done"
      onClick={() => setFilterCondition("done")}
    />
  </div>
);

FilterTasks.displayName = "FilterTasks";
